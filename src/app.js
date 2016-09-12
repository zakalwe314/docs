import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Components from './components/_index'
import store from './store/index'
import router from './router/index'
import { sync } from 'vuex-router-sync'

sync(store, router)

Vue.use(Vuetify)

Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key])
})

const app = new Vue({
  store,
  router,
  ...App
})

export { app, router, store }
