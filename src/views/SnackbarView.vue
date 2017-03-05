<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(file="snackbars/1" v-bind:data="$data")
</template>

<script>
  export default {
    data () {
      return {
        snackbar: false,
        y: 'top',
        x: null,
        timeout: 6000,
        doc: {
          title: 'Snackbar',
          desc: 'The <code>v-snackbar</code> component is used to display a quick message to a user. Toasts support positioning, removal delay and callbacks.',
          props: {
            'v-snackbar': {
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
        }
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
      
      meta () {
        return {
          title: 'Snackbar Function | Vuetify.js',
          h1: 'Snackbars',
          description: 'Snackbar directive for Vuetify Framework',
          keywords: 'vuetify, snackbar, function'
        }
      }
    }
  }
</script>