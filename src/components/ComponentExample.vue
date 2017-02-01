<template lang="pug">
  div(class="component-example")
    component-header(@source="source") {{ header }}
    slot(name="details")
    v-expansion-panel(ref="source" class="component-example__expansion-panel")
      v-expansion-panel-content(ref="body" v-bind:active="active" v-on:active="active = arguments[0]")
        markup(lang="html" v-if="booted")
          div(v-html="content" ref="markup")
    div(class="component-example__container")
      slot
</template>

<script>
  export default {
    name: 'component-example',

    props: ['header', 'file'],

    data () {
      return {
        active: false,
        booted: false
      }
    },

    methods: {
      toggle () {
        this.active = !this.active
      },
      
      source () {
        if (this.booted) {
          return this.toggle()
        }

        const xmlhttp = new XMLHttpRequest()
        var vm = this

        xmlhttp.open('GET', `/public/examples/${this.file}.html`, true)

        xmlhttp.onreadystatechange = function () {
          if(xmlhttp.status == 200 && xmlhttp.readyState == 4) {
            vm.content = xmlhttp.responseText.replace(/</g, '&lt;').replace(/>/g, '&gt;')
            vm.booted = true
            vm.$nextTick(() => {
              vm.toggle()
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
    .component-example__expansion-panel
        box-shadow: none
        background: transparent
        
        li
          border: none
        
      .expansion-panel__body
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