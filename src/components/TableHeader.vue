<script setup lang="ts">
import { SortParam } from '@/typing/typing'
import ArrowIcon from './icons/ArrowIcon.vue'

const emit = defineEmits<{ sort: [param: SortParam] }>()
</script>

<template>
  <thead className="header">
    <tr className="header_tr">
      <th className="header_th">
        <button className="header_btn" @click="() => emit('sort', SortParam.id)">
          <span className="header_btn_text">ID</span>
          <ArrowIcon />
        </button>
      </th>
      <th className="header_th">
        <button className="header_btn" @click="() => emit('sort', SortParam.title)">
          <span className="header_btn_text"> Заголовок </span>
          <ArrowIcon />
        </button>
      </th>
      <th className="header_th">
        <button className="header_btn" @click="() => emit('sort', SortParam.body)">
          <span className="header_btn_text">Описание</span>
          <ArrowIcon />
        </button>
      </th>
    </tr>
  </thead>
</template>

<style scoped>
.header {
  background-color: #474955;
  box-shadow: 0px 4px 27px 0px #e6e7eac7;
  height: max-content;
}

.header_th {
  padding: 19px 0 16px;
  text-align-last: left;
}

.header_th:nth-child(1) {
  width: 10%;
  text-transform: uppercase;
}

.header_th:nth-child(2) {
  width: 50%;
}

.header_th:nth-child(3) {
  width: 40%;
}

.header_btn {
  margin-left: 25%;
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  color: #fff;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
}

.header_btn_text {
  margin-right: 2vw;
}

.header_btn_icon {
  width: 12px;
  height: 7px;
}

@media (max-width: 590px) {
  .header_btn_text {
    margin-right: 1vw;
  }

  .header_btn_icon {
    width: 9px;
    height: 5px;
  }
}

@media (max-width: 590px) {
  .header_btn {
    font-size: 12px;
  }
}
</style>
