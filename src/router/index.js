import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const defaultMenu = [
    {
        path: '/login',
        name: 'login',
        component:  () => import('../components/login/login')
    },
    {
        path: '/',
        name: 'home',
        component: () => import('../components/home/home'),
    }
]

export default new Router({
    routes: defaultMenu
})
