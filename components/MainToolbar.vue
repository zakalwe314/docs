<template lang="pug">
  v-toolbar(:class="[color]" fixed)#main-toolbar
    v-toolbar-side-icon(
      v-on:click.native.stop="$store.commit('vuetify/SIDEBAR', !$store.state.sidebar)"
    )

    v-toolbar-title(v-text="title")
    .toolbar__links
      a(href="https://github.com/vuetifyjs/vuetify" target="_blank")
        img(src="~static/github.png" alt="github")
      a(href="https://twitter.com/vuetifyjs" target="_blank")
        img(src="~static/twitter.png" alt="twitter")
      a(href="https://www.facebook.com/vuetifyjs" target="_blank")
        img(src="~static/facebook.png" alt="facebook")
</template>

<script>
  export default {
    props: ['title'],

    computed: {
      color () {
        return this.$store.state.currentColor
      }
    }
  }
</script>

<style lang="stylus">
  .toolbar
    &__logo
      text-transform: uppercase

  #main-toolbar .toolbar
    &__logo, &__title
      text-transform: uppercase
      white-space: nowrap
      min-width: 0
      overflow: hidden
      text-overflow: ellipsis
      
    &__links
      margin: 1rem
      display: flex
      justify-content: center
      align-items: center
      
      a
        color: #fff
        text-align: center
        text-decoration: none
        margin: 0 .5rem
        
        img
          height: 25px
          
        i
          padding: 0

        h1
          font-size: 4vw
</style>
