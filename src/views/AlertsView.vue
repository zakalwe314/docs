<template lang="pug">
  doc-view(v-bind:doc="doc" id="alerts")
    component-example(header="Contextual")
      v-alert(success)
        | This is a success alert. {{ lorem }}
      v-alert(info) 
        | This is an info alert {{ lorem }}
      v-alert(warning) 
        | This is a warning alert {{ lorem }}
      v-alert(error) 
        | This is a error alert {{ lorem }}
    component-example(header="Closable")
      div
        div(v-if="!alert" class="text-xs-center")
          v-btn(v-on:click.native="alert = true" class="primary white--text") Reset Alert
        v-alert(success close v-model="alert")
          | This is a success alert that is closable. {{ lorem }}
    markup(slot="markup")
      template(v-for="type in types")
        |&nbsp;
        |&lt;v-alert {{ type }}&gt;
        |   ...
        |&lt;/v-alert&gt;
        |&nbsp;
      |&nbsp;
      |&lt;v-alert success close v-model="alert"&gt;
      |   ...
      |&lt;/v-alert&gt;
</template>

<script>
  export default {
    data () {
      let data = {
        alert: true,
        doc: {
          stage: 'comp',
          title: 'Alert',
          desc: 'The <code>v-alert</code> component is used to convey information to the user. Designed to stand out, the alerts come in four styles, success, info, warning, and error.',
          types: ['comp', 'slot'],
          params: [
            [
              '<code>&lt;v-alert&gt;</code>',
              '',
              'Base component'
            ],
            [
              '<code>v-model</code>',
              '',
              'Types: [Boolean]'
            ],
            [
              '<code>close</code>',
              'Hides the alert',
              'Default: false'
            ]
          ]
        },
        lorem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
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
</style>