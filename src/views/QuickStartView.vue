<template lang="pug">
  div.view
    section
      section-text
        strong(slot="title") Getting Started
        p(slot="desc") Using one of Vuetify's Vue CLI packages (based on the official examples), get your project kick started in no time.

    
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', 'Quick Start')
    }
  }
</script>