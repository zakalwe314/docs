<template lang="pug">
  h2.secondary--text
    slot
</template>

<style lang="stylus"
       scoped
>
  h2
    letter-spacing: .4rem
    text-align: left !important
    margin: 2rem
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    font-size: 2rem
    text-transform: uppercase
</style>