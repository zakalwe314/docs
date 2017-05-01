<template lang="pug">
  div(class="view" id="display-view")
    div
      section-def
        dt(slot="title") Display
        dd(slot="desc") The display helpers allow you to control the displaying of content based upon viewport width.
    section
      h6 Viewport sizes
      ul
        li <code>xs</code> - extra small viewport devices (&lt; 576px)
        li <code>sm</code> - small viewport devices (&lt; 768px)
        li <code>md</code> - medium viewport devices (&lt; 992px)
        li <code>lg</code> - large viewport devices (&lt; 1200px)
        li <code>xl</code> - extra large viewport devices (&gt; 1200px)
      h6 Classes
      ul
        li <code>hidden-xs-only</code> - hidden on extra small viewports only
        li <code>hidden-sm-and-down</code> - hidden on small viewports and down
        li <code>hidden-sm-and-up</code> - hidden on small viewports and up
        li <code>hidden-md-only</code> - hidden on medium viewports only
        li <code>hidden-md-and-down</code> - hidden on medium viewports and down
        li <code>hidden-md-and-up</code> - hidden on medium viewports and up
        li <code>hidden-lg-only</code> - hidden on large viewports only
        li <code>hidden-lg-and-down</code> - hidden on large viewports and down
        li <code>hidden-lg-and-up</code> - hidden on large viewports and up
        li <code>hidden-xl-only</code> - hidden on extra large viewports only
      component-example(header="Hidden elements" file="display/1" v-bind:data="$data")
</template>

<script>
  export default {
    name: 'display-view',

    data () {
      return {
        items: [
          {
            text: 'Link'
          },
          {
            text: 'Link'
          },
          {
            text: 'Link'
          }
        ]
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
          title: 'Display Classes | Vuetify.js',
          h1: 'Display',
          description: 'Display helper classes allow you to control when elements should display based upon viewport.',
          keywords: 'vuetify, display helper classes'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #display-view
    .toolbar
      height: 64px
</style>
