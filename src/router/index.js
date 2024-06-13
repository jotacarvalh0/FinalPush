// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import NewsPage from '../components/NewsPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/news/:id',
    name: 'NewsPage',
    component: NewsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
