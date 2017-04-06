<template lang="pug">
  v-app(
    left-fixed-sidebar
    top-fixed-toolbar
    footer
  )
    main-nav(v-bind:title="title")
    main
      main-side(v-model="sidebar")

      v-content
        v-container(fluid)

          transition(name="slide" mode="out-in")
            router-view(@view="meta")
    main-footer
</template>

<script>
  export default {
    data () {
      return {
        title: ''
      }
    },

    computed: {
      isHome () {
        return this.$route.path === '/'
      },
      sidebar () {
        return this.$store.state.sidebar
      }
    },

    methods: {
      meta (obj) {
        this.title = obj.h1
        this.$store.commit('vuetify/TITLE', obj.title)
        this.$store.commit('vuetify/DESCRIPTION', obj.description)
        this.$store.commit('vuetify/KEYWORDS', obj.keywords)
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>