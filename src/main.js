import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import services from './services/index'
Vue.prototype.$service = services;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
