import { createRouter, createWebHistory } from 'vue-router'

import AppProductsList from '@/components/ProductsList';
import AppProduct from '@/components/Product';
import AppCart from '@/components/Cart';
import AppCheckout from '@/components/Checkout';
import AppE404 from '@/components/E404';

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: AppProductsList
  },
  {
    path: '/product/:id',
    name: 'product',
    component: AppProduct
  },
  {
    path: '/:any(.*)', // .*
    component: AppE404
  },
  {
    name: 'checkout',
		path: '/order',
		component: AppCheckout
  },
  {
    name: 'cart',
		path: '/cart',
		component: AppCart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
