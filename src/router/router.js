import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'StockPage',
    component: () => import('@/views/StockPage.vue'),
  },
  {
    path: '/smartphones',
    name: 'SmartphonesPage',
    component: () => import('@/views/SmartphonesPage.vue'),
  },
  {
    path: '/laptops',
    name: 'LaptopsPage',
    component: () => import('@/views/LaptopsPage.vue'),
  },
  {
    path: '/tvs',
    name: 'TvsPage',
    component: () => import('@/views/TvsPage.vue'),
  },
  {
    path: '/videotech',
    name: 'VideotechPage',
    component: () => import('@/views/VideotechPage.vue'),
  },
  {
    path: '/headphones',
    name: 'HeadphonesPage',
    component: () => import('@/views/HeadphonesPage.vue'),
  },
  {
    path: '/gaming',
    name: 'GamingPage',
    component: () => import('@/views/GamingPage.vue'),
  },
  {
    path: '/smartwatches',
    name: 'SmartwatchesPage',
    component: () => import('@/views/SmartwatchesPage.vue'),
  },
  {
    path: '/monoblocks',
    name: 'MonoblocksPage',
    component: () => import('@/views/MonoblocksPage.vue'),
  },
  {
    path: '/tablets',
    name: 'TabletsPage',
    component: () => import('@/views/TabletsPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
