// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import store from '../store'
import axios from 'axios'
import echarts from 'echarts'
//  导入样式
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(iView)
Vue.prototype.$store= store
Vue.prototype.$axios= axios
Vue.config.productionTip = false
console.log(echarts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
