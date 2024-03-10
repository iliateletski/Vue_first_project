<script setup lang="ts">
import PaginationItem from './PaginationItem.vue'
import { LIMIT } from '@/utils/consts'
import { getPaginationList } from '@/utils'
import { computed } from 'vue'
import { NameRoutes } from '@/router/router'

interface PaginationComponentProps {
  currentPage: number
  totalCount: number
}

const props = defineProps<PaginationComponentProps>()
const paginationList = computed(() => getPaginationList(props.totalCount, LIMIT, props.currentPage))
</script>

<template>
  <div class="pagination">
    <RouterLink
      class="link_go"
      :to="{
        name: NameRoutes.table,
        params: { id: currentPage > 1 ? currentPage - 1 : currentPage }
      }"
    >
      Назад
    </RouterLink>
    <ul class="pagination_items">
      <PaginationItem
        v-for="page in paginationList.pages"
        :key="page"
        :page="page"
        :to="{ name: NameRoutes.table, params: { id: page } }"
      />
    </ul>
    <RouterLink
      :class="'link_go'"
      :to="{
        name: NameRoutes.table,
        params: { id: currentPage < paginationList.pagesTotal ? currentPage + 1 : currentPage }
      }"
      >Далее
    </RouterLink>
  </div>
</template>

<style>
.pagination {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  flex: 0 0 auto;
}

.link_go {
  font-size: 24px;
  line-height: 33px;
  background-color: transparent;
  border: none;
  color: #474955;
}

.pagination_items {
  display: flex;
  padding: 0;
}

.active {
  color: #7ebc3c;
}

@media (max-width: 590px) {
  .link_go {
    font-size: 21px;
  }
}

@media (max-width: 420px) {
  .pagination {
    padding: 0;
  }

  .link_go {
    font-size: 14px;
  }
}
</style>
