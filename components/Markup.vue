<template lang="pug">
  div(class="markup" v-bind:data-lang="lang")
    pre
      code(v-bind:class="lang" ref="markup")
        slot
    div(class="markup__copy")
      v-icon(v-on:click.native="copyMarkup") content_copy
    v-slide-x-transition
      span(class="component-example-copied" v-if="copied") Copied
    textarea(
      ref="copy" 
      v-if="copy" 
      class="component-example-copy" 
      v-model="copy"
    )
</template>

<script>
  import highlight from 'highlight.js/lib/highlight.js'
  import highlightBash from 'highlight.js/lib/languages/bash'
  import highlightStylus from 'highlight.js/lib/languages/stylus'
  import highlightXML from 'highlight.js/lib/languages/xml'
  import highlightJS from 'highlight.js/lib/languages/javascript'
  import highlightScss from 'highlight.js/lib/languages/scss'

  highlight.registerLanguage('bash', highlightBash)
  highlight.registerLanguage('stylus', highlightStylus)
  highlight.registerLanguage('sass', highlightScss)
  highlight.registerLanguage('html', highlightXML)
  highlight.registerLanguage('js', highlightJS)

	export default {
    name: 'markup',

    data () {
      return {
        copy: '',
        copied: false,
        content: ''
      }
    },

    props: {
      lang: String,
    },

		mounted () {
      highlight.highlightBlock(this.$refs.markup)
		},

    methods: {
      copyMarkup () {
        this.copy = this.$refs.markup.innerText

        this.$nextTick(() => {
          this.$refs.copy.select()
          document.execCommand('copy')
          this.copy = ''
          this.copied = true
          setTimeout(() => this.copied = false, 2000)
        })
      },
    }
	}
</script>

<style lang="stylus">
  @import '~assets/stylus/settings/_variables'
      
  .markup
    font-size: 1.2rem
    transition: .3s ease-out
    box-shadow: none
    display: flex
    padding: 3rem 2rem
    background: rgba(#000, 0.04)
    border-radius: 2px
    position: relative
    align-items: center
    
    &__copy
      position: absolute
      right: 1rem
      top: 1rem
      cursor: pointer
      width: 25px
      height: 25px
      z-index: 2
      
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

    .icon
      position: absolute
      right: 0
      transition: opacity .2s ease-in
      font-size: 1.5rem
      opacity: 0
      top: 0
      cursor: pointer
      width: 50px
      height: 50px
      z-index: 4
 
    &:hover
      .icon
        opacity: 1
        
    pre, code
      background: transparent
      width: 100%
      
    code
      font-weight: 600 !important
      position: relative
      box-shadow: none
      overflow-x: auto
      overflow-y: hidden
      word-break: break-word
      display: flex
      flex-wrap: wrap
      align-items: center
      
      > div
        width: 100%
        
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
        
  .tabs
    .markup
      max-width: 100%
</style>