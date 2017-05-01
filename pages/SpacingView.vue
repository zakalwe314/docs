<template lang="pug">
  div(class="view" id="spacing-view")
    div
      section-def
        dt(slot="title") Spacing
        dd(slot="desc") Update your layout without creating new classes. Spacing helpers are useful for modifying the padding and margin of an element.
    section
      h6 Type
      ul
        li <code>m</code> - to set margin
        li <code>p</code> - to set padding
      h6 Direction
      ul
        li <code>t</code> - to set top
        li <code>r</code> - to set right
        li <code>b</code> - to set bottom
        li <code>l</code> - to set left
        li <code>x</code> - to set x-axis
        li <code>y</code> - to set y-axis
        li <code>a</code> - to set all
      h6 Size
      ul
        li <code>0</code> - removes margin or padding for specified direction
        li <code>1</code> - applies margin or padding with <code>1rem * .25</code>
        li <code>2</code> - applies margin or padding with <code>1rem * .50</code>
        li <code>3</code> - applies margin or padding with <code>1rem</code> (14px)
        li <code>4</code> - applies margin or padding with <code>1rem * 1.5</code>
        li <code>5</code> - applies margin or padding with <code>1rem * 3</code>
    section
      h6 Example of spacers variable
      markup(lang="html")
        |&lt;p class="mt-1"&gt;...&lt;/p&gt;
        |&nbsp;
        |&lt;li class="pb-2"&gt;...&lt;/li&gt;
        |&nbsp;
        |&lt;v-btn class="primary ma-3"&gt;...&lt;/v-btn&gt;
      markup(lang="stylus")
        |$spacer := 1rem
        |$spacer-x := $spacer
        |$spacer-y := $spacer
        |&nbsp;
        |$spacers := {
        |  zero: {
        |    x: 0,
        |    y: 0
        |  },
        |  one: {
        |    x: ($spacer-x * .25),
        |    y: ($spacer-y * .25)
        |  },
        |  two: {
        |    x: ($spacer-x * .5),
        |    y: ($spacer-y * .5)
        |  },
        |  three: {
        |    x: $spacer-x,
        |    y: $spacer-y
        |  },
        |  four: {
        |    x: ($spacer-x * 1.5),
        |    y: ($spacer-y * 1.5)
        |  },
        |  five: {
        |    x: ($spacer-x * 3),
        |    y: ($spacer-y * 3)
        |  }
        |}
</template>

<script>
  export default {
    name: 'spacing-view',

    mounted () {
      this.$emit('view', this.meta())
    },

    preFetch () {
      return this.methods.meta()
    },

    methods: {
      meta () {
        return {
          title: 'Spacing Classes | Vuetify.js',
          h1: 'Spacing',
          description: 'Spacing helper classes allow you to apply margin or padding to any element',
          keywords: 'vuetify, spacing helper classes'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #helpers
    li
      margin-bottom: 1rem
</style>