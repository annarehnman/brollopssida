import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import OSA from '../views/OSA.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/info',
    name: 'About',
    component: About,
    props: true
  },
  {
    path: '/kontakt',
    name: 'Contact',
    component: Contact,
    props: true
  },
  {
    path: '/osa',
    name: 'OSA',
    component: OSA,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

export default router
