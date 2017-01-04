<template lang="pug">
  div(class="component-example")
    component-header(@source="source") {{ header }}
    slot(name="details")
    v-collapsible(ref="source")
      li
        v-collapsible-body(ref="body" v-on:click.native="copyMarkup")
          slot(name="markup")
          v-slide-x-transition
            span(class="component-example-copied" v-if="copied") Copied
    div(class="component-example__container")
      slot
    input(
      ref="copy" 
      v-if="copy" 
      class="component-example-copy" 
      v-model="copy"
    )
</template>

<script>
  export default {
    props: ['header'],

    data () {
      return {
        copy: '',
        copied: false
      }
    },

    methods: {
      copyMarkup () {
        this.copy = this.$slots.markup[0].elm.innerText
        this.$nextTick(() => {
          this.$refs.copy.select()
          document.execCommand('copy')
          this.copy = ''
          this.copied = true
          setTimeout(() => this.copied = false, 2000)
        })
      },

      source () {
        this.$vuetify.bus.pub(
          `collapse:toggle:${this.$refs.source._uid}`,
          Number(this.$refs.body._uid)
        )
      }
    }
  }
</script>

<style lang="stylus">
  @import '../stylus/settings/_variables'
  
  .component-example
    .collapsible, .collapsible__body
      border: none
      box-shadow: none
      background: transparent
      
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