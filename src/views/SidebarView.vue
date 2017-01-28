<template lang="pug">
  doc-view(v-bind:doc="doc" id="sidebars-view")
    component-example(header="Left" file="sidebar/1")
      div(class="grey lighten-1")
        v-navbar
          div(class="navbar__side-icon hidden-md-and-up")
            a(href="#!" v-sidebar:doc-sidebar-1="")
              v-icon reorder
          v-navbar-logo Logo
        v-sidebar(id="doc-sidebar-1" height="40vh" v-bind:items="items")
            
    blockquote A sidebar is required to have an activator. This allows the sidebar to be opened on mobile.

    component-example(header="Drawer" file="sidebar/2")
      div(class="grey lighten-1")
        v-navbar
          div(class="navbar__side-icon")
            a(href="#!" v-sidebar:doc-sidebar-2="")
              v-icon reorder
          v-navbar-logo Logo
        v-sidebar(class="blue darken-3" id="doc-sidebar-2" height="40vh" v-bind:items="items" drawer)

    component-example(header="Item Groups" file="sidebar/3")
      section-text(slot="details") For more details on the available item options, check out the <a href="javascript:;" v-on:click.stop="$router.push('/components/lists')">lists</a> section.
      div(class="grey lighten-1")
        v-navbar
          v-navbar-side-icon(v-sidebar:doc-sidebar-3="" class="hidden-md-and-up")
            v-icon reorder
          v-navbar-logo Logo
        v-sidebar(id="doc-sidebar-3" height="40vh" right fixed v-bind:items="item_group")

    blockquote Sidebars groups require an additional property in the item array to designate the base path for their sub routes. This is used for highlighting with vue-router.

    component-example(header="Ripples" file="sidebar/4")
      div(class="grey lighten-1")
        v-navbar
          v-navbar-side-icon(v-sidebar:doc-sidebar-4="" class="hidden-md-and-up")
            v-icon reorder
          v-navbar-logo Logo
        v-sidebar(id="doc-sidebar-4" height="40vh" v-bind:items="item_group" ripple)

    markup(lang="js")
      |data () {
      |   return {
      |     items: [
      |       { header: 'Header' },
      |       {
      |         title: 'Parent',
      |         group: '/company',
      |         items: [
      |           { title: 'Home', href: '/company/home', action: 'link' },
      |           { title: 'About', href: '/company/about', action: 'link' },
      |           { title: 'Contact', href: '/company/contact', action: 'link' }
      |         ]
      |       },
      |       { title: 'Link', href: "#!" },
      |       { title: 'Link', href: "#!" },
      |       { header: 'Another Header' },
      |       { title: 'Link', href: "#!" }
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
          desc: `The <code>v-sidebar</code> component is what your users will utilize to navigate through the application. The sidebar is pre-configured to work with or without <strong>vue-router</strong> right out the box.`,
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
                  'Array of list items',
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
                ],
                [
                  'unshift',
                  'Boolean',
                  'False',
                  'Forces all actions to the front when using an array'
                ]
              ]
            }
          },
          slots: {
            'v-sidebar': {
              default: true,
              params: [
                ['top', 'Slot located at top of navbar']
              ]
            }
          }
        },
        items: [
          { title: 'Home', avatar: 'dashboard' },
          { title: 'Profile', avatar: 'account_box' },
          { title: 'Contact', avatar: 'import_contacts' }
        ],
        item_group: [
          { header: 'Header' },
          {
            title: 'Parent',
            items: [
              { title: 'Child' },
              { title: 'Child' },
              { title: 'Child' }
            ]
          },
          { title: 'Link' },
          { title: 'Link' },
          { divider: true, light: true },
          { header: 'Another Header' },
          { title: 'Link' }
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
  #sidebars-view
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
