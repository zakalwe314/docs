<template lang="pug">
  div.view
    section
      v-alert(error v-if="doc.stage === 'dev'") This component is still being developed and is subject to change. Any implementations <strong>should</strong> expect breaking changes before release.
      v-alert(success v-if="doc.stage === 'comp'") This component is complete. Any implementations <strong>should not</strong> expect breaking changes before release.
      v-alert(warning v-if="doc.stage === 'iter'") This component is nearly complete. It is still being iterated and tested. Any implementations <strong>could</strong> see breaking changes before release.
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