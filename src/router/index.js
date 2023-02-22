import Vue from 'vue'
import VueRouter from 'vue-router';
const Home = () =>
    import ('../views/HomeView.vue')
const Hot = () =>
    import ('../views/HotView.vue')
const My = () =>
    import ('../views/MyView.vue')

//1.安装插件
Vue.use(VueRouter)

//2.创建路由对象
const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/hot',
        component: Hot
    },
    {
        path: '/my',
        component: My
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

//3.导出router
export default router