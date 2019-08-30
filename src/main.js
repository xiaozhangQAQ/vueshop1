import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../public/weui.min.css'

import './mock.js'

import './permission' // 路由权限控制

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
