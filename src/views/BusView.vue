<template lang="pug">
  div(class="view")
    section
      section-text
        dt(slot="title") Bus
        dd(slot="desc") Coming Soon
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', 'Bus')
    }
  }
</script>