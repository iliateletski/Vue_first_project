import type { Pagination, PaginationProvide, QueryProvide } from '@/typing/typing'
import { ref } from 'vue'

const query = ref<string>('')
const setQuery = (value: string) => {
  query.value = value
}

export const queryProvide: QueryProvide = {
  query,
  setQuery
}

const pagination = ref({ totalCount: 0, currentPage: 1 })
const setPagination = (newValue: Pagination) => {
  pagination.value = newValue
}

export const paginationProvide: PaginationProvide = {
  pagination,
  setPagination
}
