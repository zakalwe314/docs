<template lang="pug">
  doc-view(v-bind:doc="doc" id="components-tabs-view")
    component-example(header="Mobile tabs" file="tabs/1" v-bind:data="example")
    component-example(file="tabs/2" v-bind:data="example")
    component-example(file="tabs/3" v-bind:data="example")
    component-example(file="tabs/4" v-bind:data="example")
    component-example(file="tabs/5" v-bind:data="example")
    component-example(header="Desktop tabs" file="tabs/6" v-bind:data="example")
    component-example(file="tabs/7" v-bind:data="example")
</template>

<script>
  import ItemProps from '../constants/itemable-props'

  export default {
    name: 'tabs-view',

    data () {
      return {
        example: {
          active: null,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          items: [{text: 'Item One', href: '#!'}, {text: 'Item Two', href: '#!'}, {text: 'Item Three', href: '#!'}],

          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        doc: {
          stage: 'comp',
          title: 'Tabs',
          desc: 'The <code>v-tabs</code> component is used for hiding content behind a selectable item. This can also be used as a psuedo-navigation for a page, where the tabs are links and the tab-items are the content.',
          props: {
            'v-tabs': {
              params: [
                [
                  'centered',
                  'Boolean',
                  'False',
                  'Centers the tabs'
                ],
                [
                  'grow',
                  'Boolean',
                  'False',
                  'Items fill available space'
                ],
                [
                  'icons',
                  'Boolean',
                  'False',
                  'Applies the tabs--icons class'
                ],
                [
                  'scroll-bars',
                  'Boolean',
                  'False',
                  'Displays scrollbars when content overflows'
                ]
              ]
            },
            'v-tabs-tabs': {
              params: [
                [
                  'items',
                  'Array',
                  '[]',
                  'The array of tabs'
                ]
              ]
            },
            'v-tab-item': {
              params: ItemProps
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
          title: 'Tabs Component | Vuetify.js',
          h1: 'Tabs',
          description: 'Tabs component for Vuetify Framework',
          keywords: 'vuetify, tabs, components'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #components-tabs-view
    .tabs
      margin: 1rem 0
</style>