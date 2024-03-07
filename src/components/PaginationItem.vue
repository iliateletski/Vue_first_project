<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface PaginationItemProps {
  to: string
  page: number | string
}

const props = defineProps<PaginationItemProps>()
</script>
<template>
  <li class="pagination_item">
    <RouterLink active-class="active" v-if="typeof props.page === 'number'" :to="props.to">
      {{ props.page }}
    </RouterLink>
    <span v-else>{{ props.page }}</span>
  </li>
</template>

<style scoped>
.pagination_item {
  color: #474955;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  font-style: italic;
  border: none;
  background-color: transparent;
  user-select: none;
}

.pagination_item + .pagination_item {
  margin-left: 14px;
}

.active {
  color: #7ebc3c;
}

@media (max-width: 590px) {
  .pagination_item {
    font-size: 16px;
  }
}

@media (max-width: 420px) {
  .pagination_item {
    font-size: 12px;
  }
}
</style>
