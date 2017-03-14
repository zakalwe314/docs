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
              ],
              model: {
                types: ['String'],
                default: '-',
                description: 'Current selected tab'
              }
            },
            'v-tab-item': {
              params: [
                [
                  'append',
                  'Boolean',
                  'False',
                  'Vue Router router-link prop'
                ],
                [
                  'disabled',
                  'Boolean',
                  'False',
                  'Applies the list__tile--disabled class'
                ],
                [
                  'href',
                  'String, Object',
                  'javascript:;',
                  'For router, this is passed to the "to" prop'
                ],
                [
                  'nuxt',
                  'Boolean',
                  'False',
                  'Specifies the link is a nuxt-link'
                ],
                [
                  'replace',
                  'Boolean',
                  'False',
                  'Vue Router router-link prop'
                ],
                [
                  'router',
                  'Boolean',
                  'False',
                  'Designates whether the list tiles will be a router-link'
                ],
                [
                  'ripple',
                  'Boolean',
                  'False',
                  'Designates whether the list tiles will attach the ripple directive'
                ],
                [
                  'tag',
                  'String',
                  'a',
                  'Use a custom tag for the list tile'
                ]
              ]
            },
            'v-tab-content': {
              params: [
                [
                  'id',
                  'String',
                  'Required',
                  'The content id'
                ],
                [
                  'transition',
                  'String',
                  'v-tab-transition',
                  'Sets the default transition'
                ],
                [
                  'reverse-transition',
                  'String',
                  'v-tab-reverse-transition',
                  'Sets the reverse transition'
                ]
              ]
            }
          },
          functional: {
            'v-tabs': {
              params: [
                [
                  'v-tabs-slider',
                  '.tabs__slider'
                ],
                [
                  'v-tabs-items',
                  '.tabs__items'
                ],
                [
                  'v-tabs-tabs',
                  '.tabs__tabs'
                ],
              ]
            },
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
