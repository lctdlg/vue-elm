import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home'),
    redirect: '/home/goods',
    children: [
      {
        path: 'goods',
        name: 'goods',
        component: () => import('@/components/Goods')
      },
      {
        path: 'ratings',
        name: 'ratings',
        component: () => import('@/components/Ratings')
      },
      {
        path: 'seller',
        name: 'seller',
        component: () => import('@/components/Seller')
      }
    ]
  },
  {
    path: '/food/:id',
    name: 'food',
    component: () => import('@/views/food')
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
export default router
