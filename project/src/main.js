import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import api from './api'
import './assets/css/common.css'
import './assets/font_8ued68b53ro/iconfont.css'

Vue.prototype.$api = api;
Vue.config.productionTip = false

// 本地是否有数据
if(localStorage.getItem("token")){
  store.commit("loginModule/setToken",localStorage.getItem("token"));
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
