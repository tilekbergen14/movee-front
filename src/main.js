import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import "/node_modules/primeflex/primeflex.css"
import 'primevue/resources/themes/aura-light-green/theme.css'
import { createRouter, createWebHistory } from 'vue-router'
import router from './router';


const app = createApp(App);
app.use(router)
app.use(PrimeVue)
app.mount("#app")

