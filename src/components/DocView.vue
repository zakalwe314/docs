<template lang="pug">
  div.view
    div
      section-def
        dt(slot="title" v-html="doc.title")
        dd(slot="desc" v-html="doc.desc")
    section
      section-header Examples
      slot
    section(v-if="doc.props || doc.slots || doc.events || doc.functional")
      section-header API
      v-tabs
        v-tabs-tabs
          v-tab(v-bind:item="{ href: '#props', text: 'Props' }" v-if="doc.props")
          v-tab(v-bind:item="{ href: '#slots', text: 'Slots' }" v-if="doc.slots")
          v-tab(v-bind:item="{ href: '#events', text: 'Bus Events' }" v-if="doc.events")
          v-tab(v-bind:item="{ href: '#functional', text: 'Functional' }" v-if="doc.functional")
        v-tabs-items
          v-tabs-item(id="props" v-if="doc.props")
            v-card
              v-card-text
                component-parameters(v-bind:params="doc.props", v-bind:headers="propHeaders")
          v-tabs-item(id="slots" v-if="doc.slots")
            v-card
              v-card-text
                component-parameters(v-bind:params="doc.slots", v-bind:headers="slotHeaders")
          v-tabs-item(id="events" v-if="doc.events")
          v-tabs-item(id="functional" v-if="doc.functional")
            v-card
              v-card-text
                component-parameters(v-bind:params="doc.functional" v-bind:headers="functionalHeaders")
    slot(name="end")
</template>

<script>
  export default {
    data () {
      return {
        propHeaders: ['Option', 'Type(s)', 'Default', 'Description'],
        slotHeaders: ['Name', 'Description'],
        functionalHeaders: ['Name', 'Class']
      }
    },

    props: ['doc']
  }
</script>

<style lang="stylus">
  @import '../stylus/settings/_variables'
  
  .view
    margin-bottom: 3rem
    max-width: 900px
  
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