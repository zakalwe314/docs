<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example
      v-btn(
          primary,
          v-modal:modal=""
        ) Regular
        v-modal(id="modal")
          p Hello
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

    data () {
      return {
        doc: {
          intro: 'Soon',
          types: [
            'comp', 'directive'
          ],
          params: []
        }
      }
    },

    mounted () {
      this.$emit('view', 'Modals')
    }
  }
</script>