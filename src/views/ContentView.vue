<template lang="pug">
  div(class="view" id="content-view")
    div
      section-def
        dt(slot="title") {{ doc.title }}
        dd(slot="desc") {{ doc.desc }}
    section
      section-header Examples
      component-example(header="Block-quotes" file="content/1")
        div
          blockquote(v-text="lorem")
      component-example(header="Paragraphs" file="content/2")
        p(v-text="lorem" v-for="i in 2")
      component-example(header="Code")
        div Example of an inline <code>&lt;code&gt;</code> element.
      component-example(header="Variables")
        div <var>v</var> = <var>u</var> * <var>e</var>
      component-example(header="User Input")
        div To install Vuetify, type <kbd>npm install vuetify</kbd> into your console. Once complete, type <kbd>cd &lt;project name&gt;</kbd> and run <kbd>npm install</kbd>
</template>

<script>
  export default {
    name: 'content-view',

    data () {
      return {
        doc: {
          title: 'Content',
          desc: 'Soon'
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
          title: 'Content | Vuetify.js',
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