<template lang="pug">
  dl.section-text
    slot(name="title")
    slot(name="desc")
</template>

<style lang="stylus">
  .section-text
    min-width: 50%
    max-width: 700px
    text-align: justify
    margin-bottom: 1rem
      
    p
      margin-bottom: 1rem !important
      
      strong
        font-weight: 900
</style>