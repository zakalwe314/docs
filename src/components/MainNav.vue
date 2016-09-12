<template lang="pug">
  v-navbar(
    class="center-align white--text"
  )
    div(class="navbar__side-icon")
      a(
        href="#!",
        v-side-bar:mainsidebar=""
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
    justify-content: center
    height: 6rem
    
    h1
      font-weight: 300
      flex: 1
</style>
