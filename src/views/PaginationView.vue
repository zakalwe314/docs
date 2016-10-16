<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(header="Short")
      div
        v-pagination(
          :length="5",
          v-model="page"
        )
    component-example(header="Long")
      div
        v-pagination(
          :length="15",
          v-model="page2"
        )
    component-example(header="Round")
      div
        v-pagination(
          :length="4",
          v-model="page3"
          circle
        )
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Pagination',
          desc: 'Soon',
          types: [
            'comp'
          ],
          params: []
        },
        page: 3,
        page2: 7,
        page3: 4
      }
    },

    mounted () {
      this.$emit('view', 'Pagination')
    }
  }
</script>