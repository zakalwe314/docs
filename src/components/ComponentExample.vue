<template lang="pug">
  div
    component-header {{ header }}
    div(class="component-example")
      slot
</template>

<script>
  export default {
    props: ['header']
  }
</script>