<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(file="carousels/1")
      v-carousel
        v-carousel-item(
          v-for="item in items"
          v-bind:src="item.src"
        )
    component-example(header="Custom Transition" file="carousels/2")
      v-carousel(icon="remove")
        v-carousel-item(
          v-for="item in items"
          v-bind:src="item.src"
          transition="fade"
          reverseTransition="fade"
        )
    markup(lang="js")
      |import Vue from 'vue'
      |&nbsp;
      |Vue.component('fade', {
      |   function: true,
      |&nbsp;
      |   render (createElement, context) {
      |     let data = context.data || {}
      |     data.props = { name: 'fade' }
      |     return createElement('transition', data, context.children)
      |   }
      |})
    markup(lang="stylus")
      |.fade
      |   &amp;-enter-active, &amp;-leave-active, &amp;-leave-to
      |     transition: .3s ease-out
      |     position: absolute
      |     top: 0
      |     left: 0
      |&nbsp;
      |   &amp;-enter, &amp;-leave, &amp;-leave-to
      |     opacity: 0
</template>

<script>
  import Vue from 'vue'

  Vue.component('fade', {
    functional: true,

    render (createElement, context) {
      let data = context.data || {}

      data.props = { name: 'fade' }

      return createElement('transition', data, context.children)
    }
  })

  export default {
    data () {
      return {
        doc: {
          title: 'Carousel',
          desc: 'The <code>v-carousel</code> component is used to display large numbers of visual content on a rotating timer.',
          props: {
            'v-carousel': {
              params: [
                [
                  'cycle',
                  'Boolean',
                  'False',
                  'Determines if carousel should cycle through images'
                ],
                [
                  'icon',
                  'String',
                  'fiber_manual_record',
                  'Sets icon for carousel delimiter'
                ],
                [
                  'interval',
                  'Number',
                  '6000',
                  'The duration between image cycles'
                ]
              ]
            },
            'v-carousel-item': {
              params: [
                [
                  'src',
                  'String',
                  'Required',
                  'The image src',
                ],
                [
                  'transition',
                  'String',
                  'v-tab-transition',
                  'Sets the normal transition',
                ],
                [
                  'reverseTransition',
                  'String',
                  'v-tab-reverse-transition',
                  'Sets the reverse transition',
                ]
              ]
            }
          },
          slots: {
            'v-carousel': {
              default: true
            }
          }
        },
        items: [
          {
            src: 'http://hddesktopwallpapers.in/wp-content/uploads/2015/09/cute-almonds-picture-1440x500.jpg'
          },
          {
            src: 'http://hddesktopwallpapers.in/wp-content/uploads/2015/09/sky-hd-picture-1440x500.jpg'
          },
          {
            src: 'https://burlingtonontariobirder.files.wordpress.com/2015/03/cropped-red-tailed-hawk-my-favourite-picture.jpg'
          },
          {
            src: 'http://www.mrwallpaper.com/wallpapers/Space-Planet-Aurora-1366x768.jpg'
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
          title: 'Carousel Component | Vuetify.js',
          h1: 'Carousels',
          description: 'Carousel component for Vuetify Framework',
          keywords: 'vuetify, carousels, components'
        }
      }
    }
  }
</script>


<style lang="stylus">
  .fade
    &-enter-active, &-leave-active, &-leave-to
      transition: .3s ease-out
      position: absolute
      top: 0
      left: 0
      
    &-enter, &-leave, &-leave-to
      opacity: 0
</style>