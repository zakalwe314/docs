<template lang="pug">
  section
    v-row
      v-grid(xs12)
        v-table(v-bind:items="items")
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            name: 'John',
            edit: 'Edit'
          },
          {
            name: 'John',
            edit: 'Edit'
          },
        ]
      }
    }
  }
</script>