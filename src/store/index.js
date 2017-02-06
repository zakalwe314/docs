import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: null,
    description: null,
    keywords: null
  },

  actions: {},

  mutations: {
    'vuetify/TITLE' (state, payload) {
      state.title = payload
    },

    'vuetify/DESCRIPTION' (state, payload) {
      state.description = payload
    },

    'vuetify/KEYWORDS' (state, payload) {
      state.keywords = payload
    }
  }
})