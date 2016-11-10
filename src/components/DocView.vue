<template lang="pug">
  div.view
    section
      section-text
        dt(slot="title" v-html="doc.title")
        dd(slot="desc" v-html="doc.desc")
    section
      section-header Examples
      slot
    section
      section-header Markup
      slot(name="markup")
    section
      section-header Parameters
      component-parameters(v-bind:params="doc.params")
</template>

<script>
  export default {
    props: ['doc']
  }
</script>

<style lang="stylus">
  .view
    margin-bottom: 3rem
    
    .chip--component
      margin-right: 1rem
  dt
    font-weight 900
</style>