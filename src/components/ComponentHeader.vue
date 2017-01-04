<template lang="pug">
  h6.component-header
    div(class="text-xs-right")
      span(v-tooltip:top="{ html: 'View source' }" v-on:click="$emit('source')")
        v-icon code
    div
      slot
</template>

<style lang="stylus">
  .component-header
    .icon
      cursor: pointer
      color: rgba(#000, .5)
      transition: color .3s ease-out
      will-change: color
      
      &:hover
        color: rgba(#000, .9)
</style>