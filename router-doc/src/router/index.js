import HomeComponent from '@/views/HomeComponent.vue'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: HomeComponent },
  {
    path: '/product/:id?',
    name: 'product',
    component: () => import('@/views/ProductComponent.vue'),
  },
  { path: '/user/:username?', name: 'user', component: () => import('@/views/UserComponent.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
