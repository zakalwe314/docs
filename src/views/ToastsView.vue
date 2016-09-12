<template lang="pug">
  section(class="center-align")
    section-header Variations
    v-row
      v-col(xs2)
        v-btn(
          secondary
          @click.native="toast(left)"
        ) Left
      v-col(xs2)
        v-btn(
          secondary
          @click.native="toast(right)"
        ) Right
      v-col(xs2)
        v-btn(
          secondary
          @click.native="toast(top)"
        ) Top
      v-col(xs2)
        v-btn(
          secondary
          @click.native="toast(bottom)"
        ) Bottom
      v-col(xs2)
        v-btn(
          secondary
          @click.native="toast(snack)"
        ) Snack
      v-col(xs2)
        v-btn(
          secondary
          @click.native="toast(cb)"
        ) Callback
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