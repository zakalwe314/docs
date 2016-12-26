<template lang="pug">
  doc-view(v-bind:doc="doc")
    v-slider
      v-slider-item(
        v-for="item in items"
        v-bind:src="item.src"
      )
    div(slot="markup")
      markup(lang="xml")
        |&lt;v-slider&gt;
        |   &lt;v-slider-item v-for="item in items" v-bind:src="item.src"&gt;&lt;/v-slider-item&gt;
        |&lt;/v-slider&gt;
      markup(lang="js")
        |data () {
        |   return {
        |     items: [{ src: '...'}, { src: '...'}, { src: '...'}]
        |   }
        |}
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          stage: 'comp',
          title: 'Slider',
          desc: 'The <code>v-slider</code> component is used to display large numbers of visual content on a rotating timer.',
          params: [
            [
              '<code>v-slider</code>',
              '',
              'Base component'
            ],
            [
              '<code>v-slider-item</code>',
              '',
              'Base component'
            ],
            [
              '<code>src</code>',
              'The image src',
              'Required: true'
            ]
          ]
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
