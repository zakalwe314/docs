<template lang="pug">
  doc-view(v-bind:doc="doc" id="alerts")
    component-example(header="Contextual" file="alerts/1")
      v-alert(success)
        | This is a success alert. {{ lorem }}
      v-alert(info) 
        | This is an info alert {{ lorem }}
      v-alert(warning) 
        | This is a warning alert {{ lorem }}
      v-alert(error) 
        | This is a error alert {{ lorem }}
    component-example(header="Closable" file="alerts/2")
      div
        div(v-if="!alert" class="text-xs-center")
          v-btn(v-on:click.native="alert = true" class="primary") Reset Alert
        v-alert(info dismissible v-model="alert")
          | This is a success alert that is closable. {{ lorem }}
    component-example(header="Custom Icon / No Icon" file="alerts/3")
      v-alert(success icon="new_releases")
        | This is a success alert with a custom icon. {{ lorem }}
      v-alert(error hide-icon)
        | This is an error alert with no icon. {{ lorem }}
</template>

<script>
  export default {
    data () {
      let data = {
        alert: true,
        lorem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        types: ['success', 'info', 'warning', 'error'],
        doc: {
          title: 'Alert',
          desc: 'The <code>v-alert</code> component is used to convey information to the user. Designed to stand out, the alerts come in four contextual styles, success, info, warning, and error.',
          props: {
            'v-alert': {
              params: [
                [
                  'dismissible',
                  'Boolean',
                  'False',
                  'Specifies that the Alert can be closed'
                ],
                [
                  'icon',
                  'String',
                  "''",
                  'Designates a specific icon'
                ],
                [
                  'hide-icon',
                  'Boolean',
                  'False',
                  'Hides the alert icon'
                ]
              ],
              model: {
                types: ['Boolean'],
                default: 'False'
              }
            }
          },
          slots: {
            'v-alert': {
              default: true
            }
          }
        }
      }

      data.types.forEach(i => {
        data.doc.props['v-alert'].params.push([
          i,
          'Boolean',
          'False',
          `Applies the alert--${i} class`
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
          description: 'The v-alert component is used to convey information to the user. Designed to stand out, the alerts come in four contextual styles, success, info, warning, and error.',
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