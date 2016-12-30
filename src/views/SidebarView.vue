<template lang="pug">
  doc-view(v-bind:doc="doc" id="sidebars")
    component-example(header="Left")
      div(class="grey lighten-1")
        v-navbar
          div(class="navbar__side-icon hidden-sm-and-up")
            a(href="#!" v-side-bar:doc-sidebar-1="")
              v-icon reorder
          v-navbar-logo Logo
        v-sidebar(class="white" id="doc-sidebar-1" height="40vh")
          v-sidebar-items(v-bind:items="items")

    component-example(header="Drawer")
      div(class="grey lighten-1")
        v-navbar
          div(class="navbar__side-icon")
            a(href="#!" v-side-bar:doc-sidebar-2="")
              v-icon reorder
          v-navbar-logo Logo
        v-sidebar(class="white" id="doc-sidebar-2" height="40vh" drawer)
          v-sidebar-items(v-bind:items="items")

    component-example(header="Item Groups")
      div(class="grey lighten-1")
        v-navbar
          div(class="navbar__side-icon hidden-sm-and-up")
            a(href="#!" v-side-bar:doc-sidebar-3="")
              v-icon reorder
          v-navbar-logo Logo
        v-sidebar(class="white" id="doc-sidebar-3" height="40vh")
          v-sidebar-items(v-bind:items="item_group")
    div(slot="markup")
      markup(lang="xml")
        |&lt;v-sidebar id="sidebar" height="50vh" v-bind:items="items"&gt;&lt;/v-sidebar&gt;
        |&nbsp;
        |&lt;v-sidebar id="sidebar2" drawer&gt;
        |   &lt;v-sidebar-items v-bind:items="items"&gt;&lt;/v-sidebar-items&gt;
        |&lt;/v-sidebar&gt;
        |&nbsp;
        |&lt;v-sidebar id="sidebar3" fixed&gt;
        |   &lt;v-sidebar-items&gt;
        |     &lt;v-sidebar-item v-for="item in items" v-bind:item="item"&gt;&lt;/v-sidebar-item&gt;
        |   &lt;/v-sidebar-items&gt;
        |&lt;/v-sidebar&gt;
        |&nbsp;
        |&lt;v-navbar-side-icon v-sidebar:sidebar&gt;&lt;/v-navbar-side-icon&gt;
      markup(lang="js")
        |data () {
        |   return {
        |     items: [
        |       { header: 'Header' },
        |       {
        |         parent: { text: 'Parent', href: '#!" '},
        |         items: [
        |           { text: 'Child', href: '#!', router: false },
        |           { text: 'Child', href: '#!' },
        |           { text: 'Child', href: '#!', icon: 'list' }
        |         ]
        |       },
        |       { text: 'Link', href: '#!' }
        |     ]
        |   }
        |}
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Sidebar',
          desc: `The <code>v-sidebar</code> component is what your users will utilize to navigate through the application. The sidebar is pre-configured to work with or without <strong>vue-router</strong> right out the box. By default, the <code>v-sidebar-item</code> component renders an anchor tag, but can be changed to a Vue Router <code>router-link</code> component by either specifying the <strong>router</strong> prop as <em>true</em> or by passing it as an option in the item object.`,
          params: [
            [
              '<code>&lt;v-sidebar&gt;</code>',
              '',
              'Base component'
            ],
            [
              '<code>close-on-click</code>',
              'Designates if sidebar should close on body click',
              'Default: true'
            ],
            [
              '<code>drawer</code>',
              'Applies the navbar--drawer class',
              'Default: false'
            ],
            [
              '<code>fixed</code>',
              'Applies the navbar--fixed class',
              'Default: false'
            ],
            [
              '<code>id</code>',
              'Used for binding the directive',
              'Required: true'
            ],
            [
              '<code>mobile</code>',
              'Specifies whether menu should collapse automatically on mobile',
              'Default: true'
            ],
            [
              '<code>mobileBreakPoint</code>',
              'The maximum width in px before sidebar auto-closes',
              'Default: 768'
            ],
            [
              '<code>items</code>',
              'Array of navbar items',
              'Item object: [header, parent, text, href, items]'
            ],
            [
              '<code>right</code>',
              'Applies the navbar--right class',
              'Used to designate the navbar is located on the right'
            ],
            [
              '<code>slot</code>',
              '',
              'Types: [default, top]'
            ],
            [
              '<code>&lt;v-sidebar-group&gt;</code>',
              '',
              'Base component'
            ],
            [
              '<code>item</code>',
              'Parent item object',
              'Item object: [text, href, icon]'
            ],
            [
              '<code>&lt;v-sidebar-items&gt;</code>',
              '',
              'Base component'
            ],
            [
              '<code>items</code>',
              'Array of navbar items',
              'Same as navbar items property'
            ],
            [
              '<code>&lt;v-sidebar-item&gt;</code>',
              '',
              'Base component'
            ],
            [
              '<code>item</code>',
              'The item object',
              'Item object: [text, href, icon, router]'
            ],
            [
              '<code>router</code>',
              'Designates whether to use anchor or router-link',
              'Default: false'
            ],
            [
              '<code>slot</code>',
              '',
              'Names: [default]'
            ],
            [
              '<code>v-sidebar-header</code>',
              '',
              'Functional component'
            ]
          ]
        },
        items: [
          { header: 'Header' },
          { text: 'Link', href: "#!" },
          { text: 'Link', href: "#!" },
          { text: 'Link', href: "#!" }
        ],
        item_group: [
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
    .component-example
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
      
    .sidebar      
      &__group-header--active
        background: #444
        
        span
          color: #fff
          
        &:after
          color: #fff
          
        ~ .sidebar__items a
          color: #fff !important
      
      a
        color: #444
        transition: background .2s ease-out
        
        &:hover
          color: #fff
          background: #444
          
      &--fixed
        position: absolute
</style>
