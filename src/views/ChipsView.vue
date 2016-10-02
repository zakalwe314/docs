<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(header="Default")
      v-chip Chip
      v-chip(small)
        v-icon code
    component-example(header="Colored")
      v-chip(class="primary white--text") Primary
      v-chip(class="secondary white--text") Secondary
      v-chip(class="red white--text") Colored Chip
      v-chip(class="green white--text") Colored Chip
    component-example(header="Icon")
      v-chip
        v-icon(left) account_circle
        | Ranee
      v-chip(class="orange white--text")
        | Premium
        v-icon(right) star
      v-chip(class="primary white--text")
        | 1 Year
        v-icon(right) cake
      v-chip(class="green white--text")
        v-icon done_all
      v-chip(close, class="teal white--text")
        v-icon(left) check_circle
        | Confirmed
    component-example(header="Outline")
      v-chip(outline, class="secondary secondary--text") Outline
      v-chip(outline, class="primary primary--text") Colored
      v-chip(outline, class="red red--text")
        v-icon(left) build
        | Icon
    component-example(header="Label")
      v-chip(label) Label
      v-chip(label, class="pink white--text")
        v-icon(left) label
        | Tags
      v-chip(label, outline, class="red red--text") Outline
    component-example(header="Closable")
      v-chip(close) Closable
      v-chip(close, class="red white--text") Remove
      v-chip(close, outline, class="green green--text") Success
      v-chip(close, outline, label, class="orange orange--text") Complete
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          intro: `Soon`,
          types: [
            'comp', 'slot'
          ],
          params: [
            [
              '<code>&lt;v-chip close&gt;</code>',
              '<code>close</code>',
              'Removes the chip',
              'Default: false'
            ],
            [
              '<code>&lt;v-chip label&gt;</code>',
              '<code>label</code>',
              'Applies the chip--label class',
              'Default: false'
            ],
            [
              '<code>&lt;v-chip outline&gt;</code>',
              '<code>outline</code>',
              'Applies the chip--outline class',
              'Default: false'
            ],
            [
              '<code>&lt;v-chip small&gt;</code>',
              '<code>small</code>',
              'Applies the chip--small class',
              'Default: false'
            ]
          ]
        }
      }
    },

    mounted () {
      this.$emit('view', 'Chips')
    }
  }
</script>

<style lang="stylus" 
       scoped
>
  .component-example
    .chip
      margin: 0 1rem
</style>