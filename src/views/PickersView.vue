<template lang="pug">
  doc-view(v-bind:doc="doc" id="pickers-view")
    component-example(header="Date pickers" file="pickers/1" v-bind:data="$data")
    component-example(file="pickers/2" v-bind:data="$data")
      span(class="title" slot="details") Dark Theme
    component-example(header="In dialog and menu" file="pickers/3" v-bind:data="$data")
    component-example(header="Time pickers" file="pickers/4" v-bind:data="$data")
    component-example(file="pickers/5" v-bind:data="$data")
      span(class="title" slot="details") Dark Theme
    component-example(header="In dialog and menu" file="pickers/6" v-bind:data="$data")
</template>

<script>
  export default {
    data () {
      return {
        e1: null,
        e2: null,
        e3: null,
        e4: null,
        e5: null,
        e6: null,
        menu: false,
        modal: false,
        menu2: false,
        modal2: false,
        doc: {
          title: 'Pickers',
          desc: '',
          props: {}
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
          title: 'Pickers | Vuetify.js',
          h1: 'Pickers',
          description: 'Pickers directive for Vuetify Framework',
          keywords: 'vuetify, pickers, directives'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #pickers-view
    min-height: 150vh
    
    .component-example .col
      margin: 1rem auto
</style>