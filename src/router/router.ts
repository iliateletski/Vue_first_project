import { createRouter, createWebHistory } from 'vue-router'
import TableComponent from '../components/TableComponent.vue'
import HomeView from '@/views/HomeView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: 'page/1',
      children: [
        {
          path: 'page/:id',
          name: 'pageId',
          component: TableComponent
        }
      ]
    }
  ]
})
