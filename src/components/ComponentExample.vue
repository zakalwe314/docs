<template lang="pug">
  div(class="component-example")
    component-header(@source="source") {{ header }}
    slot(name="details")
    v-collapsible(ref="source")
      li
        v-collapsible-body(ref="body")
          slot(name="markup")
    div(class="component-example__container")
      slot
</template>

<script>
  export default {
    props: ['header'],

    methods: {
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