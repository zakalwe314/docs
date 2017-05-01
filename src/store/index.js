import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      title: null,
      description: null,
      keywords: null,
      sidebar: true,
      currentColor: 'transparent',
      previous: {
        name: 'Components',
        color: 'primary',
        route: '/components'
      },
      next: {
        name: 'Breadcrumbs',
        color: 'green',
        route: '/components/breadcrumbs'
      }
    },

    actions: {},

    mutations: {
      'vuetify/COLOR' (state, payload) {
        state.currentColor = payload
      },

      'vuetify/PREVIOUS' (state, payload) {
        state.previous = payload
      },

      'vuetify/NEXT' (state, payload) {
        state.next = payload
      },

      'vuetify/SIDEBAR' (state, payload) {
        state.sidebar = payload
      },

      'vuetify/TITLE' (state, payload) {
        state.title = payload
        document.title = payload
      },

      'vuetify/DESCRIPTION' (state, payload) {
        state.description = payload
        document.head.querySelector('meta[name=description]').content = payload
      },

      'vuetify/KEYWORDS' (state, payload) {
        state.keywords = payload
        document.head.querySelector('meta[name=keywords]').content = payload
      }
    },

    getters: {}
  })
}