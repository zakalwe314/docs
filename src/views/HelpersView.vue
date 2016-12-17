<template lang="pug">
  div(class="view" id="helpers")
    section
      section-text
        dt(slot="title") Helpers
        dd(slot="desc") In order to expedite the development process, Vuetify offers a multitude of helper classes to reduce style clutter and the time it takes to prototype an application.
    section
      section-header Spacing
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
    markup(lang="html")
      |&lt;p class="mt-1"&gt;...&lt;/p&gt;
      |&nbsp;
      |&lt;li class="pb-2"&gt;...&lt;/li&gt;
      |&nbsp;
      |&lt;v-btn class="primary ma-3"&gt;...&lt;/v-btn&gt;
    h6 Example of spacers variable
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
    section
      section-header Typography
      component-example(header="Alignment")
        v-card
          v-card-text
            p(class="text-lg-right") Right align on large viewport sizes
            p(class="text-md-center") Center align on medium viewport sizes
            p(class="text-sm-left") Left align on small viewport sizes
            p(class="text-xs-center") Center align on all viewport sizes
      markup(lang="html")
        |&lt;p class="text-xs-left"&gt;...&lt;/p&gt;
        |&lt;p class="text-xs-center"&gt;...&lt;/p&gt;
        |&lt;p class="text-xs-right"&gt;...&lt;/p&gt;
        |&nbsp;
        |&nbsp;
        |&lt;p class="text-xs-left"&gt;...&lt;/p&gt;
        |&lt;p class="text-sm-left"&gt;...&lt;/p&gt;
        |&lt;p class="text-md-left"&gt;...&lt;/p&gt;
        |&lt;p class="text-lg-left"&gt;...&lt;/p&gt;
    section
      section-header Display
      h6 Viewports
      ul
        li <code>xs</code> - extra small viewport devices
        li <code>sm</code> - small viewport devices
        li <code>md</code> - medium viewport devices
        li <code>lg</code> - large viewport devices
      h6 Direction
      ul
        li <code>up</code> - from specified viewport and up
        li <code>down</code> - from specified viewport and down
      component-example(header="Hidden elements")
        v-navbar(class="pl-0")
          v-navbar-logo Logo
          v-navbar-items(class="hidden-sm-and-down" v-bind:items="items")
      markup(lang="html")
        |&lt;v-navbar&gt;
        |   &lt;v-navbar-logo&gt;Logo&lt;/v-navbar-logo&gt;
        |   &lt;v-navbar-items class="hidden-sm-and-down" v-bind:items="items"&gt;
        |   &lt;/v-navbar-items&gt;
        |&lt;/v-navbar&gt;
</template>

<script>
  export default {
    name: 'helpers-view',

    data () {
      return {
        items: [
          {
            href: '#!',
            text: 'Link'
          },
          {
            href: '#!',
            text: 'Link'
          },
          {
            href: '#!',
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
          title: 'Helpers | Vuetify',
          h1: 'Helpers',
          description: 'Helper classes for the Vuetify Framework',
          keywords: 'vuetify, helper classes'
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