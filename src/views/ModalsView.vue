<template lang="pug">
  section
    v-row
      v-col(xs4)
        v-btn(
          primary,
          v-modal:modal=""
        ) Regular
        v-modal(id="modal")
          p Hello
      v-col(xs4)
        v-btn(
          secondary, 
          v-modal:modal2=""
        ) Bottom
        v-modal(
          id="modal2",
          bottom
        )
          p Hello
</template>

<script>
  export default {
    name: 'modals-view',

    mounted () {
      this.$emit('view', 'Modals')
    }
  }
</script>