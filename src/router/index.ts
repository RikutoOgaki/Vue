import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/TutorialView1',
      name: 'TutorialView1',
      component: () => import('../views/TutorialView1.vue')
    }
  ]
})

export default router
