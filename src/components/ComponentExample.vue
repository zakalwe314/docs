<template lang="pug">
  div(class="component-example")
    component-header(@source="source") {{ header }}
    slot(name="details")
    v-collapsible(ref="source" class="component-example__collapsible")
      li
        v-collapsible-body(ref="body")
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
        booted: false
      }
    },

    methods: {
      toggleCollapsible () {
        this.$store.commit('vuetify/COLLAPSIBLE_TOGGLE', { 
          id: this.$refs.source._uid,
          bodyId: Number(this.$refs.body._uid)
        })
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
        box-shadow: none
        background: transparent
        
        li
          border: none
        
      .collapsible__body
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