<template lang="pug">
  v-toolbar(:class="[color]" fixed)#main-toolbar
    v-toolbar-side-icon(
      v-on:click.native.stop="$store.commit('vuetify/SIDEBAR', !$store.state.sidebar)"
    )

    v-toolbar-title(v-text="title")
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
