import Vue from 'vue'
import VueRouter from 'vue-router'
import ShopCar from '../components/ShopCar.vue'

Vue.use(VueRouter)

const routes = [
  
]

const router = new VueRouter({
  routes:[
    {path:'/shopcar',component:ShopCar}
  ]
})

export default router
