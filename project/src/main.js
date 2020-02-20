import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import api from './api'
import './plugins/element.js'
import './assets/css/common.css'
import './plugins/element'

Vue.prototype.$api = api;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
