<template lang="pug">
  v-view(v-bind:doc="doc" id="bottom-navigation-view")
    component-example(header="Icons and text" file="bottom-navigation/1")
      div(slot="desc") While the bottom nav is meant to be used with the <code>vue-router</code>, you can also programmatically control the active state of the buttons by using a <code>v-model</code>.
    component-example(header="Color & shift" file="bottom-navigation/2")
      div(slot="desc") When using a colored background, it is recommended to use the <code>light</code> prop. Shift will hide the button text until active. Keep in mind, <code>v-btn</code> text is required to be wrapped in a <code>&lt;span&gt;</code> tag.
    component-example(header="Toggle" file="bottom-navigation/3")
      div(slot="desc") As with other Vuetify components, you can control the display state with <code>v-model</code>.
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Bottom navigation',
          id: 'bottom-navigation-view',
          edit: 'BottomNavigationView',
          component: 'bottom-navigation/BottomNavigation.js',
          desc: `The <code>v-bottom-nav</code> is an alternative to the sidebar. It is primarily used on mobile and comes in two variants, icons and text, and shift.`,
          props: [],
          props2: {
            'v-bottom-navigation': {
              params: [
                [
                  'absolute',
                  'Boolean',
                  'False',
                  'Change the position from fixed to absolute'
                ],
                [
                  'shift',
                  'Boolean',
                  'False',
                  'Hide text of button when not active'
                ]
              ],
              model: {
                types: ['Boolean'],
                default: 'False'
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
      meta () {
        return {
          title: 'Bottom navigation Component | Vuetify.js',
          h1: 'Bottom navigation',
          description: 'Bottom navigation component for Vuetify Framework',
          keywords: 'vuetify, bottom navigation, navigation, component'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #bottom-navigation-view
    .bottom-nav
      z-index: 1
</style>