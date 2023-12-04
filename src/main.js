import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import Login from './components/Login.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: App },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.component('Header', Header);

app.use(router);

app.mount('#app');
