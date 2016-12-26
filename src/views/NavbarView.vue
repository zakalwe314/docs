<template lang="pug">
  doc-view(v-bind:doc="doc" id="navbar")
    component-example(header="Variants")
      v-navbar(class="green")
        v-navbar-logo(class="hidden-sm-and-down") Navbar
        v-navbar-items(v-bind:items="items")
      v-navbar(class="orange")
        v-navbar-side-icon(class="hidden-sm-and-up")
        v-spacer(class="hidden-sm-and-down")
        v-navbar-logo Navbar
        v-navbar-items(class="hidden-sm-and-down" v-bind:items="items")
      v-navbar(class="red")
        v-navbar-items(v-bind:items="items")
        v-navbar-logo(class="hidden-sm-and-down")
          v-spacer
          | Navbar
    component-example(header="Icons")
      v-navbar(class="purple")
        v-navbar-logo(class="hidden-sm-and-down") Navbar
        v-navbar-items
          v-navbar-item(v-bind:item="{ href: '#!', text: 'chevron_left', icon: true }")
          v-navbar-item(v-bind:item="{ href: '#!', text: 'dashboard', icon: true }")
          v-navbar-item(v-bind:item="{ href: '#!', text: 'chevron_right', icon: true }")
          v-navbar-item(
            v-bind:item="{ href: '#!', text: 'more_vert', icon: true }" 
            v-dropdown:dropdown=""
          )
          v-dropdown(v-bind:items="dropdown_items" id="dropdown" right)
    component-example(header="Transparent")
      div(id="navbar-image")
        v-navbar(class="transparent z-depth-0")
          v-navbar-logo(class="hidden-sm-and-down") Navbar
          v-spacer
          v-navbar-items(v-bind:items="items")
    div(slot="markup")
      markup(lang="xml")
        |&lt;v-navbar class="green"&gt;
        |   &lt;v-navbar-logo&gt;Navbar&lt;/v-navbar&gt;
        |   &lt;v-navbar-items v-bind:items="items"&gt;&lt;/v-navbar-items&gt;
        |&lt;/v-navbar&gt;
        |&nbsp;
        |&lt;v-navbar class="yellow"&gt;
        |   &lt;v-navbar-side-icon class="hidden-sm-and-up"&gt;&lt;/v-navbar-side-icon&gt;
        |   &lt;v-spacer class="hidden-sm-and-down"&gt;&lt;/v-spacer&gt;
        |   &lt;v-navbar-logo&gt;Navbar&lt;/v-navbar&gt;
        |   &lt;v-navbar-items v-bind:items="items"&gt;&lt;/v-navbar-items&gt;
        |&lt;/v-navbar&gt;
        |&nbsp;
        |&lt;v-navbar class="red"&gt;
        |   &lt;v-navbar-items v-bind:items="items"&gt;&lt;/v-navbar-items&gt;
        |   &lt;v-navbar-logo&gt;
        |     &lt;v-spacer&gt;&lt;/v-spacer&gt;
        |     Navbar
        |   &lt;/v-navbar&gt;
        |&lt;/v-navbar&gt;
        |&nbsp;
        |&lt;v-navbar class="purple"&gt;
        |   &lt;v-navbar-logo&gt;
        |     Navbar
        |   &lt;/v-navbar&gt;
        |   &lt;v-navbar-items&gt;
        |     &lt;v-navbar-item v-bind:item="{ href: '#!', text: 'chevron_left', icon: true }"&gt;&lt;/v-navbar-item&gt;
        |     &lt;v-navbar-item v-bind:item="{ href: '#!', text: 'dashboard', icon: true }"&gt;&lt;/v-navbar-item&gt;
        |     &lt;v-navbar-item v-bind:item="{ href: '#!', text: 'chevron_right', icon: true }"&gt;&lt;/v-navbar-item&gt;
        |     &lt;v-navbar-item 
        |         v-bind:item="{ href: '#!', text: 'more_vert', icon: true }"
        |         v-dropdown:dropdown
        |     &gt;&lt;/v-navbar-item&gt;
        |   &lt;/v-navbar-items&gt;
        |   &lt;v-dropdown v-bind:items="dropdown_items" id="dropdown" right&gt;&lt;/v-dropdown&gt;
        |&lt;/v-navbar&gt;
        |&nbsp;
        |&lt;div id="navbar-image"&gt;
        |   &lt;v-navbar class="transparent z-depth-0"&gt;
        |     &lt;v-navbar-logo class="hidden-sm-and-down"&gt;...&lt;/v-navbar-logo&gt;
        |     &lt;v-navbar-items v-bind:items="items"&gt;&lt;/v-navbar-items&gt;
        |   &lt;/v-navbar&gt;
        |&lt;/div&gt;
      markup(lang="js")
        |data () {
        |   return {
        |     items: [
        |       { text: 'Link', href: '#!' }
        |     ]
        |     dropdown_items: [
        |       { text: 'Send Feedback', href: '#!' },
        |       { text: 'Request Help', href: '#!' },
        |       { text: 'Contact Developer', href: '#!' }
        |     ]
        |   }
        |}
      markup(lang="scss")
        |#navbar-image {
        |   background: url('...') center;
        |   height: 300px;
        |}
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          stage: 'comp',
          title: 'Navbar',
          desc: 'The <code>v-navbar</code> component is pivotol to any gui, as it generally is the primary source of site navigation. The navbar component works great in cojunction with a sidebar for hiding links and presenting an activator to open the sidebar on mobile.',
          params: [
            [
              '<code>&lt;v-navbar&gt;</code>',
              '',
              'Base component'
            ],
            [
              '<code>&lt;v-navbar-items&gt;</code>',
              '',
              'Base component'
            ],
            [
              '<code>items</code>',
              'The array of Navbar items',
              'Allowed properties: href, text'
            ],
            [
              '<code>&lt;v-navbar-item&gt;</code>',
              '',
              'base component'
            ],
            [
              '<code>item</code>',
              'The item object',
              'Allowed object properties: href, text'
            ],
            [
              '<code>router</code>',
              'Designates whether to use anchor or router-link',
              'Default: false'
            ]
          ]
        },
        items: [
          { text: 'Link', href: '#!' },
          { text: 'Link', href: '#!' },
          { text: 'Link', href: '#!' }
        ],
        dropdown_items: [
          { text: 'Send Feedback', href: '#!' },
          { text: 'Request Help', href: '#!' },
          { text: 'Contact Developer', href: '#!' }
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
          title: 'Navbar Component | Vuetify.js',
          h1: 'Navbars',
          description: 'Navbar component for Vuetify Framework',
          keywords: 'vuetify, navbars, components'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #navbar
    .navbar
      padding-left: 0
      height: 5rem !important
      margin: 1rem 0
      
  #navbar-image
    background: url('~public/doc-images/nature.jpg') center center / cover no-repeat
    height: 300px
    
    .navbar
      margin: 0
</style>