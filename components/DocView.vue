<template lang="pug">
  div.view
    div
      section-def
        dt(slot="title" v-html="doc.title")
        dd(slot="desc" v-html="doc.desc")
    slot(name="documentation" class='documentation-section')
    slot(name="end")
</template>

<script>
  export default {
    data () {
      return {
        propHeaders: ['Option', 'Type(s)', 'Default', 'Description'],
        slotHeaders: ['Name', 'Description'],
        functionalHeaders: ['Name', 'Class'],
        eventHeaders: ['Name', 'Type(s)', 'Description'],
      }
    },

    props: ['doc']
  }
</script>

<style lang="stylus">
  // @import '~assets/stylus/settings/_variables'

  .view
    margin-bottom: 3rem
    max-width: 1024px

  .version
    margin-top: -1rem
    margin-bottom: 1rem
    text-align: right

  .chip--component
    margin-right: 1rem

  dt
    font-weight 900

  .section-text
    // line-height: $line-height-root * 1.5
</style>
