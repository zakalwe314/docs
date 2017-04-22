<template lang="pug">
  doc-view(v-bind:doc="doc" id="dialogs")
    component-example(header="Simple dialogs" file="dialogs/1" v-bind:data="$data")
      section-text(slot="details") Choosing an option immediately commits the option and closes the menu. Touching outside of the dialog, or pressing Back, cancels the action and closes the dialog.
    component-example(header="Modal" file="dialogs/2" v-bind:data="$data")
      section-text(slot="details") Similar to a Simple Dialog, except that it's not dismissed when touching outside.
    component-example(header="Fullscreen" file="dialogs/3" v-bind:data="$data")
      section-text(slot="details") Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.
    component-example(header="Form" file="dialogs/4" v-bind:data="$data")
      section-text(slot="details") Just a simple example of a form in a dialog.
    component-example(header="Scrollable" file="dialogs/5" v-bind:data="$data")
      section-text(slot="details") Example of a dialog with scrollable content.
    br
</template>

<script>
  export default {
    name: 'dialogs-view',

    data () {
      return {
        d1: false,
        d2: false,
        d3: false,
        d4: false,
        d5: false,
        d5m1: null,
        doc: {
          title: 'Dialog',
          desc: `<p>The <code>v-dialog</code> component inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks. Use dialogs sparingly because they are interruptive.</p>
          <p>If you want to programmatically open or close the dialog, you can do so by using <code>v-model</code> with a boolean value. Keep in mind, if the trigger for the opening is not contained within the <code>activator</code> slot and is done so by a click, you must <strong>stopPropagation</strong> to avoid immediately triggering a close event.</p>`,
          props: {
            'v-dialog': {
              params: [
                [
                  'actions',
                  'Boolean',
                  'False',
                  'Adds default action buttons: Cancel, Ok'
                ],
                [
                  'persistent',
                  'Boolean',
                  'False',
                  'Clicking outside will not dismiss the dialog'
                ],
                [
                  'fullscreen',
                  'Boolean',
                  'False',
                  'Changes layout for fullscreen display'
                ],
                [
                  'lazy',
                  'Boolean',
                  'False',
                  'Lazily load dialog contents'
                ],
                [
                  'overlay',
                  'Boolean',
                  'True',
                  'Places a dark overlay behind the Dialog'
                ],
                [
                  'transition',
                  '[Boolean, String]',
                  'v-modal-transition',
                  'Defines show/hide transition. Set to false for no transition'
                ],
                [
                  'scrollable',
                  'Boolean',
                  'False',
                  'When set to true, expects a card, card-title, card-text and card-row with the actions prop. Will set card-row to scroll'
                ],
                [
                  'origin',
                  'String',
                  'center center',
                  'Defines transition origin'
                ],
                [
                  'width',
                  '[String, Number]',
                  '320',
                  'The modal width. Cannot exceed 90% of the screen'
                ]
              ],
              model: {
                types: ['Boolean'],
                default: 'False'
              }
            }
          },
          slots: {
            'v-dialog': {
              params: [
                [
                  'activator',
                  'The element that will activate the dialog'
                ]
              ],
              default: true
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
          title: 'Dialog Component | Vuetify.js',
          h1: 'Dialogs',
          description: 'Dialog component for Vuetify Framework',
          keywords: 'vuetify, dialogs, components'
        }
      }
    }
  }
</script>
