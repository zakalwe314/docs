<template lang="pug">
  doc-view(v-bind:doc="doc")
    div#slider
      v-slider(v-model="current")
        v-slider-item(
          v-for="(item, index) in items"
          v-bind:src="item.src"
        )
</template>

<style lang="stylus">
  div#slider {
    padding: 0 2rem
  }
  
  .wrapper
    overflow: hidden
    margin: 0 2rem
    
  .carousel
    margin: 0
    padding: 0
    display: flex
    position: relative
    left: -33.33%
    transform: translateX(33.33%)
      
    &--is-reversing
      transform: translateX(-33.33%)
    
    &--is-set
      transform: none
      transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)
    
    &__item
      display: flex
      align-items: center
      justify-content: center
      background: rgba(grey, .4)
      flex: 1 0 33.33%
      height: 200px
      order: 2
      
      &--is-ref
        order: 1

      &:nth-child(even)
        background: rgba(grey, .2)
</style>

<script>
  export default {
    methods: {
      order () {
        this.$refs.item.forEach((v, i) => {
          v.style.order = i + 2
        })
      },

      next () {
        this.reset()
        let item = this.$refs.item.shift()
        this.$refs.item.push(item)
        this.order()
        this.reverse = false
        this.transition()
      },

      prev () {
        this.reset()
        let item = this.$refs.item.pop()
        this.$refs.item.unshift(item)
        this.order()
        this.reverse = true
        this.transition()
      },

      reset () {
        this.$refs.item.forEach(i => {
          i.removeAttribute('style')
        })
      },

      transition () {
        this.set = false
        setTimeout(() => this.set = true, 50)
      }
    },

    data () {
      return {
        set: true,
        reverse: false,
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

      this.$refs.item.unshift(this.$refs.item.pop())
      this.order()
    }
  }
</script>
