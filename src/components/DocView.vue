<template lang="pug">
  div.view
    section
      section-header Introduction
      component-type(
        v-for="type in doc.types"
        v-bind:type="type"
      )
      section-text(v-html="doc.intro")
    section
      section-header Examples
      slot  
    section
      section-header Parameters
      component-parameters(v-bind:params="doc.params")
</template>

<script>
  export default {
    props: ['doc']
  }
</script>