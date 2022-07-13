import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import jQuery from 'jquery'

window.$ = window.jQuery =jQuery;

import 'popper.js'
import 'bootstrap'
import './assets/app.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')