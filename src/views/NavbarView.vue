<template lang="pug">
  doc-view(v-bind:doc="doc" id="navbar")
    component-example(header="Variants" file="navbar/1")
      v-navbar(class="green")
        v-navbar-logo(class="hidden-sm-and-down") Navbar
        v-navbar-items(v-bind:items="items")
    component-example(file="navbar/2")
      v-navbar(class="orange")
        v-navbar-side-icon(class="hidden-sm-and-up")
        v-spacer(class="hidden-sm-and-down")
        v-navbar-logo Navbar
        v-navbar-items(class="hidden-sm-and-down" v-bind:items="items")
    component-example(file="navbar/3")
      v-navbar(class="red")
        v-navbar-items(v-bind:items="items")
        v-navbar-logo(class="hidden-sm-and-down")
          v-spacer
          | Navbar
    component-example(header="Icons" file="navbar/4")
      v-navbar(class="purple")
        v-navbar-logo(class="hidden-sm-and-down") Navbar
        v-navbar-items
          v-navbar-item(v-bind:item="{ href: '#!', icon: 'chevron_left' }")
          v-navbar-item(v-bind:item="{ href: '#!', icon: 'dashboard' }")
          v-navbar-item(v-bind:item="{ href: '#!', icon: 'chevron_right' }")
          v-navbar-item(
            v-bind:item="{ href: '#!', icon: 'more_vert' }" 
            v-dropdown:dropdown=""
          )
          v-dropdown(v-bind:items="dropdown_items" id="dropdown" top right origin="top right")
    component-example(header="Transparent" file="navbar/5")
      div(id="navbar-image")
        v-navbar(class="transparent z-depth-0")
          v-navbar-logo(class="hidden-sm-and-down") Navbar
          v-spacer
          v-navbar-items(v-bind:items="items")
    component-example(header="Groups" file="navbar/6")
      v-navbar(v-bind:items="itemsGroup")
        v-navbar-logo(class="hidden-sm-and-down" slot="right")
          v-spacer
          | Vuetify
    markup(lang='js')
      |data () {
      |   return {
      |     itemsGroup: [
      |       {
      |         parent: { text: 'Home', icon: 'home'},
      |         items: [
      |           {text: 'Our Services', href: '/components/navbar'},
      |           {text: 'Contact Us', href: 'javascript:;'},
      |           {text: 'About Us', href: 'javascript:;'}
      |         ]
      |       },
      |       { text: 'Portfolio', href: 'javascript:;', icon: 'work' },
      |       {
      |         parent: { text: 'Apply', icon: 'favorite' },
      |         items: [
      |           {text: 'Our Mission', href: 'javascript:;'},
      |           {text: 'Partners', href: 'javascript:;'},
      |           {text: 'Join Our Team', href: 'javascript:;', icon: 'people'}
      |         ]
      |       }
      |     ]
      |   }
      |}
    component-example(file="navbar/7")
      v-navbar(v-bind:items="itemsGroupV" class="green" group-class="green lighten-2")
        v-navbar-logo(class="hidden-sm-and-down") Vue
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Navbar',
          desc: 'The <code>v-navbar</code> component is pivotol to any gui, as it generally is the primary source of site navigation. The navbar component works great in cojunction with a sidebar for hiding links and presenting an activator to open the sidebar on mobile.',
          props: {
            'v-navbar': {
              params: [
                [
                  'items',
                  'Array',
                  `[]`,
                  'The array of navbar items'
                ],
                [
                  'fixed',
                  'Boolean',
                  'false',
                  'Applies the navbar--fixed class'
                ],
                [
                  'group-class',
                  'String',
                  '',
                  'Applies a custom class to the group dropdown'
                ]
              ],
            },
            'v-navbar-group': {
              params: [
                [
                  'item',
                  'Object',
                  { text: '', icon: '' },
                  'The group navbar item'
                ],
                [
                  'group-class',
                  'String',
                  '',
                  'Applies a custom class to the group dropdown'
                ],
                [
                  'items',
                  'Array',
                  `[]`,
                  'The array of Navbar items'
                ],
                [
                  'origin',
                  'String',
                  'top center',
                  'Specifies transform origin'
                ],
                [
                  'transition',
                  'String',
                  'v-slide-x-transition',
                  'Applies a transition to the group dropdown'
                ]
              ]
            },
            'v-navbar-items': {
              params: [
                [
                  'group-class',
                  'String',
                  '',
                  'Applies a custom class to the group dropdown'
                ],
                [
                  'items',
                  'Array',
                  `[]`,
                  'The array of navbar items'
                ]
              ],
            },
            'v-navbar-item': {
              params: [
                [
                  'item',
                  'Object',
                  `{ href: '#!', text: '', router: false }`,
                  'The navbar item object'
                ],
                [
                  'ripple',
                  'Object, Boolean',
                  'False',
                  'Applies the v-ripple directive'
                ],
                [
                  'router',
                  'Boolean',
                  'False',
                  'Designates whether to use anchor or router-link'
                ]
              ]
            }
          },
          slots: {
            'v-navbar': {
              default: true,
              params: [
                ['right', 'Slot positioned on right side of navbar']
              ]
            },
            'v-navbar-group': {
              default: true
            },
            'v-navbar-items': {
              default: true
            }
          }
        },
        items: [
          { text: 'Link', href: 'javascript:;' },
          { text: 'Link', href: 'javascript:;' },
          { text: 'Link', href: 'javascript:;' }
        ],
        itemsGroup: [
          {
            parent: { text: 'Home', icon: 'home' },
            items: [
              {text: 'Our Services', href: 'javascript:;'},
              {text: 'Contact Us', href: 'javascript:;'},
              {text: 'About Us', href: 'javascript:;'}
            ]
          },
          { text: 'Portfolio', href: 'javascript:;', icon: 'work' }
        ],
        itemsGroupV: [
          {
            parent: { text: 'Apply', icon: 'favorite' },
            items: [
              {text: 'Our Mission', href: 'javascript:;'},
              {text: 'Partners', href: 'javascript:;'},
              {text: 'Join Our Team', href: 'javascript:;'}
            ]
          }
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
    width: 100%
    
    .navbar
      margin: 0
</style>