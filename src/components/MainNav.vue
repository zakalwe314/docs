<template lang="pug">
  v-navbar
    div(class="navbar__side-icon")
      a(
        href="#!",
        v-side-bar:mainsidebar=""
        class="hidden-md"
      )
        v-icon reorder
    h1(v-text="title")
</template>

<script>
  export default {
    props: {
      selected: {
        type: String,
        default: ''
      }
    },

    computed: {
      title () {
        return `${this.selected.substr(0, 1).toUpperCase()}${this.selected.substr(1)}`
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .navbar
    align-items: center
    min-height: 6rem
    color: #fff
    
    h1
      flex-grow: 1
      letter-spacing: 1px
      text-align: center
      color: #fff
</style>
