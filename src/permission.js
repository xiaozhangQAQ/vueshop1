import router from './router'
// import store from './store'
import { getToken } from '@/util/auth' 

router.beforeEach(async(to, from, next) => {
    const hasToken = getToken()

    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!hasToken) {
          next({
            path: '/login',
            query: { redirect: to.fullPath }
          })
        } else {
          next()
        }
      } else {
        next() // 确保一定要调用 next()
      }

})

