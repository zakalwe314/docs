<template lang="pug">
  div(class="component-example")
    component-header(@source="source") {{ header }}
    slot(name="details")
    v-collapsible(ref="source" class="component-example__collapsible")
      li
        v-collapsible-body(ref="body" v-on:click.native="copyMarkup")
          markup(lang="html" v-if="booted")
            div(v-html="content" ref="markup")
          v-slide-x-transition
            span(class="component-example-copied" v-if="copied") Copied
          v-icon content_copy
    div(class="component-example__container")
      slot
    textarea(
      ref="copy" 
      v-if="copy" 
      class="component-example-copy" 
      v-model="copy"
    )
</template>

<script>
  export default {
    name: 'component-example',

    props: ['header', 'file'],

    data () {
      return {
        booted: false,
        copy: '',
        copied: false,
        content: ''
      }
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

      toggleCollapsible () {
        this.$vuetify.bus.pub(
          `collapse:toggle:${this.$refs.source._uid}`,
          Number(this.$refs.body._uid)
        )
      },

      source () {
        if (this.booted) {
          return this.toggleCollapsible()
        }

        const xmlhttp = new XMLHttpRequest()
        var vm = this

        xmlhttp.open('GET', `/public/examples/${this.file}.html`, true)

        xmlhttp.onreadystatechange = function () {
          if(xmlhttp.status == 200 && xmlhttp.readyState == 4) {
            vm.content = xmlhttp.responseText.replace(/</g, '&lt;').replace(/>/g, '&gt;')
            vm.booted = true
            vm.$nextTick(() => {
              vm.toggleCollapsible()
            })
          }
        }
        xmlhttp.send()
      }
    }
  }
</script>

<style lang="stylus">
  @import '../stylus/settings/_variables'
  
  .component-example
    .component-example__collapsible
        border: none
        box-shadow: none
        background: transparent
        
      .collapsible__body
        border: none
        box-shadow: none
        background: transparent
        
      .collapsible__body
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
      
    &-copy
      opacity: 0
      position: absolute
      
    &-copied
      position: absolute
      right: 1rem
      bottom: .5rem
      font-size: 1rem
      font-weight: 700
      color: rgba(#000, 0.3)
      
    &__container
      display: flex
      justify-content: center
      align-items: center
      padding: 1rem 4rem
      margin: 0 -4rem 1rem
      flex-wrap: wrap
      transition: .3s ease-out
        
      @media screen and (max-width: $grid-breakpoints.sm)
        margin: 0 -1rem 1rem
        padding: 2rem 1rem
</style>