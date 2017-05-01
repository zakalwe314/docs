import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import Vuetify from 'vuetify'
import Components from './components/_index'
import { sync } from 'vuex-router-sync'
import highlight from 'highlight.js/lib/highlight.js'
import highlightBash from 'highlight.js/lib/languages/bash'
import highlightStylus from 'highlight.js/lib/languages/stylus'
import highlightXML from 'highlight.js/lib/languages/xml'
import highlightJS from 'highlight.js/lib/languages/javascript'
import highlightScss from 'highlight.js/lib/languages/scss'

highlight.registerLanguage('bash', highlightBash)
highlight.registerLanguage('stylus', highlightStylus)
highlight.registerLanguage('sass', highlightScss)
highlight.registerLanguage('html', highlightXML)
highlight.registerLanguage('js', highlightJS)

Vue.use(Vuetify)

Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key])
})

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp (ssrContext) {
  // create store and router instances
  const store = createStore()
  const router = createRouter()

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    ssrContext,
    render: h => h(App)
  })

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store }
}