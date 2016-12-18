<template lang="pug">
  div(class="view")
    section
      section-def
        dt(slot="title") {{ doc.title }}
        dd(slot="desc") {{ doc.desc }}
    section
      section-header Examples
      component-example(
        id="typo"
        header="Headers"
      )
          h1 Heading h1
          h2 Heading h2
          h3 Heading h3
          h4 Heading h4
          h5 Heading h5
          h6 Heading h6
</template>

<script>
  export default {
    name: 'typography-view',

    data () {
      return {
        doc: {
          title: 'Typography',
          desc: 'Soon'
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
          title: 'Typography | Vuetify',
          h1: 'Typography',
          description: 'Typography for the Vuetify Framework',
          keywords: 'vuetify, typography'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #typo .component-example
    flex-direction: column !important
    align-items: flex-start
</style>