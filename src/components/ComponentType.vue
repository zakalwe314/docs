<template lang="pug">
  span.chip--component
    v-chip(
      label
      v-bind:class="component.classes"
    ) {{ component.text }}
      v-icon(
        right
        v-text="component.icon"
      )
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        required: true
      }
    },

    computed: {
      component () {
        return this[this.type]()
      }
    },

    methods: {
      comp () {
        return {
          classes: 'red white--text',
          text: 'Component',
          icon: 'widgets'
        }
      },

      directive () {
        return {
          classes: 'blue white--text',
          text: 'Directive',
          icon: 'compare_arrows'
        }
      },

      function () {
        return {
          classes: 'purple white--text',
          text: 'Function',
          icon: 'functions'
        }
      },

      slot () {
        return {
          classes: 'orange white--text',
          text: 'Slot',
          icon: 'short_text'
        }
      }
    }
  }
</script>