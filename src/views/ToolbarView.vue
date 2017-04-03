<template lang="pug">
  doc-view(v-bind:doc="doc" id="toolbar")
    component-example(header="With Icons" file="toolbar/1" v-bind:data="example")
    component-example(header="With Items" file="toolbar/2" v-bind:data="example")
    component-example(header="With Dropdown" file="toolbar/3" v-bind:data="example")

    component-example(file="toolbar/4" v-bind:data="example")
    component-example(header="Transparent" file="toolbar/5" v-bind:data="example")
    markup(lang="css")
      |&lt;style&gt;
      |  #navbar-image {
      |    background: url('...') center;
      |    height: 300px;
      |  }
      |&lt;/style&gt;

    component-example(header="With Search" file="toolbar/6")
</template>

<script>
  import ItemProps from '../constants/itemable-props'
  import ComponentExample from "../components/ComponentExample";

  export default {
      components: {ComponentExample},
      data () {
      return {
        doc: {
          title: 'Toolbar',
          desc: 'The <code>v-toolbar</code> component is pivotol to any gui, as it generally is the primary source of site navigation. The toolbar component works great in cojunction with a sidebar for hiding links and presenting an activator to open the sidebar on mobile.',
          props: {
            'v-toolbar': {
              params: [
                [
                  'fixed',
                  'Boolean',
                  'false',
                  'Fixes the toolbar to the top'
                ]
              ]
            },
            'v-toolbar-item': {
              params: [
                [
                  'append',
                  'Boolean',
                  'False',
                  'Vue Router prop. Appends the relative path to the current path'
                ],
                [
                  'disabled',
                  'Boolean',
                  'False',
                  'Disables the item'
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
                  'Vue Router prop. Will call router.replace() instead of router.push() when clicked, so the navigation will not leave a history record'
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
            }
          },
          functional: {
            'v-toolbar': {
              params: [
                [
                  'v-toolbar-items',
                  '.toolbar__items'
                ],
                [
                  'v-toolbar-logo',
                  '.toolbar__logo'
                ],
                [
                  'v-toolbar-title',
                  '.toolbar__title'
                ],
                [
                  'v-toolbar-side-icon',
                  '.toolbar__side-icon'
                ]
              ]
            }
          },
          slots: {
            'v-toolbar': {
              default: true
            },
            'v-toolbar-item': {
              default: true
            }
          }
        },
        example: {
          items: [
            { text: 'Link' },
            { text: 'Link' },
            { text: 'Link' }
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
      height: 64px !important
      margin: 1rem 0

  #toolbar-image
    background: url('~public/doc-images/nature.jpg') center center / cover no-repeat
    height: 300px
    width: 100%

    .toolbar
      margin: 0
</style>
