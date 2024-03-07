<script setup lang="ts">
import SearchComponent from '../components/SearchComponent.vue'
import PaginationComponent from '../components/PaginationComponent.vue'
import { inject } from 'vue'
import type { PaginationProvide, QueryProvide } from '@/typing/typing'
import { useRoute } from 'vue-router'

const { setQuery } = inject('query') as QueryProvide
const { pagination } = inject('pagination') as PaginationProvide
const route = useRoute()
</script>

<template>
  <div class="container">
    <SearchComponent @search="setQuery" />
    <RouterView />
    <PaginationComponent :currentPage="+route.params.id" :totalCount="pagination.totalCount" />
  </div>
</template>

<style scoped>
.container {
  max-width: 1232px;
  padding: 23px 78px 12px;
  margin: 0 auto;
  box-shadow: 0px 4px 27px 0px #e6e7eac7;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

@media (max-width: 740px) {
  .container {
    padding: 23px 40px 12px;
  }
}

@media (max-width: 590px) {
  .container {
    padding: 23px 23px 12px;
  }
}
</style>
