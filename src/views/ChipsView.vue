<template lang="pug">
  doc-view(v-bind:doc="doc" id="chips-view")
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
      div(class="text-xs-center" v-if="!chip1 && !chip2 && !chip3 && !chip4")
        v-btn(
          v-on:click.native="chip1 = true, chip2 = true, chip3 = true, chip4= true"
          class="primary white--text"
        ) Reset Chips
      v-chip(close v-model="chip1") Closable
      v-chip(close v-model="chip2" class="red white--text") Remove
      v-chip(close v-model="chip3" outline class="green green--text") Success
      v-chip(close v-model="chip4" outline label class="orange orange--text") Complete
    markup(slot="markup")
      |&lt;v-chip&gt;
      |   ...
      |&lt;/v-chip&gt;
      |&nbsp;
      |&lt;v-chip label&gt;
      |   ...
      |&lt;/v-chip&gt;
      |&nbsp;
      |&lt;v-chip outline&gt;
      |   &lt;v-icon left&gt;list&lt;/v-icon&gt;
      |   ...
      |&lt;/v-chip&gt;
      |&nbsp;
      |&lt;v-chip small&gt;
      |   ...
      |&lt;/v-chip&gt;
      |&nbsp;
      |&lt;v-chip close&gt;
      |   ...
      |&lt;/v-chip&gt;
</template>

<script>
  export default {
    data () {
      return {
        chip1: true,
        chip2: true,
        chip3: true,
        chip4: true,
        doc: {
          title: 'Chip',
          desc: `The <code>v-chip</code> component is used to convey small pieces of information. Using the <code>close</code> property, the chip becomes interactive, allowing user interaction.`,
          types: [
            'comp', 'slot'
          ],
          params: [
            [
              '<code>&lt;v-chip&gt;</code>',
              '',
              'Base component'
            ],
            [
              '<code>v-model</code>',
              '',
              'Accepts v-model attr: [Boolean]'
            ],
            [
              '<code>close</code>',
              'Removes the chip',
              'Default: false'
            ],
            [
              '<code>label</code>',
              'Applies the chip--label class',
              'Default: false'
            ],
            [
              '<code>outline</code>',
              'Applies the chip--outline class',
              'Default: false'
            ],
            [
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

<style lang="stylus">
  #chips-view
    .chip
      margin: 1rem
</style>