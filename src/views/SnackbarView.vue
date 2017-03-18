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
          desc: 'The <code>v-snackbar</code> component is used to display a quick message to a user. Snackbars support positioning, removal delay and callbacks.',
          props: {
            'v-snackbar': {
              params: [
                [
                  'bottom',
                  'Boolean',
                  'True',
                  'Pistion the snackbar at the bottom'
                ],
                [
                  'top',
                  'Boolean',
                  'False',
                  'Pistion the snackbar at the top'
                ],
                [
                  'left',
                  'Boolean',
                  'False',
                  'Pistion the snackbar on the left'
                ],
                [
                  'right',
                  'Boolean',
                  'False',
                  'Pistion the snackbar on the right'
                ],
                [
                  'multiline',
                  'Boolean',
                  'False',
                  'Makes the snackbar higher'
                ],
                [
                  'timeout',
                  'Number',
                  '6000',
                  'Time to wait until snackbar is automatically hidden'
                ],
              ],
              model: {
                types: ['Boolean'],
                default: 'None'
              }
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
          title: 'Snackbar Component | Vuetify.js',
          h1: 'Snackbars',
          description: 'Snackbar component for Vuetify Framework',
          keywords: 'vuetify, snackbar, components'
        }
      }
    }
  }
</script>
