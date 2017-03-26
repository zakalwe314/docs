<template lang="pug">
  doc-view(v-bind:doc="doc" id="ripple-doc")
    component-example(header="Buttons" file="ripples/1")
    component-example(header="Custom Color" file="ripples/2")
    component-example(header="Tabs" file="ripples/3")
    component-example(header="Sidebars" file="ripples/4")
    component-example(header="Toolbar" file="ripples/5")
    component-example(header="Collapsible" file="ripples/6")
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
    .toolbar
      padding-left: 0
      
    .sidebar
      transform: translateX(0) !important
</style>