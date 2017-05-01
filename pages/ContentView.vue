<template lang="pug">
  div(class="view" id="content-view")
    div
      section-def
        dt(slot="title") {{ doc.title }}
        dd(slot="desc") {{ doc.desc }}
    section
      section-header Examples
      component-example(header="Block-quotes" file="content/1")
      component-example(header="Paragraphs" file="content/2")
      component-example(header="Code" file="content/3")
      component-example(header="Variables" file="content/4")
      component-example(header="User Input" file="content/5")
</template>

<script>
  export default {
    name: 'content-view',

    data () {
      return {
        doc: {
          title: 'Content',
          desc: 'Vuetify has custom styling for multiple standard elements.'
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
          title: 'Content Styles | Vuetify.js',
          h1: 'Content',
          description: 'Content styles for the Vuetify Framework',
          keywords: 'vuetify, content'
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