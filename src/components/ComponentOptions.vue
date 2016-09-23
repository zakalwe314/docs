<template lang="pug">
  section
    section-header Options
    table.table--component
      thead
        tr
          th Option
          th Effect
          th Remarks
      tbody
        tr(v-for="option in items")
          td(
            v-for="td in option",
            v-html="td"
          )
</template>

<script>
  export default {
    props: {
      items: Array,
      default: () => []
    }
  }
</script>

<style lang="stylus">
  .table
    &--component
      margin: 0 auto 5rem
      max-width: 600px
</style>