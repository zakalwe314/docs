<template lang="pug">
  div.view
    section
      section-header Introduction
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
  dt
    font-weight 900
</style>