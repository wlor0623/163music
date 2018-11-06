import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
Vue.use(YDUI);


import "@/asstes/css/base.css"
Vue.config.productionTip = false


import VueLazyload from 'vue-lazyload'  //引入这个懒加载插件

Vue.use(VueLazyload)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
