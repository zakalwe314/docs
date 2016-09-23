<template lang="pug">
  div.view
    section
      section-header Introduction
      component-chip(type="function")
      section-text Soon
      component-example
        div
          v-btn(
            secondary
            @click.native="toast(left)"
          ) Left
          v-btn(
            secondary
            @click.native="toast(right)"
          ) Right
          v-btn(
            secondary
            @click.native="toast(top)"
          ) Top
          v-btn(
            secondary
            @click.native="toast(bottom)"
          ) Bottom
          v-btn(
            secondary
            @click.native="toast(snack)"
          ) Snack
          v-btn(
            secondary
            @click.native="toast(cb)"
          ) Callback
      component-options
</template>

<script>
  export default {
    data () {
      return {
        left: ['Left Toast', 'left'],
        right: ['Right Toast', 'right'],
        top: ['Top Toast', 'top'],
        bottom: ['Bottom Toast', 'bottom'],
        snack: ['I\'m a snack toast', 'snack'],
        cb: ['Toast with Callback', 'right', 4000, () => alert('Callback')],
      }
    },

    mounted () {
      this.$emit('view', 'Toasts')
    },

    methods: {
      callback () {
        alert('Alerting!')
      },

      toast (data) {
        this.$vuetify.toast.create(...data)
      }
    }
  }
</script>

<style lang="stylus"
       scoped
>
  .btn
    margin: 0 2rem
</style>