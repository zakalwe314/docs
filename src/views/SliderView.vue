<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(file="sliders/1")
      v-slider
        v-slider-item(
          v-for="item in items"
          v-bind:src="item.src"
        )
    component-example(header="Custom Transition" file="sliders/2")
      v-slider(icon="remove")
        v-slider-item(
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
          title: 'Slider',
          desc: 'The <code>v-slider</code> component is used to display large numbers of visual content on a rotating timer.',
          props: {
            'v-slider': {
              params: [
                [
                  'cycle',
                  'Boolean',
                  'False',
                  'Determines if slider should cycle through images'
                ],
                [
                  'icon',
                  'String',
                  'fiber_manual_record',
                  'Sets icon for slider delimiter'
                ],
                [
                  'interval',
                  'Number',
                  '6000',
                  'The duration between image cycles'
                ]
              ]
            },
            'v-slider-item': {
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
            'v-slider': {
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
          title: 'Slider Component | Vuetify.js',
          h1: 'Sliders',
          description: 'Slider component for Vuetify Framework',
          keywords: 'vuetify, sliders, components'
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