<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example
      v-btn(
        secondary
        v-on:click.native="toast(left)"
      ) Left
      v-btn(
        secondary
        v-on:click.native="toast(right)"
      ) Right
      v-btn(
        secondary
        v-on:click.native="toast(top)"
      ) Top
      v-btn(
        secondary
        v-on:click.native="toast(bottom)"
      ) Bottom
      v-btn(
        secondary
        v-on:click.native="toast(snack)"
      ) Snack
      v-btn(
        secondary
        v-on:click.native="toast(cb)"
      ) Callback
    div(slot="markup")
      markup(lang="xml")
        |&lt;v-btn v-on:click.native="toast(info)"&gt;...&lt;/v-btn&gt;
        |&nbsp;
        |&lt;v-btn v-on:click.native="toast(cb)"&gt;...&lt;/v-btn&gt;
      markup(lang="js")
        |data () {
        |   return {
        |     cb: ['Toast with callback', 'right', 4000, () =&gt;('Callback')],
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
          stage: 'iter',
          title: 'Toast',
          desc: 'Soon',
          types: [
            'function'
          ],
          params: [
            [
              '<code>$vuetify.toast</code>',
              '',
              'Base function'
            ],
            [
              '<code>arguments</code>',
              '(content, type, duration, callback)',
              'Types: top, right, left, bottom, snack, callback'
            ]
          ]
        },
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
    margin: 1rem
</style>