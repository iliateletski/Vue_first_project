import { createRouter, createWebHistory } from 'vue-router'
import TableComponent from '../components/TableComponent.vue'
import HomeView from '@/views/HomeView.vue'

export enum NameRoutes {
  home = 'home',
  table = 'table'
}

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: NameRoutes.home,
      component: HomeView,
      redirect: { name: NameRoutes.table, params: { id: 1 } },
      children: [
        {
          path: 'page/:id',
          name: NameRoutes.table,
          component: TableComponent
        }
      ]
    }
  ]
})
