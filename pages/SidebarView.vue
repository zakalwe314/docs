<template lang="pug">
  doc-view(v-bind:doc="doc" id="sidebars-view")
    component-example(header="Left" file="sidebar/1" v-bind:data="$data")
      section-text(slot="details") If you want to programmatically open or close the sidebar, you can do so by using <code>v-model</code> with a boolean value. Keep in mind, if the trigger for the opening is not contained within the <code>activator</code> slot and is done so by a click, you must <strong>stopPropagation</strong> to avoid immediately triggering a close event.

    blockquote Keep in mind for the purpose of display, the sidebars in the documentation are in absolute mode. In your application, you will more than likely want to use <code>fixed</code>.

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
                  'hide-overlay',
                  'Boolean',
                  'False',
                  'Hide the display of the overlay',
                ],
                [
                  'light',
                  'Boolean',
                  'False',
                  'Changes the sidebar theme to light (default dark)',
                ],
                [
                  'mini',
                  'Boolean',
                  'False',
                  'Condenses sidebar width',
                ],
                [
                  'mobile',
                  'Boolean',
                  'True',
                  'Specifies whether menu should collapse automatically on mobile',
                ],
                [
                  'mobile-break-point',
                  '[Number, String]',
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
        mini: false,
        e1: false,
        e2: false,
        e3: false,
        e4: false,
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
    .component-example
      position: relative
      z-index: 0

      .card
        overflow-x: hidden
</style>
