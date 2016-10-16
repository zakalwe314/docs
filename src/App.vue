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
  @import '../node_modules/vuetify/src/stylus/main'
  
  .slide-enter-active
    transition: all .3s ease
    
  .slide-enter, .slide-leave-active
    opacity: 0
    
  .slide-enter
    transform: translateX(-3rem)
    
  .slide-leave-active
    transition: all .2s ease
    transform: translateX(3rem)
  
  body
    background: rgba(0, 0, 0, .005)

  section
    padding: 0 1rem
        
  .view
    margin-bottom: 3rem
    
    .chip--component
      margin-right: 1rem
      
  
  .section-text
    min-width: 50%
    max-width: 700px
    text-align: justify
    margin: 2rem 0
      
    p
      margin-bottom: 1rem !important
      
      strong
        font-weight: 900
</style>