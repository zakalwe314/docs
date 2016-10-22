<template lang="pug">
  div.view Quick
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', 'Quick Start')
    }
  }
</script>