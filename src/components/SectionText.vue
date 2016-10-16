<template lang="pug">
  dl.section-text
    slot(name="title")
    slot(name="desc")
</template>

<style lang="stylus">
  .section-text
    font-size: .9rem
    font-weight: 300
    min-width: 50%
    max-width: 700px
    text-align: justify
    margin: 2rem 0
    line-height: 1.5rem
      
    p
      margin-bottom: 1rem !important
      
      strong
        font-weight: 900
</style>