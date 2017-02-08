<template lang="pug">
  doc-view(v-bind:doc="doc" id="sidebars-view")
    component-example(header="Left" file="sidebar/1" v-bind:data="$data")
            
    blockquote A sidebar is required to have an activator. This allows the sidebar to be opened on mobile.

    component-example(header="Drawer" file="sidebar/2" v-bind:data="$data")

    component-example(header="Item Groups" file="sidebar/3" v-bind:data="$data")
      section-text(slot="details") For more details on the available item options, check out the <a href="javascript:;" v-on:click.stop="$router.push('/components/lists')">lists</a> section.

    blockquote Sidebars groups require an additional property in the item array to designate the base path for their sub routes. This is used for highlighting with vue-router.

    component-example(header="Ripples" file="sidebar/4" v-bind:data="$data")

    markup(lang="js")
      |data () {
      |   return {
      |     itemGroup: [
      |       { header: 'Header' },
      |       {
      |         title: 'Parent',
      |         group: '/company',
      |         items: [
      |           { title: 'Child' },
      |           { title: 'Child' },
      |           { title: 'Child' }
      |         ]
      |       },
      |       { title: 'Link' },
      |       { title: 'Link' },
      |       { divider: true },
      |       { header: 'Another Header' },
      |       { title: 'Link' }
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
                  'Applies the sidebar--drawer class',
                ],
                [
                  'fixed',
                  'Boolean',
                  'False',
                  'Applies the sidebar--fixed class',
                ],
                [
                  'height',
                  'String',
                  '100vh',
                  'Sets height of the sidebar',
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
                  'Applies the sidebar--right class'
                ]
              ]
            }
          },
          slots: {
            'v-sidebar': {
              default: true,
              params: [
                ['top', 'Slot located at top of sidebar']
              ]
            }
          }
        },
        items: [
          { title: 'Home', avatar: 'dashboard' },
          { title: 'Profile', avatar: 'account_box' },
          { title: 'Contact', avatar: 'import_contacts' }
        ],
        sidebar: null,
        sidebar2: null,
        sidebar3: null,
        sidebar4: null,
        itemGroup: [
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
          { divider: true },
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
    .with, main
      min-height: 40vh
      
    main
      padding-left: 0
      
    .component-example__container
      flex: 1
      min-height: 40vh
      position: relative
      overflow: hidden
      justify-content: center
        
    .toolbar
      min-height: 5rem
      
      &__side-icon
        margin: 0 2rem
          
      &--fixed
        position: absolute
        
    .sidebar
      z-index: 2
      &--fixed
        position: absolute
</style>
