<template lang="pug">
  doc-view(v-bind:doc="doc" id="chips-view")
    component-example(header="Default" file="chips/1")
    component-example(header="Colored" file="chips/2")
    component-example(header="Icon" file="chips/3")
    component-example(header="Outline" file="chips/4")
    component-example(header="Label" file="chips/5")
    component-example(header="Closable" file="chips/6" v-bind:data="example")
</template>

<script>
  export default {
    data () {
      return {
        example: {
          chip1: true,
          chip2: true,
          chip3: true,
          chip4: true
        },
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
                  'contact',
                  'String',
                  '',
                  'Adds contact image'
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
    .component-example__container > div
      text-align: center
      
    .chip
      margin: 1rem
</style>