<template lang="pug">
  div(
    class="component-example"
  )
    slot
</template>

<style lang="stylus">
  .component-example
    display: flex
    justify-content: center
    padding: 2rem
    background: rgba(0, 0, 0, .03)
    margin-bottom: 5rem
    
    @media screen and (max-width: 600px)
      flex-wrap: wrap
    
    > :not(.col--spacer)
      display: flex
      align-items: center
      justify-content: space-around
      margin-left: 2rem
      margin-right: 2rem
</style>