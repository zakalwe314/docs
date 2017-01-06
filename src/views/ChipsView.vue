<template lang="pug">
  doc-view(v-bind:doc="doc" id="chips-view")
    component-example(header="Default" file="chips/1")
      v-chip Chip
      v-chip(small)
        v-icon code
    component-example(header="Colored" file="chips/2")
      v-chip(class="primary white--text") Primary
      v-chip(class="secondary white--text") Secondary
      v-chip(class="red white--text") Colored Chip
      v-chip(class="green white--text") Colored Chip
    component-example(header="Icon" file="chips/3")
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
    component-example(header="Outline" file="chips/4")
      v-chip(outline, class="secondary secondary--text") Outline
      v-chip(outline, class="primary primary--text") Colored
      v-chip(outline, class="red red--text")
        v-icon(left) build
        | Icon
    component-example(header="Label" file="chips/5")
      v-chip(label) Label
      v-chip(label, class="pink white--text")
        v-icon(left) label
        | Tags
      v-chip(label, outline, class="red red--text") Outline
    component-example(header="Closable" file="chips/6")
      div(class="text-xs-center" v-if="!chip1 && !chip2 && !chip3 && !chip4")
        v-btn(
          v-on:click.native="chip1 = true, chip2 = true, chip3 = true, chip4= true"
          class="primary white--text"
        ) Reset Chips
      v-chip(close v-model="chip1") Closable
      v-chip(close v-model="chip2" class="red white--text") Remove
      v-chip(close v-model="chip3" outline class="green green--text") Success
      v-chip(close v-model="chip4" outline label class="orange orange--text") Complete
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
          props: {
            'v-chip': {
              params: [
                [
                  'close',
                  'Boolean',
                  'False',
                  'Removes the chip'
                ],
                [
                  'label',
                  'Boolean',
                  'False',
                  'Applies the chip--label class'
                ],
                [
                  'outline',
                  'Boolean',
                  'False',
                  'Applies the chip--outline class'
                ],
                [
                  'small',
                  'Boolean',
                  'False',
                  'Applies the chip--small class'
                ]
              ],
              model: {
                types: ['Boolean'],
                default: 'False'
              }
            }
          },
          slots: {
            'v-chip': {
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
          title: 'Chip Component | Vuetify.js',
          h1: 'Chips',
          description: 'Chip component for Vuetify Framework',
          keywords: 'vuetify, chips, components'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #chips-view
    .chip
      margin: 1rem
</style>