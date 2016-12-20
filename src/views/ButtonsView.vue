<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(header="Default")
      v-btn(small) Small
      v-btn Normal
      v-btn(large) Large
      v-btn(flat) Flat
      v-btn(flat disabled) Flat Disabled
      v-btn(disabled) Disabled
      v-btn(v-bind:raised="false") Not Raised
    component-example(header="Colored")
      v-btn(class="primary") Primary
      v-btn(flat class="primary--text") Flat Primary
      v-btn(class="secondary") Secondary
      v-btn(flat class="secondary--text") Flat Secondary
      v-btn(class="success") Success
      v-btn(class="info") Info
      v-btn(class="warning") Warning
      v-btn(class="error") Error
      v-btn(class="purple white--text" v-bind:raised="false") Purple Not Raised
    component-example(header="Block")
      div.btn--block-example
        v-btn(block) Default
        v-btn(block class="primary") Primary
        v-btn(block class="secondary") Secondary
        v-btn(block disabled) Disabled
    component-example(header="Rounded")
      v-btn(round small) Small Default
      v-btn(round class="primary") Primary
      v-btn(round large class="secondary") Large Secondary
      v-btn(round disabled) Disabled
    component-example(header="Outline")
      v-btn(outline small class="green green--text") Small Green
      v-btn(outline class="primary primary--text") Primary
      v-btn(outline large class="secondary secondary--text") Large Secondary
      v-btn(outline disabled) Disabled
    component-example(header="Floating")
      v-btn(small floating)
        v-icon event
      v-btn(floating)
        v-icon add
      v-btn(floating large)
        v-icon edit
      v-btn(floating disabled)
        v-icon remove
    component-example(header="Colored Floating")
      v-btn(floating small class="purple white--text")
        v-icon cloud
      v-btn(floating class="primary white--text")
        v-icon attachment
      v-btn(floating class="secondary")
        v-icon event
      v-btn(floating large disabled)
        v-icon room
    component-example(header="Icon")
      v-btn(icon)
        v-icon hearing
      v-btn(icon)
        v-icon computer
      v-btn(icon)
        v-icon headset
      v-btn(icon)
        v-icon(medium) check
      v-btn(icon)
        v-icon(large) warning
      v-btn(icon)
        v-icon(x-large) language
    markup(slot="markup")
      |&lt;v-btn&gt;
      |   ...
      |&lt;/v-btn&gt;
      |&nbsp;
      |&lt;v-btn flat&gt;
      |   ...
      |&lt;/v-btn&gt;
      |&nbsp;
      |&lt;v-btn success&gt;
      |   ...
      |&lt;/v-btn&gt;
      |&nbsp;
      |&lt;v-btn block&gt;
      |   ...
      |&lt;/v-btn&gt;
      |&nbsp;
      |&lt;v-btn outline&gt;
      |   ...
      |&lt;/v-btn&gt;
      |&nbsp;
      |&lt;v-btn floating&gt;
      |   ...
      |&lt;/v-btn&gt;
      |&nbsp;
      |&lt;v-btn icon&gt;
      |   &lt;v-icon&gt;profile&lt;/v-icon&gt;
      |&lt;/v-btn&gt;
      |&nbsp;
      |&lt;v-btn icon&gt;
      |   &lt;v-icon large&gt;headphones&lt;/v-icon&gt;
      |&lt;/v-btn&gt;
      |&nbsp;
      |&lt;v-btn floating icon large&gt;
      |   &lt;v-icon&gt;edit&lt;/v-icon&gt;
      |&lt;/v-btn&gt;
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          stage: 'comp',
          title: 'Button',
          desc: `
            <p>
              The <code>v-btn</code> component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color. Remember that all event captures must be done using the <strong>.native</strong> modifier.
            </p>
          `,
          types: [
            'comp', 'slot'
          ],
          params: [
            [
              '<code>&lt;v-btn&gt;',
              '',
              'Base Component'
            ],
            [
              '<code>block</code>',
              'Applies the btn--block class',
              'Default: false'
            ],
            [
              '<code>flat</code>',
              'Applies the btn--flat class',
              'Default: false'
            ],
            [
              '<code>floating</code>',
              'Applies the btn--floating class',
              'Default: false'
            ],
            [
              '<code>icon</code>',
              'Applies the btn--icon class',
              'Default: false'
            ],
            [
              '<code>large</code>',
              'Applies the btn--large class',
              'Default: false'
            ],
            [
              '<code>outline</code>',
              'Applies the btn--outline class',
              'Default: false'
            ],
            [
              '<code>round</code>',
              'Applies the btn--round class',
              'Default: false'
            ],
            [
              '<code>raised</code>',
              'Applies the btn--raised class',
              'Default: true'
            ],
            [
              '<code>small</code>',
              'Applies the btn--small class',
              'Default: false'
            ],
            [
              '<code>type</code>',
              'Sets the buttons type attribute',
              'Default: false'
            ]
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
          title: 'Button Component | Vuetify',
          h1: 'Buttons',
          description: 'Button component for Vuetify Framework',
          keywords: 'vuetify, buttons, components'
        }
      }
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
    
    .btn
      margin: 1rem 0
</style>