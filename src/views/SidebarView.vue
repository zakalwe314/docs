<template lang="pug">
  doc-view(v-bind:doc="doc" id="sidebars-view")
    component-example(header="Left" file="sidebar/1" v-bind:data="$data")
      section-text(slot="details") If you want to programmatically open or close the sidebar, you can do so by using <code>v-model</code> with a boolean value. Keep in mind, if the trigger for the opening is not contained within the <code>activator</code> slot and is done so by a click, you must <strong>stopPropagation</strong> to avoid immediately triggering a close event.

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
                  'absolute',
                  'Boolean',
                  'False',
                  'Sets the sidebar position to absolute',
                ],
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
                  'Default hides sidebar. Will not automatically hide on resize',
                ],
                [
                  'fixed',
                  'Boolean',
                  'False',
                  'Sets the sidebar position to fixed',
                ],
                [
                  'height',
                  'String',
                  `[fixed || drawer ? '100vh' : 'auto']`,
                  'Sets height of the sidebar',
                ],
                [
                  'mobile',
                  'Boolean',
                  'True',
                  'Specifies whether menu should collapse automatically on mobile',
                ],
                [
                  'mobile-break-point',
                  'Number',
                  '992',
                  'The maximum width in px before sidebar auto-closes',
                ],
                [
                  'right',
                  'Boolean',
                  'False',
                  'Places the sidebar on the right'
                ],
                [
                  'disable-route-watcher',
                  'Boolean',
                  'False',
                  'Disables opening of Sidebar when route changes'
                ],
              ]
            }
          },
          slots: {
            'v-sidebar': {
              default: true
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
      min-height: 400px
      
    .with.sidebar-under-toolbar
      position: relative
      
      .toolbar
        z-index: 6

    main
      padding-left: 0
      overflow: hidden
      position: relative

    .component-example__container
      flex: 1
      min-height: 400px
      position: relative
      justify-content: center

    .toolbar
      min-height: 56px

      &__side-icon
        margin: 0 2rem

      &--fixed
        position: absolute

    .sidebar
      z-index: 2
      &--fixed
        position: absolute
        top: 0
</style>
