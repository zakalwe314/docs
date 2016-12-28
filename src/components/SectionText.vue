<template lang="pug">
  div(class="section-text")
    slot
</template>

<style lang="stylus">
  .section-text
    min-width: 50%
    max-width: 700px
    text-align: justify
    margin-bottom: 1rem
    
    &--def
      padding-left: 1rem
      
    p
      margin-bottom: 1rem !important
      
      strong
        font-weight: 900
</style>