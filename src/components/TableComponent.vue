<script setup lang="ts">
import { ref, computed, inject, watch } from 'vue'
import TableItem from './TableItem.vue'
import type { PaginationProvide, Post, SortParam } from '@/typing/typing'
import TableHeader from './TableHeader.vue'
import { filterAndSort } from '@/utils'
import LoaderComponent from './LoaderComponent.vue'
import { LIMIT } from '@/utils/consts'
import { useRoute, useRouter } from 'vue-router'
import { fetchPosts } from '@/api'

const posts = ref<Post[]>([])
const query = ref<string>('')
const isLoading = ref<boolean>(false)
const sortParam = ref<SortParam | null>(null)
const router = useRouter()
const route = useRoute()

const { pagination, setPagination } = inject('pagination') as PaginationProvide
const filteredPosts = computed(() => filterAndSort(posts.value, query.value, sortParam.value))

const updateSortParam = (value: SortParam) => {
  sortParam.value = value === sortParam.value ? null : value
}

watch(
  () => route.params.id,
  () => {
    isLoading.value = true
    fetchPosts(+route.params.id, LIMIT)
      .then(({ data, headers }) => {
        const totalCount = +headers['x-total-count']
        if (+route.params.id > totalCount / LIMIT) {
          router.push('/page/1')
        } else {
          posts.value = data
          setPagination({
            //TODO
            ...pagination.value,
            totalCount: totalCount
          })
        }
      })
      .finally(() => (isLoading.value = false))
  },
  { immediate: true }
)
</script>

<template>
  <div class="table_box">
    <table class="table">
      <TableHeader @sort="updateSortParam" />
      <tbody>
        <LoaderComponent v-if="isLoading" />
        <TableItem v-else v-for="post in filteredPosts" :key="post.id" :post="post" />
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table_box {
  flex-grow: 1;
}

.table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 24px;
}
</style>
@/utils
