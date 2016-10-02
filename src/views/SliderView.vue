<template lang="pug">
  doc-view(v-bind:doc="doc")
    div#slider
      v-slider(v-model="current")
        v-slider-item(
          v-for="(item, index) in items"
          v-bind:src="item.src"
        )
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          intro: 'Soon',
          types: [
            'comp', 'slot'
          ],
          params: []
        },
        current: 0,
        items: [
          {
            src: 'http://hddesktopwallpapers.in/wp-content/uploads/2015/09/cute-almonds-picture-1440x500.jpg'
          },
          {
            src: 'http://hddesktopwallpapers.in/wp-content/uploads/2015/09/sky-hd-picture-1440x500.jpg'
          },
          {
            src: 'https://burlingtonontariobirder.files.wordpress.com/2015/03/cropped-red-tailed-hawk-my-favourite-picture.jpg'
          }
        ]
      }
    },

    mounted () {
      this.$emit('view', 'Slider')
    }
  }
</script>

<style lang="stylus" scoped>
  div#slider {
    padding: 0 2rem
  }
</style>