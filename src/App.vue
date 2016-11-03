<template lang="pug">
  v-app(
    navbar
    footer
    left-fixed-sidebar
  )
  
    main-nav(v-bind:title="title")

    main
      main-side

      v-container(class="container--fluid")
        transition(name="slide" mode="out-in")
          router-view(@view="view")
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
    },

    methods: {
      view (title) {
        this.title = title
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>