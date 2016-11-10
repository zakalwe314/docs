<template lang="pug">
  div(class="markup")
    pre
      code(v-bind:class="code" ref="code")
        slot
</template>

<script>
  import hljs from 'highlight.js/lib/highlight.js'

	export default {
    props: {
      code: String
    },

		mounted () {
			this.highlight()
		},

		methods: {
			highlight () {
				hljs.highlightBlock(this.$refs.code)
			}
		}
	}
</script>

<style lang="stylus">
  @import '../../node_modules/vuetify/src/stylus/settings/_colors'
  @import '../../node_modules/vuetify/src/stylus/settings/_variables'
  
  .markup
    background: rgba(0, 0, 0, .03)
    margin: 2rem -1rem
    font-size: 1.2rem
    transition: .3s ease-out
    
    &:hover
      background: rgba(0, 0, 0, .1)
    
    pre, code
      background: transparent
      width: 100%
      display: block
      
    pre
      padding: 2rem
      
    code
      font-weight: 600 !important
      
      &:before
        display: none
    
    .hljs
      color: $theme.secondary
      
      .hljs-tag
        color: $purple.lighten-1
      
      .hljs-attr, .hljs-keyword
        color: $theme.primary
        
      .hljs-string, .hljs-literal
        color: $red.lighten-2
</style>