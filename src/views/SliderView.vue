<template lang="pug">
  div.view
    section
      section-header Introduction
      component-chip(type="comp")
      section-text Soon
    section
      section-header Example
        v-slider
          v-slider-item(
            v-for="(item, index) in items"
            v-bind:src="item.src"
          )
</template>

<script>
  export default {
    data () {
      return {
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