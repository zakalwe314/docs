<template lang="pug">
  v-app(
    navbar
    footer
    left-fixed-sidebar
  )
    header
      main-nav(v-bind:selected="selected")

    main
      main-side

      v-container(class="container--fluid")

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
  
  body
    background: rgba(0, 0, 0, .005)
    
  .view
    margin-bottom: 3rem
    
    .chip--component
      margin-right: 1rem
      
      &:first-of-type
        margin-left: 2rem !important
</style>