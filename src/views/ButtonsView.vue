<template lang="pug">
  div.view
    section
      section-header Introduction
      component-chip(type="comp")
      component-chip(type="slot")
      section-text(v-html="text")
    section
      section-header Examples
      component-header Default
      component-example
        div
          v-btn(small) Small
          v-btn Normal
          v-btn(large) Large
          v-btn(flat) Flat
          v-btn(flat, disabled) Disabled
          v-btn(disabled) Disabled
      component-header Colored
      component-example
        div
          v-btn(primary) Primary
          v-btn(flat, class="primary--text") Primary
          v-btn(secondary) Secondary
          v-btn(flat, class="secondary--text") Secondary
      component-header Block
      component-example
        div(class="btn--block-example")
          v-btn(block) Default
          v-btn(block, primary) Primary
          v-btn(block, secondary) Secondary
          v-btn(block, disabled) Disabled
      component-header Round
      component-example
        div
          v-btn(round) Default
          v-btn(round, primary) Primary
          v-btn(round, secondary) Large Secondary
          v-btn(round, disabled) Disabled
      component-header Outline
      component-example
        div
          v-btn(outline) Default
          v-btn(outline, class="primary primary--text") Primary
          v-btn(outline, class="secondary secondary--text") Secondary
          v-btn(outline, disabled) Disabled
      component-header Floating
      component-example
        div
          v-btn(small, floating)
            v-icon event
          v-btn(floating)
            v-icon add
          v-btn(floating, large)
            v-icon edit
          v-btn(floating, disabled)
            v-icon remove
      component-header Colored Floating
      component-example
        div
          v-btn(floating, small, class="purple white--text")
            v-icon cloud
          v-btn(floating, primary)
            v-icon attachment
          v-btn(floating, large, secondary)
            v-icon event
          v-btn(floating, large, disabled)
            v-icon room
      component-header Icon
      component-example
        div
          v-btn(icon)
            v-icon hearing
          v-btn(class="btn--icon")
            v-icon computer
          v-btn(class="btn--icon")
            v-icon headset
    component-options(v-bind:items="options")
</template>

<script>
  export default {
    name: 'buttons-view',

    data () {
      return {
        text: `
          The <code>v-btn</code> component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color. Remember that all event captures must be done using the <strong>.native</strong> modifier.
        `,
        options: [
          [
            '<code>&lt;v-btn block&gt;',
            '<code>block</code>',
            'Applies the btn--block class',
            ''
          ],
          [
            '<code>&lt;v-btn flat&gt;',
            '<code>flat</code>',
            'Applies the btn--flat class',
            ''
          ],
          [
            '<code>&lt;v-btn floating&gt;',
            '<code>floating</code>',
            'Applies the btn--floating class',
            ''
          ],
          [
            '<code>&lt;v-btn icon&gt;',
            '<code>icon</code>',
            'Applies the btn--icon class',
            ''
          ],
          [
            '<code>&lt;v-btn large&gt;',
            '<code>large</code>',
            'Applies the btn--large class',
            ''
          ],
          [
            '<code>&lt;v-btn outline&gt;',
            '<code>outline</code>',
            'Applies the btn--outline class',
            ''
          ],
          [
            '<code>&lt;v-btn primary&gt;',
            '<code>primary</code>',
            'Applies the application\s <span class="primary--text">primary</span> color',
            ''
          ],
          [
            '<code>&lt;v-btn round&gt;',
            '<code>round</code>',
            'Applies the btn--round class',
            ''
          ],
          [
            '<code>&lt;v-btn secondary&gt;',
            '<code>secondary</code>',
            'Applies the application\s <span class="secondary--text">secondary</span> color',
            ''
          ],
          [
            '<code>&lt;v-btn small&gt;',
            '<code>small</code>',
            'Applies the btn--small class',
            ''
          ],
          [
            '<code>&lt;v-btn type="submit"&gt;',
            '<code>type</code>',
            'Sets the buttons type attribute',
            ''
          ]
        ]
      }
    },

    mounted () {
      this.$emit('view', 'Buttons')
    }
  }
</script>

<style lang="stylus"
       scoped
>
  .btn
    margin: 1rem
    
  .btn--block-example
    flex-wrap: wrap !important
    flex-basis: 100% !important
      
</style>