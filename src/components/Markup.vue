<template lang="pug">
  div(class="markup" v-bind:data-lang="lang")
    pre
      code(v-bind:class="lang" ref="markup" v-on:click="copyMarkup")
        div
          slot
    v-icon content_copy
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
  import hljs from 'highlight.js/lib/highlight.js'

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
      hljs.highlightBlock(this.$refs.markup)
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
  @import '../stylus/settings/_variables'
      
  .markup
    font-size: 1.2rem
    transition: .3s ease-out
    box-shadow: none
    display: flex
    padding: 3rem 2rem
    background: rgba(#000, 0.04)
    border-radius: 2px
    cursor: pointer
    position: relative
    margin-bottom: 1rem
    align-items: center
    margin-bottom: 3rem
      
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
      right: 1rem
      transition: opacity .2s ease-in
      font-size: 1.5rem
      opacity: 0
      top: 1rem
 
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
      margin: 2rem 0
      max-width: 100%
</style>