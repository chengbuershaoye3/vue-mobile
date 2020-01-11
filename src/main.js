import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'vant/lib/index.css'
// import './plugins/vant.js'
import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'

Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.filter('dateFormat', function (originVal) {
  const dt = new Date(originVal)

  // 年份
  const y = dt.getFullYear()
  // 月份
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  // 日份
  const d = (dt.getDate() + '').padStart(2, '0')
  // 时
  const hh = (dt.getHours() + '').padStart(2, '0')
  // 分
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  // 秒
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
