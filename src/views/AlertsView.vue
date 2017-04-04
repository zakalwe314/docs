<template lang="pug">
  doc-view(v-bind:doc="doc" id="alerts")
    component-example(header="Contextual" file="alerts/1")
    component-example(header="Closable" file="alerts/2" v-bind:data="exampleOneData")
      section-text(slot="details") Using <code>v-model</code> you can control the state of the Alert. If you don't want to assign a v-model and just display the alert, you can simply do <code>:value="true"</code>.
    component-example(header="Custom Icon / No Icon" file="alerts/3")
</template>

<script>
  export default {
    name: 'alerts-view',

    data () {
      let exampleOneData = {
        alert: true,
      }

      let data = {
        exampleOneData,
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
                  '-',
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

    .component-example__container
      > div
        width: 100%

    .alert
      margin: 1rem 0
</style>
