<template lang="pug">
  v-app(left-fixed-sidebar top-fixed-navbar footer)
  
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

    methods: {
      meta (obj) {
        if (typeof obj === 'string') {
          return this.title = obj
        }

        this.title = obj.h1
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>