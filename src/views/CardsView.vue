<template lang="pug">
  doc-view(v-bind:doc="doc" id="cards")
    component-example(header="Basic" file="cards/1" v-bind:data="$data")

    component-example(header="Title" file="cards/2" v-bind:data="$data")

    component-example(header="Picture" file="cards/3" v-bind:data="$data")

    component-example(header="Background" file="cards/4" v-bind:data="$data")

    component-example(header="Horizontal" file="cards/5" v-bind:data="$data")

    component-example(header="Colored" file="cards/6" v-bind:data="$data")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Card',
          desc: `
            <p>
              The <code>v-card</code> component is a versatile component that can be used for anything from a panel to a static image. The <strong>card</strong> component has numerous helper components to make markup as easy as possible. Components that have no listed options use <strong class="green--text">Vue's</strong> functional component option for faster rendering and serve as markup sugar to make building easier.
            </p>
          `,
          props: {
            'v-card': {
              params: [
                [
                  'height',
                  'String',
                  'auto',
                  'Manually define the height of the Card',
                ],
                [
                  'horizontal',
                  'Boolean',
                  'False',
                  'Applies the card--horizontal class',
                ],
                [
                  'img',
                  'String',
                  `''`,
                  'Specifies an image background',
                ]
              ]
            },
            'v-card-row': {
                params: [
                [
                  'actions',
                  'Boolean',
                  'False',
                  'Applies the card__row--action class',
                ],
                [
                  'height',
                  'String',
                  'auto',
                  'Manually define the height of the Card Row',
                ],
                [
                  'img',
                  'String',
                  `''`,
                  'Specifies an image background',
                ]
              ]
            }
          },
          functional: {
            'v-card': {
              params: [
                [
                  'v-card-title',
                  '.card__title'
                ],
                [
                  'v-card-col',
                  '.card__col'
                ]
              ]
            }
          }
        },
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
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
          title: 'Card Component | Vuetify.js',
          h1: 'Cards',
          description: 'Card component for Vuetify Framework',
          keywords: 'vuetify, cards, components'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #cards
    .portrait
      .card__row--actions
        background: rgba(0,0,0,.5)

    .card
      margin: 1rem 0

    .component-example
      flex-flow: row wrap
      justify-content: space-between

      > div
        flex: 1 0 50%
        display: flex
        justify-content: space-between
        padding: 1rem

        @media screen and (max-width: 768px)
          flex: 1 0 100%

        > *
          margin: 0 auto
          width: 70%
</style>
