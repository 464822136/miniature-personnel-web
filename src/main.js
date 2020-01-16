import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import store from './store'
import qs from 'qs'
import { loadRouter } from './store/modules/menu'

// 全局注册，使用方法为:this.$axios
// eslint-disable-next-line no-unused-expressions
axios.defaults.baseURL = 'http://localhost:1234/personnel/'
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(qs)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (store.state.token === '') {
      next('/login')
    } else {
      loadRouter(store.state.menus, store)
      next()
    }
  }
  next()
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
