<script setup lang="ts">
import { ref, watch } from 'vue'
import SearchIcon from './icons/SearchIcon.vue'

const query = ref<string>('')
const emit = defineEmits<{ search: [query: string] }>()

watch(query, () => {
  emit('search', query.value)
})
</script>

<template>
  <div class="search_box">
    <input class="search_input" placeholder="Поиск" v-model="query" />
    <span class="search_icon_box">
      <SearchIcon />
    </span>
  </div>
</template>

<style>
.search_box {
  background-color: #5a5c66;
  display: flex;
  align-items: center;
  padding: 15px 26px;
  max-width: 631px;
  justify-content: space-between;
  margin-bottom: 15px;
}

.search_input {
  background-color: transparent;
  border: none;
  color: #b2b7bf;
  outline: none;
  width: 95%;
}

.search_input::placeholder {
  color: #b2b7bf;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 19px;
}

.search_icon_box {
  display: inline-flex;
}
</style>
