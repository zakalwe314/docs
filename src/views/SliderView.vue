<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(file="sliders/1")
      v-slider
        v-slider-item(
          v-for="item in items"
          v-bind:src="item.src"
        )
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Slider',
          desc: 'The <code>v-slider</code> component is used to display large numbers of visual content on a rotating timer.',
          props: {
            'v-slider': {
              params: [['None']]
            },
            'v-slider-item': {
              params: [
                [
                  'src',
                  'String',
                  'Required',
                  'The image src',
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
