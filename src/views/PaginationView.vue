<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(header="Short")
      v-pagination(
        v-bind:length.number="5",
        v-model="page"
      )
    component-example(header="Long")
      v-pagination(
        v-bind:length.number="15",
        v-model="page2"
      )
    component-example(header="Round")
      v-pagination(
        v-bind:length.number="4",
        v-model="page3"
        circle
      )
    div(slot="markup")
      markup
        |&lt;v-pagination v-bind:length="length" v-model="page"&gt;&lt;/v-pagination&gt;
      markup
        |data () {
        |   return {
        |     length: 5,
        |     page: 1
        |   }
        |}
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          stage: 'comp',
          title: 'Pagination',
          desc: 'Coming Soon',
          types: [
            'comp'
          ],
          params: [
            [
              '<code>&lt;v-pagination&gt;</code>',
              '',
              'Base component'
            ],
            [
              '<code>length</code>',
              'The length of the paginator',
              'Default: 0'
            ],
            [
              '<code>round</code>',
              'Applies the pagination--round class',
              'Default: false'
            ],
            [
              '<code>model</code>',
              '',
              'Accepts Vue v-model'
            ],
          ]
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