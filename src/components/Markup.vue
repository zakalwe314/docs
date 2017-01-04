<template lang="pug">
  div(class="markup")
    pre
      code(v-bind:class="lang" ref="code")
        slot
</template>

<script>
  import hljs from 'highlight.js/lib/highlight.js'

	export default {
    props: {
      lang: String
    },

		mounted () {
			hljs.highlightBlock(this.$refs.code)
		}
	}
</script>

<style lang="stylus">
  @import '../stylus/settings/_variables'
  
  .tabs
    .markup
      margin: 2rem 0
      
  .markup
    font-size: 1.2rem
    transition: .3s ease-out
    box-shadow: none
    display: flex
    align-items: center
    padding: 2rem
    overflow-x: auto
    overflow-y: hidden
    position: absolute
    top: 0
    left: 0
    width: 100%
    
    
    pre, code
      background: transparent
      width: 100%
      display: block
      
    code
      font-weight: 600 !important
      position: relative
      box-shadow: none
      
      > span
        white-space: nowrap
      
      &:before
        display: none
    
    .hljs
      color: $theme.secondary
      
      .hljs-tag, .hljs-variable
        color: $purple.lighten-1
      
      .hljs-attr, .hljs-keyword
        color: $theme.primary
        
      .hljs-string, .hljs-literal, .hljs-number
        color: $red.lighten-2
</style>