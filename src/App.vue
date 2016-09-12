<template lang="pug">
  div(
    id="app",
    class="with left-fixed-sidebar navbar-and-footer"
  )
    header
      main-nav(v-bind:selected="selected")

    main
      main-side

      v-container

        router-view(@view="view")
</template>

<script>
  export default {
    data () {
      return {
        selected: ''
      }
    },

    mounted () {
      this.$vuetify.init()
    },

    methods: {
      view (view) {
        this.selected = view
      }
    }
  }
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/main'
  
  section .row
    padding: 2rem 0
</style>