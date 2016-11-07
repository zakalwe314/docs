<template lang="pug">
  doc-view(v-bind:doc="doc" id="alerts")
    component-example(id="alerts" header="Contextual")
      v-alert(success)
        | This is a success alert
      v-alert(info) 
        | This is an info alert
      v-alert(warning) 
        | This is a warning alert
      v-alert(error) 
        | This is a error alert
    markup(slot="markup")
      template(v-for="type in types")
        |&nbsp;
        |&lt;v-alert {{ type }}&gt;
        |   ...
        |&lt;/v-alert&gt;
        |&nbsp;
</template>

<script>
  export default {
    data () {
      let data = {
        doc: {
          title: 'Alert',
          desc: 'Coming Soon',
          types: ['comp', 'slot'],
          params: [
            [
              '<code>&lt;v-alert&gt;</code>',
              '',
              'Base component'
            ]
          ]
        },
        types: [
          'success', 'info', 'warning', 'error'
        ]
      }

      data.types.forEach(i => {
        data.doc.params.push([
          `<code>${i}</code>`,
          `Applies the alert--${i} class`,
          'Default: false'
        ])
      })

      return data
    },

    mounted () {
      this.$emit('view', 'Alerts')
    }
  }
</script>

<style lang="stylus">
  #alerts .component-example
    flex-wrap: wrap
      
    .alert
      flex-basis: 100%
      
      > *
        margin: 0
        justify-content: unset
</style>