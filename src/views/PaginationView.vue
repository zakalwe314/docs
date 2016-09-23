<template lang="pug">
  div.view
    section
      section-header Introduction
      component-chip(type="comp")
      section-text Soon
    section
      section-header Examples
      component-header Short
      component-example
        div
          v-pagination(
            :length="5",
            v-model="page"
          )
      component-header Long
      component-example
        div
          v-pagination(
            :length="15",
            v-model="page2"
          )
      component-header Round
      component-example
        div
          v-pagination(
            :length="4",
            v-model="page3"
            circle
          )
    component-options
</template>

<script>
  export default {
    data () {
      return {
        page: 3,
        page2: 7,
        page3: 4
      }
    },

    mounted () {
      this.$emit('view', 'Pagination')
    }
  }
</script>