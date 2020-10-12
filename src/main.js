import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from "axios"
import store from './store'
// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
// axios.get(' http://localhost:3000/getUser').then (data => {
//   console.log(data)
// }).catch(e => {console.log(e.response)})
Vue.config.productionTip = false

new Vue({
  router,
    store,
  render: h => h(App)
}).$mount('#app')
