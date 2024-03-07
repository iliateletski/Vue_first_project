import type { Ref } from 'vue'

export type QueryProvide = {
  query: Ref<string>
  setQuery: (value: string) => void
}

export type Pagination = { totalCount: number; currentPage: number }

export type PaginationProvide = {
  pagination: Ref<Pagination>
  setPagination: (value: Pagination) => void
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
