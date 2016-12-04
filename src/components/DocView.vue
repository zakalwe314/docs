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
    section
      section-header Events
      p(class="section-text") Coming Soon
</template>

<script>
  export default {
    props: ['doc']
  }
</script>