<template lang="pug">
  div.view
    section
      section-def
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
    section
      section-header Events
      p(class="section-text") Coming Soon
    slot(name="end")
</template>

<script>
  export default {
    props: ['doc']
  }
</script>

<style lang="stylus">
  @import '../stylus/settings/_variables'
  
  .view
    margin-bottom: 3rem
  
  .version
    margin-top: -1rem
    margin-bottom: 1rem
    text-align: right

  .breadcrumbs
    justify-content: flex-end
  
  .chip--component
    margin-right: 1rem
    
  dt
    font-weight 900
    
  .section-text
    line-height: $line-height-root * 1.5
</style>