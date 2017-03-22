<template lang="pug">
  header(id="main-toolbar")
    v-toolbar(fixed)
      v-toolbar-side-icon(
        class="side-icon hidden-md-and-up"
        v-on:click.native.stop="$store.commit('vuetify/SIDEBAR', true)"
      )
      v-toolbar-logo(
        v-text="title"
        class="ml-5 text-xs-center text-md-left hidden-md-and-down"
      )
      v-toolbar-title(v-text="title" class="hidden-md-and-up")
      .toolbar__links
        a(href="https://github.com/vuetifyjs/vuetify" target="_blank")
          img(src="~public/github.png" alt="github")
        a(href="https://twitter.com/vuetifyjs" target="_blank")
          img(src="~public/twitter.png" alt="twitter")
        a(href="https://www.facebook.com/vuetifyjs" target="_blank")
          img(src="~public/facebook.png" alt="facebook")
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style lang="stylus">
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
</style>