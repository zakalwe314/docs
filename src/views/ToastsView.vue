<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(file="toasts/1" v-bind:data="$data")
    markup(lang="js")
      |data () {
      |   return {
      |     cb: ['Toast with callback', 'right', 4000, () =&gt; ('Callback')],
      |     info: ['Toast', 'left'],
      |   }
      |},
      |methods: {
      |   toast (data) {
      |     this.$vuetify.toast.create(...data)
      |   }
      |}
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Toast',
          desc: 'The <code>v-toast</code> component is used to display a quick message to a user. Toasts support positioning, removal delay and callbacks.',
          props: {
            '$vuetify.toast': {
              params: [
                [
                  'arguments',
                  'Boolean',
                  'False',
                  'Types: top, right, left, bottom, snack, callback'
                ]
              ]
            }
          }
        },
        left: ['Left Toast', 'left'],
        right: ['Right Toast', 'right'],
        top: ['Top Toast', 'top'],
        bottom: ['Bottom Toast', 'bottom'],
        snack: ['I\'m a snack toast', 'snack'],
        cb: ['Toast with Callback', 'right', 4000, () => alert('Callback')],
        active: null
      }
    },

    watch: {
      active () {
        this.toast(this.active)
      }
    },

    mounted () {
      this.$emit('view', this.meta())
    },

    preFetch () {
      return this.methods.meta()
    },

    methods: {
      callback () {
        alert('Alerting!')
      },

      toast (data) {
        this.$vuetify.toast.create(...data)
      },
      
      meta () {
        return {
          title: 'Toast Function | Vuetify.js',
          h1: 'Toasts',
          description: 'Toast directive for Vuetify Framework',
          keywords: 'vuetify, toasts, function'
        }
      }
    }
  }
</script>

<style lang="stylus"
       scoped
>
  .btn
    margin: 1rem
</style>