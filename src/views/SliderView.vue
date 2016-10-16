<template lang="pug">
  doc-view(v-bind:doc="doc")
    div#slider
      v-slider
        v-slider-item(
          v-for="(item, index) in items"
          v-bind:src="item.src"
        )
</template>

<style lang="stylus">
  div#slider {
    margin: 0 1rem
  }
</style>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Slider',
          desc: 'Soon',
          types: [
            'comp', 'slot'
          ],
          params: []
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
      this.$emit('view', 'Slider')
    }
  }
</script>
