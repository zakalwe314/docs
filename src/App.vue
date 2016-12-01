<template lang="pug">
  v-app(left-fixed-sidebar top-navbar)
  
    main-nav(v-bind:title="title")

    main
      main-side

      v-content
        v-container(fluid)
          transition(name="slide" mode="out-in")
            keep-alive
              router-view(@view="view => title = view")
    main-footer
</template>

<script>
  export default {
    data () {
      return {
        title: ''
      }
    },

    mounted () {
      this.$vuetify.init()
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>