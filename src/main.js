import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
Vue.use(YDUI);


import "@/asstes/css/base.css"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
