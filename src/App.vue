<template lang="pug">
  v-app(
    navbar
    footer
    left-fixed-sidebar
  )
  
    main-nav(v-bind:selected="selected")

    main
      main-side

      v-container(class="container--fluid")
        transition(
          name="slide"
          mode="out-in"
        )
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
  @import './stylus/main'
</style>