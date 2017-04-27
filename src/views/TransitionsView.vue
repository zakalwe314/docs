<template lang="pug">
  div(class="view" id="transitions-view")
    div
      section-def
        dt(slot="title") {{ doc.title }}
        dd(slot="desc") {{ doc.desc }}
    section
      section-header Available transitions
      ul
        li <h5>v-carousel-transition</h5>
        li <h5>v-carousel-reverse-transition</h5>
        li <h5>v-dialog-transition</h5>
        li <h5>v-dialog-bottom-transition</h5>
        li <h5>v-tab-transition</h5>
        li <h5>v-tab-reverse-transition</h5>
        li <h5>v-scale-transition</h5>
        li <h5>v-slide-y-transition</h5>
        li <h5>v-slide-y-reverse-transition</h5>
        li <h5>v-slide-x-transition</h5>
        li <h5>v-slide-x-reverse-transition</h5>
        li <h5>v-fade-transition</h5>
</template>

<script>
  export default {
    name: 'transitions-view',

    data () {
      return {
        doc: {
          title: 'Transitions',
          desc: 'Vuetify provides a set of different transitions to be used either on components or transition between states.'
        },
        lorem: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
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
          title: 'Transitions | Vuetify.js',
          h1: 'Transitions',
          description: 'Transitions for the Vuetify Framework',
          keywords: 'vuetify, transitions'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #content-view
    .component-example__container
      > div
        width: 100%

    code
      box-shadow: none
</style>
