import Vue from 'vue'
import VueRouter from 'vue-router'
import ShopCar from '../components/ShopCar.vue'

import List from '../components/goods/List.vue'
import Details from '../components/goods/Details.vue'
import Introduce from '../components/goods/Introduce.vue'
import Comments from '../components/goods/Comments.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    { path:'/shopcar',component:ShopCar},
    { path: '/goods/list', component: List },
    { path: '/goods/details',component: Details},
    { path:'/default/goods/:id',component:Details},
    { path: '/goodsdesc/:id',component:Introduce},
    { path: '/goodscomments/:id',component:Comments}
  ]




})
export default router
