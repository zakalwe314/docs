<template lang="pug">
  doc-view(v-bind:doc="doc" id="grid-view")
    component-example(header="Grid with option wrap" file="grid/1")
    component-example(header="Offset" file="grid/2")
    component-example(header="Order" file="grid/3")
    component-example(header="Direction and Align" file="grid/4")
    component-example(header="Row and column based on breakpoint" file="grid/5")
    component-example(header="Equal heights and scrollable content" file="grid/6")
</template>

<script>
  export default {
    data () {
      return {
        direction:'row',
        doc: {
          title: 'Grid',
          desc: 'The Vuetify.js uses a 12 point grid system. The grid is used to layout an applications content and contains 5 types (xs, sm, md, lg, xl) of media breakpoints.',
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
              ],[
                      'order-[size](1-12)',
                      'Boolean',
                      'False',
                      'order-xs:extra small, order-sm:small, order-md:medium, order-lg:large, order-xl:extra large. Example: order-xs1'
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
</style>