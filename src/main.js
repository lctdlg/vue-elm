import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/init.css'
// 引入全局指令
import './directive'
Vue.config.productionTip = false

new Vue({
  name: 'App',
  router,
  render: (h) => h(App)
}).$mount('#app')
