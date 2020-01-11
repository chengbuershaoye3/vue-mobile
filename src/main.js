import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'vant/lib/index.css'

import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
// axios.interceptors.request.use(async config=>{
// 	console.log(config);
// 	config.headers.Authorization = window.sessionStorage.getItem('token')
// 	return config
// })
Vue.prototype.$http = axios


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
