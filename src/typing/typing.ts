import type { Ref } from 'vue'

export type QueryProvide = {
  query: Ref<string>
  setQuery: (value: string) => void
}

export type PaginationProvide = {
  totalCount: Ref<number>
  setTotalCount: (value: number) => void
}

export interface Post {
  id: number
  body: string
  title: string
  userId: number
}

export enum SortParam {
  id = 'id',
  title = 'title',
  body = 'body'
}
