<template lang="pug">
  v-app(left-fixed-sidebar top-fixed-toolbar footer)
  
    main-nav(v-bind:title="title" v-on:sidebar="sidebar = !sidebar")

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
        sidebar: true,
        title: ''
      }
    },

    mounted () {
      this.$store.watch(state => state.title, title => {
        document.title = title
      })
      this.$store.watch(state => state.description, description => {
        document.head.querySelector('meta[name=description]').content = description
      })
      this.$store.watch(state => state.keywords, keywords => {
        document.head.querySelector('meta[name=keywords]').content = keywords
      })
    },

    methods: {
      meta (obj) {
        if (typeof obj === 'string') {
          return this.title = obj
        }

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