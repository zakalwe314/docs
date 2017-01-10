<template lang="pug">
  doc-view(v-bind:doc="doc" id="sidebars")
    component-example(header="Left" file="sidebar/1")
      div(class="grey lighten-1")
        v-navbar
          div(class="navbar__side-icon hidden-md-and-up")
            a(href="#!" v-side-bar:doc-sidebar-1="")
              v-icon reorder
          v-navbar-logo Logo
        v-sidebar(id="doc-sidebar-1" height="40vh")
          v-sidebar-items(v-bind:items="items")

    component-example(header="Drawer" file="sidebar/2")
      div(class="grey lighten-1")
        v-navbar
          div(class="navbar__side-icon")
            a(href="#!" v-side-bar:doc-sidebar-2="")
              v-icon reorder
          v-navbar-logo Logo
        v-sidebar(class="blue darken-3" id="doc-sidebar-2" height="40vh" drawer)
          v-sidebar-items(v-bind:items="items")

    component-example(header="Item Groups" file="sidebar/3")
      div(class="grey lighten-1")
        v-navbar
          v-navbar-side-icon(v-side-bar:doc-sidebar-3="" class="hidden-md-and-up")
            v-icon reorder
          v-navbar-logo Logo
        v-sidebar(id="doc-sidebar-3" height="40vh" right fixed)
          v-sidebar-items(v-bind:items="item_group")

    component-example(header="Ripples" file="sidebar/4")
      div(class="grey lighten-1")
        v-navbar
          v-navbar-side-icon(v-side-bar:doc-sidebar-4="" class="hidden-md-and-up")
            v-icon reorder
          v-navbar-logo Logo
        v-sidebar(id="doc-sidebar-4" height="40vh" v-bind:items="item_group" ripple)

    markup(lang="js")
      |data () {
      |   return {
      |     items: [
      |       { header: 'Header' },
      |       {
      |         parent: { text: 'Parent', href: '#!' },
      |         items: [
      |           { text: 'Child', href: '#!', icon: 'link' },
      |           { text: 'Child', href: '#!', icon: 'link' },
      |           { text: 'Child', href: '#!', icon: 'link' }
      |         ]
      |       },
      |       { text: 'Link', href: "#!" },
      |       { text: 'Link', href: "#!" },
      |       { header: 'Another Header' },
      |       { text: 'Link', href: "#!" }
      |     ]
      |   }
      |}
</template>

<script>
  import ItemProps from '../constants/itemable-props'

  export default {
    data () {
      return {
        doc: {
          title: 'Sidebar',
          desc: `The <code>v-sidebar</code> component is what your users will utilize to navigate through the application. The sidebar is pre-configured to work with or without <strong>vue-router</strong> right out the box. By default, the <code>v-sidebar-item</code> component renders an anchor tag, but can be changed to a Vue Router <code>router-link</code> component by either specifying the <strong>router</strong> prop as <em>true</em> or by passing it as an option in the item object.`,
          props: {
            'v-sidebar': {
              params: [
                [
                  'close-on-click',
                  'Boolean',
                  'True',
                  'Designates if sidebar should close on body click',
                ],
                [
                  'drawer',
                  'Boolean',
                  'False',
                  'Applies the navbar--drawer class',
                ],
                [
                  'fixed',
                  'Boolean',
                  'False',
                  'Applies the navbar--fixed class',
                ],
                [
                  'height',
                  'String',
                  '100vh',
                  'Sets height of the navbar',
                ],
                [
                  'group-class',
                  'String',
                  `''`,
                  'Applies custom class to group dropdown',
                ],
                [
                  'id',
                  'String',
                  'Required',
                  'Used for binding the directive',
                ],
                [
                  'mobile',
                  'Boolean',
                  'True',
                  'Specifies whether menu should collapse automatically on mobile',
                ],
                [
                  'mobileBreakPoint',
                  'Number',
                  'Default: 992',
                  'The maximum width in px before sidebar auto-closes',
                ],
                [
                  'items',
                  'Object',
                  '[]',
                  'Array of navbar items',
                ],
                [
                  'right',
                  'Boolean',
                  'False',
                  'Applies the navbar--right class'
                ],
                [
                  'ripple',
                  'Boolean',
                  'False',
                  'Applies the v-ripple directive to all items'
                ],
                [
                  'router',
                  'Boolean',
                  'False',
                  'Applies the router property to all items'
                ]
              ]
            },

            'v-sidebar-group': {
              params: [
                [
                  'group-class',
                  'String',
                  `''`,
                  'Applies custom class to group dropdown',
                ],
                [
                  'items',
                  'Object',
                  '[]',
                  'Array of navbar items',
                ],
                [
                  'item',
                  'Object',
                  `{ text: '', icon: '', ripple: false }`,
                  'The sidebar group item object'
                ],
                [
                  'ripple',
                  'Boolean',
                  'False',
                  'Applies the v-ripple directive to all items'
                ],
                [
                  'router',
                  'Boolean',
                  'False',
                  'Applies the router property to all items'
                ]
              ]
            },

            'v-sidebar-items': {
              params: [
                [
                  'group-class',
                  'String',
                  `''`,
                  'Applies custom class to group dropdown'
                ],
                [
                  'items',
                  'Object',
                  '[]',
                  'Array of navbar items',
                ],
                [
                  'ripple',
                  'Boolean',
                  'False',
                  'Applies the v-ripple directive to all items'
                ],
                [
                  'router',
                  'Boolean',
                  'False',
                  'Applies the router property to all items'
                ]
              ]
            },

            'v-sidebar-item': {
              params: ItemProps
            }
          },
          slots: {
            'v-sidebar': {
              default: true,
              params: [
                ['top', 'Slot located at top of navbar']
              ]
            },
            'v-sidebar-group': {
              default: true
            },
            'v-sidebar-items': {
              default: true
            }
          },
          functional: {
            'v-sidebar': {
              params: [
                ['v-sidebar-header', '.sidebar__item-header']
              ]
            }
          }
        },
        items: [
          { text: 'Link', href: "#!" },
          { text: 'Link', href: "#!" },
          { text: 'Link', href: "#!" }
        ],
        item_group: [
          { header: 'Header' },
          {
            parent: { text: 'Parent', href: '#!' },
            items: [
              { text: 'Child', href: '#!', icon: 'link' },
              { text: 'Child', href: '#!', icon: 'link' },
              { text: 'Child', href: '#!', icon: 'link' }
            ]
          },
          { text: 'Link', href: "#!" },
          { text: 'Link', href: "#!" },
          { header: 'Another Header' },
          { text: 'Link', href: "#!" }
        ]
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
          title: 'Sidebar Component | Vuetify.js',
          h1: 'Sidebars',
          description: 'Sidebar component for Vuetify Framework',
          keywords: 'vuetify, sidebars, components'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #sidebars
    .component-example__container
      > div
        flex: 1
        min-height: 40vh
        position: relative
        overflow: hidden
        
    .navbar
      min-height: 5rem
      padding-left: 0
      
      &__side-icon
        margin: 0 2rem
          
      &--fixed
        position: absolute
        
    .sidebar
      &--fixed
        position: absolute
</style>
