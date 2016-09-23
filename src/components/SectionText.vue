<template lang="pug">
  div.section-text
    slot
</template>

<style lang="stylus">
  .section-text
    font-size: .9rem
    font-weight: 300
    min-width: 50%
    max-width: 700px
    text-align: justify
    margin: 2rem
    line-height: 1.5rem
      
    p
      margin-bottom: 1rem !important
      
      strong
        font-weight: 900
</style>