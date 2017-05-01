<template lang="pug">
  doc-view(v-bind:doc="doc" id="grid-view")
    section(slot="documentation" class='documentation-slot')
      v-card
        v-table-overflow
          table.table
            caption Viewport breakpoints
            thead
              tr
                th Device
                th Types
                th Range
            tbody
              tr
                td
                  v-icon.mr-3 phone_iphone
                  span Extra small
                td small to large handset
                td &lt; 600px
              tr
                td
                  v-icon.mr-3 tablet
                  span Small
                td small to medium tablet
                td 600px &gt; &lt; 1024px
              tr
                td
                  v-icon.mr-3 laptop
                  span Medium
                td large tablet to laptop
                td 1024px &gt; &lt; 1440px
              tr
                td
                  v-icon.mr-3 desktop_windows
                  span Large
                td desktop
                td 1440px &gt; &lt; 1920px
              tr
                td
                  v-icon.mr-3 tv
                  span Extra large
                td 4k and ultra-wides
                td &gt; 1920px

    component-example(header="Grid" file="grid/1").mb-5
      section-text(slot="details") The <code>v-container</code> can be used for a center focused page, or given the <code>fluid</code> prop to extend its full width. <code>v-layout</code> is used for separating sections and contains the <code>v-col</code>. The structure of your layout will be as follows, <strong>v-layout</strong> &raquo; <strong>v-col</strong>.
    component-example(header="Offset" file="grid/2").mb-5
      section-text(slot="details") Offsets are useful for compensating for elements that may not be visible yet, or control the position of content. Just as with breakpoints, you can set an offset for any available sizes.
    component-example(header="Order" file="grid/3")
    component-example(header="Direction and Align" file="grid/4")
    component-example(header="Row and column based on breakpoint" file="grid/5")
    component-example(header="Equal heights and scrollable content" file="grid/6")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Grid',
          desc: 'Vuetify.js uses a 12 point grid system. The grid is used to layout an applications content and contains 5 types of media breakpoints. The 5 ranges of breakpoints are used for targeting specific screen sizes or orientations.',
          props: {
            'v-container': {
              params: [
                [
                  'fluid',
                  'Boolean',
                  'False',
                  'Applies the .container--fluid class'
                ]
              ]
            },
              'v-layout': {
                  params: [
                      [
                          'row[-size]',
                          'Boolean',
                          'False',
                          'Applies the .row class align elements horizontal. Available for all breakpoints xs => xl. Example: row-sm'
                      ],
                      [
                          'row--reverse',
                          'Boolean',
                          'False',
                          'Applies the .row class align and reverse the order'
                      ],
                      [
                          'column[-size]',
                          'Boolean',
                          'False',
                          'Applies the .column class align elements vertical. Available for all breakpoints xs => xl. Example: column-xs'
                      ],
                      [
                          'child-flex[-size]',
                          'Boolean',
                          'False',
                          'Applies the .flex class (flex:1) to the first child of layout. Available for all breakpoints xs => xl. Example: child-flex-xs. Hint: You can use class="flex" on specific child element.'
                      ],
                      [
                          'flex[-size]',
                          'Class',
                          'False',
                          'Applies the .flex class (flex:1). Available for all breakpoints xs => xl. Example: class="flex-sm"'
                      ],
                      [
                          'align-space-around',
                          'Boolean',
                          'False',
                          'Space around for child elements.'
                      ],
                      [
                          'align-space-between',
                          'Boolean',
                          'False',
                          'Space between child elements.'
                      ],
                      [
                          'align-center',
                          'Boolean',
                          'False',
                          'Center all child elements horizontal and vertical.'
                      ],
                      [
                          'align-vert-[start|end]',
                          'Boolean',
                          'False',
                          'Vertical alignment to start or end.Example: align-vert-start'
                      ],
                      [
                          'align-horiz-[start|end]',
                          'Boolean',
                          'False',
                          'Horizontal alignment to start or end. Example: align-horiz-start'
                      ],
                      [
                          'wrap',
                          'Boolean',
                          'False',
                          'Allows children to wrap within the container if the elements use more than 100%.'
                      ]
                  ]
              },
              'v-col': {
                  params: [
                      [
                          'xs(1-12)',
                          'Boolean',
                          'False',
                          'xs:extra small, sm:small, md:medium, lg:large, xl:extra large - 1 through 12'
                      ], [
                          'offset-[size](1-12)',
                          'Boolean',
                          'False',
                          'offset-xs:extra small, offset-sm:small, offset-md:medium, offset-lg:large, offset-xl:extra large. Example: offset-xs3'
                      ], [
                          'order-[size](1-12)',
                          'Boolean',
                          'False',
                          'order-xs:extra small, order-sm:small, order-md:medium, order-lg:large, order-xl:extra large. Example: order-xs1'
                      ],
                      [
                          'fill-height',
                          'Boolean',
                          'False',
                          'make sure that col element height is filled with parent and child. Important for Safari/Firefox if children is column element.'
                      ]
                  ]

              }
          },
          functional: {
            'grid': {
              params: [
                ['<v-content>', 'The main content wrapper for your application'],
                ['<v-spacer>', 'Spacer for flexbox grids']
              ]
            }
          }
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
          title: 'Grid | Vuetify.js',
          h1: 'Grid',
          description: 'Grid for the Vuetify Framework',
          keywords: 'vuetify, grid'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #grid-view
    .component-example
      .card
        color: #fff
        text-align: center
        padding: 1rem 0
        margin: .5rem 0

        &__text
          padding: 0

  .icon
    vertical-align: middle

  .documentation-slot
    margin-bottom: 2rem
</style>
