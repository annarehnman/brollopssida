import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import store from './store'

createApp(App).use(store).use(router).use(AOS.init).mount('#app')
