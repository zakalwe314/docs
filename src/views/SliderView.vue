<template lang="pug">
  section
    v-row
      v-col(xs12)
        v-slider(v-bind:items="items")
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            text: 'Squirrel Time',
            bg: 'http://hddesktopwallpapers.in/wp-content/uploads/2015/09/cute-almonds-picture-1440x500.jpg'
          },
          {
            text: 'Sky',
            bg: 'http://hddesktopwallpapers.in/wp-content/uploads/2015/09/sky-hd-picture-1440x500.jpg'
          },
          {
            text: 'Falcon Punch',
            bg: 'https://burlingtonontariobirder.files.wordpress.com/2015/03/cropped-red-tailed-hawk-my-favourite-picture.jpg'
          }
        ]
      }
    },

    mounted () {
      this.$emit('view', 'Slider')
    }
  }
</script>