import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Learn from '@/views/Learn.vue'
import Practice from '@/views/Practice.vue'
import Test from '@/views/Test.vue'
import Admin from '@/views/Admin.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/learn',
    name: 'Learn',
    component: Learn,
  },
  {
    path: '/practice',
    name: 'Practice',
    component: Practice,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
