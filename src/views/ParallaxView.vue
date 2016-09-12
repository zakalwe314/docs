<template lang="pug">
  section
    v-row
      v-col(xs12)
        v-parallax(
          src="http://www.mrwallpaper.com/wallpapers/Space-Planet-Aurora-1366x768.jpg"
        )
          v-parallax-content
            h1 Explore Space
            p Duo te error albucius. Nam dicunt timeam probatus at, vix ei harum soleat instructior. Mei partiendo adipiscing scripserit eu, cu minimum placerat instructior est, ius ne latine pertinax salutatus. 
            div
              v-btn(
                class="transparent white--text buy",
                large
              )
                | Buy a Ship
                v-icon(right) keyboard_arrow_right
              v-btn(
                class="transparent white--text explore",
                large
              )
                | Explore
                v-icon(right) search
</template>

<script>
  export default {
    name: 'parallax-view',

    mounted () {
      this.$emit('view', 'Parallax')
    }
  }
</script>

<style lang="stylus" scoped>
  .parallax__content    
    h1
      font-weight: 300
      white-space: nowrap
      
    p
      font-weight: 100
    h1
      margin: 2rem 0
      
    p
      font-size: 1.2rem      
      
    .btn
      border-radius: 0
      margin: 4rem 2rem 0 0
      
      &:before
        position: absolute
        top: 0
        left: 0
        content: ""
        width: 100%
        height: 100%
        transform: skew(-10deg)
        z-index: -1
        transition: .3s ease-out
        
      &.buy
        &:hover          
          &:before
            background: rgba(#F44336, .5)
            
        &:before
          background: #F44336
          
      &.explore
        &:hover          
          &:before
            background: rgba(#78909c, .5)
            
        &:before
          background: #78909c
    
  .row
    margin-top: 50vh
    height: 500vh
</style>