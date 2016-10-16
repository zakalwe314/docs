<template lang="pug">
  h2.secondary--text
    slot
</template>

<style lang="stylus"
       scoped
>
  h2
    letter-spacing: 1px
    text-align: left !important
    margin: 2rem 0
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
</style>