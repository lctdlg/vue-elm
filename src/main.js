import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/init.css'
Vue.config.productionTip = false

new Vue({
  name: 'App',
  router,
  render: (h) => h(App)
}).$mount('#app')
