import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/Skeleton-2.0.4/css/skeleton.css'
import './assets/Skeleton-2.0.4/css/normalize.css'
import './assets/css/main.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
