<template lang="pug">
  doc-view(v-bind:doc="doc" id="toolbar")
    component-example(header="Variants" file="toolbar/1" v-bind:data="example")
    component-example(file="toolbar/2" v-bind:data="example")
    component-example(file="toolbar/3" v-bind:data="example")
    component-example(header="Icons" file="toolbar/4" v-bind:data="example")
    component-example(header="Transparent" file="toolbar/5" v-bind:data="example")
    markup(lang="css")
      |&lt;style&gt;
      |  #navbar-image {
      |    background: url('...') center;
      |    height: 300px;
      |  }
      |&lt;/style&gt;
    component-example(header="Groups" file="toolbar/6" v-bind:data="example")
    markup(lang='js')
      |data () {
      |   return {
      |     itemsGroup: [
      |       {
      |         parent: { text: 'Home', icon: 'home'},
      |         items: [
      |           {text: 'Our Services', href: '/components/toolbar'},
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
    component-example(file="toolbar/7" v-bind:data="example")
</template>

<script>
  import ItemProps from '../constants/itemable-props'

  export default {
    data () {
      return {
        doc: {
          title: 'Toolbar',
          desc: 'The <code>v-toolbar</code> component is pivotol to any gui, as it generally is the primary source of site navigation. The toolbar component works great in cojunction with a sidebar for hiding links and presenting an activator to open the sidebar on mobile.',
          props: {
            'v-toolbar': {
              params: [
                [
                  'items',
                  'Array',
                  `[]`,
                  'The array of toolbar items'
                ],
                [
                  'fixed',
                  'Boolean',
                  'false',
                  'Applies the toolbar--fixed class'
                ],
                [
                  'group-class',
                  'String',
                  '',
                  'Applies a custom class to the group dropdown'
                ]
              ],
            },
            'v-toolbar-group': {
              params: [
                [
                  'item',
                  'Object',
                  { text: '', icon: '' },
                  'The group toolbar item'
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
                  'The array of Toolbar items'
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
            'v-toolbar-items': {
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
                  'The array of toolbar items'
                ]
              ],
            },
            'v-toolbar-item': {
              params: ItemProps
            }
          },
          slots: {
            'v-toolbar': {
              default: true,
              params: [
                ['right', 'Slot positioned on right side of toolbar']
              ]
            },
            'v-toolbar-group': {
              default: true
            },
            'v-toolbar-items': {
              default: true
            }
          }
        },
        example: {
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
            { title: 'Send Feedback' },
            { title: 'Request Help' },
            { title: 'Contact Developer' }
          ]
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
          title: 'Toolbar Component | Vuetify.js',
          h1: 'Toolbars',
          description: 'Toolbar component for Vuetify Framework',
          keywords: 'vuetify, toolbars, components'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #toolbar
    .toolbar
      height: 5rem !important
      margin: 1rem 0
      
  #toolbar-image
    background: url('~public/doc-images/nature.jpg') center center / cover no-repeat
    height: 300px
    width: 100%
    
    .toolbar
      margin: 0
</style>