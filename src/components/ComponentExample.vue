<template lang="pug">
  div
    component-header {{ header }}
    slot(name="details")
    div(class="component-example")
      slot
</template>

<script>
  export default {
    props: ['header']
  }
</script>

<style lang="stylus">
  @import '../stylus/settings/_variables'
  
  .component-example
    display: flex
    justify-content: center
    align-items: center
    padding: 2rem 4rem
    background: rgba(0, 0, 0, .03)
    margin: 0 -4rem 1rem
    flex-wrap: wrap
    transition: .3s ease-out
    
    &:hover
      background: rgba(0, 0, 0, .06)
      
    @media screen and (max-width: $grid-breakpoints.sm)
      margin: 0 -1rem 1rem
      padding: 2rem 1rem
</style>