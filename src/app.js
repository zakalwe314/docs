import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Components from './components/_index'
import store from './store/index'
import router from './router/index'
import { sync } from 'vuex-router-sync'
import highlight from 'highlight.js/lib/highlight.js'
import highlightSCSS from 'highlight.js/lib/languages/scss'
import highlightXML from 'highlight.js/lib/languages/xml'
import highlightJS from 'highlight.js/lib/languages/javascript'

highlight.registerLanguage('scss', highlightSCSS)
highlight.registerLanguage('xml', highlightXML)
highlight.registerLanguage('javascript', highlightJS)

sync(store, router)

Vue.use(Vuetify)

Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key])
})

const app = new Vue(Vue.util.extend({
  router,
  store
}, App))

export { app, router, store }
