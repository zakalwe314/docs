<template lang="pug">
  div
    component-header {{ header }}
    div(
      class="component-example"
    )
      slot
</template>

<script>
  export default {
    props: ['header']
  }
</script>

<style lang="stylus">
  .component-example
    display: flex
    justify-content: center
    padding: 2rem
    background: rgba(0, 0, 0, .03)
    margin-bottom: 5rem
    flex-wrap: wrap
</style>