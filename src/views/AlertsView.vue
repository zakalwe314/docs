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
          v-btn(v-on:click.native="alert = true" class="primary") Reset Alert
        v-alert(info dismissible v-model="alert")
          | This is a success alert that is closable. {{ lorem }}
    component-example(header="Custom Icon / No Icon")
      v-alert(success icon="new_releases")
        | This is a success alert with a custom icon. {{ lorem }}
      v-alert(error hide-icon)
        | This is an error alert with no icon. {{ lorem }}
    div(slot="markup")
      markup(lang="html")
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
        |&nbsp;
        |&lt;v-alert success icon="new_releases"&gt;
        |   ...
        |&lt;/v-alert&gt;
        |&nbsp;
        |&lt;v-alert error hide-icon&gt;
        |   ...
        |&lt;/v-alert&gt;
      markup(lang="js")
        |data () {
        |   return {
        |     alert: true
        |   }
        |}
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
              '<code>dismissible</code>',
              'Specifies that the Alert can be closed',
              'Default: false'
            ],
            [
              '<code>icon</code>',
              'Designates a specific icon',
              'Default: ""'
            ],
            [
              '<code>hide-icon</code>',
              'Hides the alert icon',
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
      this.$emit('view', this.meta())
    },

    preFetch () {
      return this.methods.meta()
    },

    methods: {
      meta () {
        return {
          title: 'Alert Component | Vuetify.js',
          h1: 'Alerts',
          description: 'Alert component for Vuetify Framework',
          keywords: 'vuetify, alerts, components'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #alerts .component-example
    flex-wrap: wrap
      
    .alert
      flex-basis: 100%
</style>