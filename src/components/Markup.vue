<template lang="pug">
  div(class="markup" v-bind:data-lang="lang")
    pre
      code(v-bind:class="lang" ref="code")
        div
          slot
</template>

<script>
  import hljs from 'highlight.js/lib/highlight.js'

	export default {
    props: {
      lang: String,
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
    padding: 3rem 2rem
    background: rgba(#000, 0.04)
    border-radius: 2px
    height: 100%
    cursor: pointer
    position: relative
    margin-bottom: 1rem
    align-items: center
      
    &:after
      position: absolute
      right: 1rem
      transition: opacity .2s ease-in
      content: attr(data-lang)
      color: rgba(#000, 0.3)
      font-size: 1rem
      font-weight: 700
      top: .5rem
        
    &:hover
      background: rgba(#000, 0.08)
      
      &:after
        opacity: 0
        
    
    pre, code
      background: transparent
      
    code
      font-weight: 600 !important
      position: relative
      box-shadow: none
      overflow-x: auto
      overflow-y: hidden
      word-break: break-word
      display: flex
      align-items: center
      
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