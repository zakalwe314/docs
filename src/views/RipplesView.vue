<template lang="pug">
  doc-view(v-bind:doc="doc" id="ripple-doc")
    component-example(header="Buttons" file="ripples/1")
      v-btn(primary dark ripple) Default Ripple
    component-example(header="Custom Color" file="ripples/2")
      v-btn(secondary dark v-bind:ripple="{ class: 'primary--text' }") Colored Ripple
    component-example(header="Tabs" file="ripples/3")
      v-tabs(grow)
        v-tabs-tabs
          v-tab-item(v-for="i in 3" v-bind:item="{ text: 'Item ' + i, href: '#mobile-tabs-1-' + i }" ripple)
        v-tabs-items
          v-tabs-item(v-for="i in 3" v-bind:id="'mobile-tabs-1-' + i")
    component-example(header="Sidebars" file="ripples/4")
      v-card(class="grey lighten-3")
        v-sidebar(height="300px" id="ripple-sidebar")
          v-list
            v-list-item(v-for="i in 3")
              v-list-tile(v-bind:item="{ title: 'Link' }" ripple)
    component-example(header="Navbar" file="ripples/5")
      v-navbar
        v-navbar-items
          v-navbar-item(v-for="i in 3" v-bind:item="{ href: 'javascript:;', text: 'Link' }" ripple)
    component-example(header="Collapsible" file="ripples/6")
      v-collapsible
        li
          v-collapsible-header(v-ripple="{ class: 'grey--text' }") Item
          v-collapsible-body
            v-card(class="grey lighten-3")
              v-card-text Content
        li
          v-collapsible-header(v-ripple="{ class: 'grey--text' }") Item
          v-collapsible-body
            v-card(class="grey lighten-3")
              v-card-text Content
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Ripples',
          desc: 'The <code>v-ripple</code> directive is used to show action from a user. It can be applied to any block level element. Numerous components come with the ripple directive built in, such as the <code>v-btn</code>, <code>v-tab-item</code> and many more.',
          props: {
            'v-ripple': {
              params: [
                [
                  `{ class: 'class' }`,
                  'Property',
                  '',
                  'Applies a custom class to the ripple, useful for changing color'
                ]
              ]
            }
          }
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
          title: 'Ripple Directive | Vuetify.js',
          h1: 'Ripples',
          description: 'Ripple directive for Vuetify Framework',
          keywords: 'vuetify, ripples, ink, directives'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #ripple-doc
    .navbar
      height: 5rem
      padding-left: 0
      
    .sidebar
      transform: translateX(0) !important
</style>