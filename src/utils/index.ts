import type { Post } from '@/typing/typing'
import { SortParam } from '@/typing/typing'

export const getPaginationList = (totalCount: number, limit: number, curentPage: number) => {
  const pagesTotal = Math.ceil(totalCount / limit)
  const pages: (string | number)[] = [1]

  if (curentPage > pagesTotal) {
    pages.push(2, 3, 4, 5)
  } else {
    let startPage = 2
    if (pagesTotal > 5 && curentPage > 3) {
      pages.push('...')
      startPage = Math.min(curentPage - 1, pagesTotal - 3)
    }
    const endPage = startPage + 4
    for (startPage; startPage !== endPage; startPage++) {
      pages.push(startPage)
    }
  }
  return { pages, pagesTotal }
}

const check = (value: string, query: string) => {
  return value.toLocaleLowerCase().includes(query.toLocaleLowerCase())
}

export const filterAndSort = (posts: Post[], query: string, sortParam: SortParam | null) => {
  const filtered = query
    ? posts.filter(
        (post) =>
          check(`${post[SortParam.id]}`, query) ||
          check(post[SortParam.title], query) ||
          check(post[SortParam.body], query)
      )
    : [...posts]

  if (filtered.length === 0) return filtered

  if (sortParam) {
    return sortParam === SortParam.id
      ? [...filtered].sort((a, b) => b[sortParam] - a[sortParam])
      : [...filtered].sort((a, b) => a[sortParam].localeCompare(b[sortParam]))
  }

  return filtered
}
