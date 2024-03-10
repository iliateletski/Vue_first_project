import type { PaginationProvide, QueryProvide } from '@/typing/typing'
import { ref } from 'vue'

const query = ref<string>('')
const setQuery = (value: string) => {
  query.value = value
}

export const queryProvide: QueryProvide = {
  query,
  setQuery
}

const totalCount = ref<number>(0)
const setTotalCount = (value: number) => {
  totalCount.value = value
}

export const paginationProvide: PaginationProvide = {
  totalCount,
  setTotalCount
}
