<template lang="pug">
  div(class="view" id="display-view")
    div
      section-def
        dt(slot="title") Display
        dd(slot="desc") The display helpers allow you to control the displaying of content based upon viewport width.
    section
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
      component-example(header="Hidden elements" file="display/1")
        v-navbar(class="pl-0")
          v-navbar-logo Logo
          v-navbar-items(class="hidden-sm-and-down" v-bind:items="items")
</template>

<script>
  export default {
    name: 'display-view',

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
          title: 'Display Classes | Vuetify.js',
          h1: 'Display',
          description: 'Display helper classes allow you to control when elements should display based upon viewport.',
          keywords: 'vuetify, display helper classes'
        }
      }
    }
  }
</script>