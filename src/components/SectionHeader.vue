<template lang="pug">
  h2(class="secondary--text primary--after")
    slot
</template>

<style lang="stylus"
       scoped
>
  h2
    letter-spacing: 2px
    text-align: left !important
    margin: 4rem 0
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    position: relative
    padding-bottom: .5rem
    
    &:after
      content: ''
      position: absolute
      left: 0
      bottom: 0
      width: 100px
      height: 3px
</style>