<template lang="pug">
  doc-view(v-bind:doc="doc" id="menus-view")
    component-example(header="On Click" file="menus/1" v-bind:data="$data")
      section-text(slot="details") If you want to programmatically open or close the menu, you can do so by using <code>v-model</code> with a boolean value. Keep in mind, if the trigger for the opening is not contained within the <code>activator</code> slot and is done so by a click, you must <strong>stopPropagation</strong> to avoid immediately triggering a close event.
    component-example(header="Menus" file="menus/3" v-bind:data="$data")
    component-example(header="Custom Transitions" file="menus/4" v-bind:data="$data")
      section-text(slot="details") Vuetify comes with 3 standard transitions, <strong>scale</strong>, <strong>slide-x</strong> and <strong>slide-y</strong>. You can also create your own and pass it as the transition argument. For an example of how the stock transitions are constructed, visit <a href="https://github.com/vuetifyjs/vuetify/blob/master/src/util/helpers.js#L13" target="_blank">here</a>.
</template>

<script>
  import ItemProps from '../constants/itemable-props'

  export default {
    data () {
      return {
        doc: {
          title: 'Menu',
          desc: `The <code>v-menu</code> component utilizes the v-menu directive to link itself to another element. Once binded, clicking the element, or by hovering (if using the <code>hover</code> parameter), the menu will reposition absolutely positioned on top of the selected activator.`,
          props: {
            'v-menu': {
              params: [
                [
                  'top',
                  'Boolean',
                  'False',
                  'Designates menu open up'
                ],
                [
                  'right',
                  'Boolean',
                  'False',
                  'Designates menu overflow to the right'
                ],
                [
                  'bottom',
                  'Boolean',
                  'False',
                  'Designates menu open down'
                ],
                [
                  'left',
                  'Boolean',
                  'False',
                  'Designates menu overflow to the left'
                ],
                [
                  'offset-x',
                  'Boolean',
                  'False',
                  'Offset the menu on the x-axis. Works in conjunction with direction left/right'
                ],
                [
                  'offset-y',
                  'Boolean',
                  'False',
                  'Offset the menu on the y-axis. Works in conjunction with direction top/rightbottom'
                ],
                [
                  'disabled',
                  'Boolean',
                  'False',
                  'Disables the menu'
                ],
                [
                  'max-height',
                  'Number',
                  'null',
                  'The maximum height of the menu, will overflow-y with scroll if content is too large'
                ],
                [
                  'nudge-x-auto',
                  'Number',
                  '-16',
                  'Nudge the menu on the x-axis'
                ],
                [
                  'nudge-y-auto',
                  'Number',
                  '-18',
                  'Nudge the menu on the y-axis'
                ],
                [
                  'nudge-top',
                  'Number',
                  '0',
                  'Nudge the menu from the top'
                ],
                [
                  'nudge-bottom',
                  'Number',
                  '0',
                  'Nudge the menu from the bottomm'
                ],
                [
                  'nudge-left',
                  'Number',
                  '0',
                  'Nudge the menu from the left'
                ],
                [
                  'nudge-right',
                  'Number',
                  '0',
                  'Nudge the menu from the right'
                ],
                [
                  'open-on-click',
                  'Boolean',
                  'True',
                  'Designates whether menu should open on activator click'
                ],
                [
                  'close-on-click',
                  'Boolean',
                  'True',
                  'Designates if menu should close on outside-activator click'
                ],
                [
                  'origin',
                  'String',
                  'top left',
                  'Set the transform-origin of the transition'
                ],
                [
                  'transition',
                  'String',
                  'v-menu-transition',
                  'Set the transition component'
                ],
                [
                  'lazy',
                  'Boolean',
                  'False',
                  'Conditionally renders content on mounted'
                ]
              ]
            }
          },
          slots: {
            'v-menu': {
              params: [
                [
                  'activator',
                  'The element that will activate the menu'
                ]
              ],
              default: true
            }
          }
        },
        items: [
          {
            title: 'Click Me'
          },
          {
            title: 'Click Me'
          },
          {
            title: 'Click Me'
          },
          {
            title: 'Click Me 2'
          }
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
          title: 'Menu Component | Vuetify.js',
          h1: 'Menus',
          description: 'Menu component for Vuetify Framework',
          keywords: 'vuetify, menus, components'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #menus-view
    .btn
      margin: 1rem

    .component-example__container
      .card
        flex: 1
        margin: 1rem

        &__text
          height: 200px
</style>
