import Vue from 'vue'
import App from './App.vue'
import './styles/init.css'
// 引入全局指令
import './directive'
Vue.config.productionTip = false

new Vue({
  name: 'App',
  render: (h) => h(App)
}).$mount('#app')
