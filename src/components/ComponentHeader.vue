<template lang="pug">
  h6.component-header
    div(class="text-xs-right")
      span(class="source" v-tooltip="{ value: location, html: 'View source' }" v-on:click.stop="$emit('source')")
        v-icon code
    div
      slot
</template>

<script>
  export default {
    data () {
      return {
        location: 'top'
      }
    },

    mounted () {
      this.resize()
      window.addEventListener('resize', this.resize, false)
    },

    beforeDestroy () {
      window.removeEventListener('resize', this.resize, false)
    },

    methods: {
      resize () {
        this.location = window.innerWidth <= 768 ? 'left' : 'top'
      }
    }
  }
</script>

<style lang="stylus">
  .component-header
    .icon
      cursor: pointer
      color: rgba(#000, .5)
      transition: color .3s ease-out
      will-change: color
      
    .source
      display: inline-flex
      user-select: none
      
      &:hover
        color: rgba(#000, .9)
</style>