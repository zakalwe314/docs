<template lang="pug">
  v-view(v-bind:doc="doc")
    component-example(header="Contextual" file="alerts/1")
      div(slot="desc") The <code>v-alert</code> component comes in 4 variations, <strong>success</strong>, <strong>info</strong>, <strong>warning</strong> and <strong>error</strong>. These have default icons assigned which can be changed and represent different actions.
    component-example(header="Closable" file="alerts/2")
      div(slot="desc") Using <code>v-model</code> you can control the state of the Alert. If you don't want to assign a v-model and just display the alert, you can simply do <code>:value="true"</code>.
    component-example(header="Custom Icon / No Icon" file="alerts/3")
      div(slot="desc") You can easily assign a custom icon or remove it all together.
</template>

<script>
  export default {
    name: 'alerts-view',

    data () {
      let data = {
        types: ['success', 'info', 'warning', 'error'],
        doc: {
          id: 'alerts-view',
          title: 'Alert',
          desc: 'The <code>v-alert</code> component is used to convey information to the user. Designed to stand out, the alerts come in four contextual styles, success, info, warning, and error.',
          props: [
            {
              prop: 'dismissible',
              type: 'Boolean',
              default: 'False',
              description: 'Specifies that the Alert can be closed'
            },
            {
              prop: 'icon',
              type: 'String',
              default: '-',
              description: 'Designates a specific icon'
            },
            {
              prop: 'hide-icon',
              type: 'Boolean',
              default: 'False',
              description: 'Hides the alert icon'
            }
          ]
        }
      }

      data.types.forEach(i => {
        data.doc.props.push({
          prop: i,
          type: 'Boolean',
          default: 'False',
          description: `Applies the alert--${i} class`
        })
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
  #alerts-view
    .alert
      margin: 1rem 0
</style>
