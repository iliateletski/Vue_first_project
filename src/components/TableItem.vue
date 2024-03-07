<script setup lang="ts">
import type { Post } from '@/typing/typing'

interface TableItemProps {
  post: Post
}

const props = defineProps<TableItemProps>()
const { body, id, title } = props.post
</script>

<template>
  <tr class="table_item">
    <td class="table_item_td">{{ id }}</td>
    <td class="table_item_td">{{ title }}</td>
    <td class="table_item_td">{{ body }}</td>
  </tr>
</template>

<style scoped>
.table_item_td {
  border: 1px solid #e3e6ec;
  padding: 10px;
  height: 56px;
}

.table_item_td:first-child {
  text-align: center;
}
</style>
