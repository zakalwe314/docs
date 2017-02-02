<template lang="pug">
  doc-view(v-bind:doc="doc" id="components-tabs-view")
    component-example(header="Mobile tabs" file="tabs/1")
      v-tabs(id="mobile-tabs-1" grow ripple)
        v-tab-item(
          v-for="i in 3"
          v-bind:href="'#mobile-tabs-1-' + i"
          slot="activators"
        ) Item {{ i }}
        v-tab-content(
          v-for="i in 3"
          v-bind:id="'mobile-tabs-1-' + i"
          slot="content"
        )
          v-card
            v-card-text {{ content }}
    // component-example(file="tabs/2")
    //   v-tabs(id="mobile-tabs-2" grow)
    //     v-card(class="primary white--text")
    //       v-card-text
    //         v-card-row
    //           v-btn(icon)
    //             v-icon menu
    //           v-spacer
    //           v-btn(icon)
    //             v-icon search
    //           v-btn(icon)
    //             v-icon more_vert
    //         v-card-row
    //           v-card-title Page Title
    //     v-tabs-tabs
    //       v-tab-item(v-for="i in 3" v-bind:item="{ text: 'Item ' + i, href: '#mobile-tabs-2-' + i }")
    //     v-tabs-items
    //       v-tabs-item(v-for="i in 3" v-bind:id="'mobile-tabs-2-' + i")
    //         v-card
    //           v-card-text {{ content }}
    // component-example(file="tabs/3")
    //   v-tabs(id="mobile-tabs-3" grow)
    //     v-tabs-tabs
    //       v-tab-item(v-for="i in 3" v-bind:item="{ text: 'Item ' + i, href: '#mobile-tabs-3-' + i }")
    //     v-tabs-items
    //       v-tabs-item(v-for="i in 3" v-bind:id="'mobile-tabs-3-' + i")
    //         v-card
    //           v-card-text {{ content }}
    //   markup(slot="markup" lang="html" file="tabs/3")
    // component-example(file="tabs/4")
    //   v-tabs(id="mobile-tabs-4" grow icons)
    //     v-tabs-tabs
    //       v-tab-item(v-bind:item="{ text: 'Recents', href: '#mobile-tabs-4-1', icon: 'phone' }")
    //       v-tab-item(v-bind:item="{ text: 'Favorites', href: '#mobile-tabs-4-2', icon: 'favorite' }")
    //       v-tab-item(v-bind:item="{ text: 'Nearby', href: '#mobile-tabs-4-3', icon: 'account_box' }")
    //     v-tabs-items
    //       v-tabs-item(v-for="i in 3" v-bind:id="'mobile-tabs-4-' + i")
    //         v-card
    //           v-card-text {{ content }}
    // component-example(file="tabs/5")
    //   v-tabs(id="mobile-tabs-5" grow)
    //     v-tabs-tabs
    //       v-tab-item(v-bind:item="{ href: '#mobile-tabs-5-1', icon: 'phone' }")
    //       v-tab-item(v-bind:item="{ href: '#mobile-tabs-5-2', icon: 'favorite' }")
    //       v-tab-item(v-bind:item="{ href: '#mobile-tabs-5-3', icon: 'account_box' }")
    //     v-tabs-items
    //       v-tabs-item(v-for="i in 3" v-bind:id="'mobile-tabs-5-' + i")
    //         v-card
    //           v-card-text {{ content }}
    // component-example(header="Desktop tabs" file="tabs/6")
    //   v-tabs(id="mobile-tabs-6" scroll-bars)
    //     v-card(class="primary white--text")
    //       v-card-text
    //         v-card-row
    //           v-btn(icon)
    //             v-icon menu
    //           v-card-title Page Title
    //           v-btn(icon)
    //             v-icon search
    //           v-btn(icon)
    //             v-icon more_vert
    //     v-tabs-tabs()
    //       v-tab-item(v-for="i in 13" v-bind:item="{ text: 'Item ' + i, href: '#mobile-tabs-6-' + i }")
    //     v-tabs-items
    //       v-tabs-item(v-for="i in 13" v-bind:id="'mobile-tabs-6-' + i")
    //         v-card
    //           v-card-text {{ content }}
    // component-example(file="tabs/7")
      v-tabs(id="mobile-tabs-7" centered)
        v-card(class="primary white--text")
          v-card-text
            v-card-row
              v-btn(icon)
                v-icon menu
              v-card-title Page Title
              v-btn(icon)
                v-icon search
              v-btn(icon)
                v-icon more_vert
        v-tabs-tabs()
          v-tab-item(v-for="i in 3" v-bind:item="{ text: 'Item ' + i, href: '#mobile-tabs-7-' + i }")
        v-tabs-items
          v-tabs-item(v-for="i in 3" v-bind:id="'mobile-tabs-7-' + i")
            v-card
              v-card-text {{ content }}
</template>

<script>
  import ItemProps from '../constants/itemable-props'

  export default {
    name: 'tabs-view',

    data () {
      return {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        items: [{text: 'Item One', href: '#!'}, {text: 'Item Two', href: '#!'}, {text: 'Item Three', href: '#!'}],
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
        },
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
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