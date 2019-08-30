import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode:'history',
  base:"../",
  routes: [
    {
      path: '/',
      redirect:'home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/pages/home/home'),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name:'login',
      component: () => import('@/pages/login/login')
    },
    {
      path: '/goods',
      name:'goods',
      component: () => import('@/pages/goods/goods'),
      meta: { requiresAuth: true }
    },
    {
      path: '/demolist',
      name:'demo',
      component: () => import('@/components/shop/scroll-demo'),
      meta: { requiresAuth: true }
    },
    {
      path: '/cart',
      name:'cart',
      component: () => import('@/pages/carts/cart'),
      meta: { requiresAuth: true }
    },
    {
      path: '/self',
      name:'self',
      component: () => import('@/pages/self/self'),
      meta: { requiresAuth: true }
    },
    {
      path: '/goodsDetail',
      name:'goodsDetail',
      component: () => import('@/pages/goodsDetail/index'),
      meta: { requiresAuth: true }
    }
  ]
})
