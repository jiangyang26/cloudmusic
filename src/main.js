import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.prototype.$store = store

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
