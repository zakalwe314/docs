<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(header="Short" file="pagination/1")
      v-pagination(
        v-bind:length.number="5",
        v-model="page"
      )
    component-example(header="Long" file="pagination/2")
      v-pagination(
        v-bind:length.number="15",
        v-model="page2"
      )
    component-example(header="Round" file="pagination/3")
      v-pagination(
        v-bind:length.number="4",
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
          desc: 'The <code>v-pagination</code> component is used to separate long sets of data so that it is easier for a user to consume information. Depending on the length provided, the pagination component will automatically scale. To maintain the current page, simply supply a v-model attribute.',
          props: {
            'v-pagination': {
              params: [
                [
                  'length',
                  'Number',
                  '0',
                  'The length of the paginator',
                ],
                [
                  'round',
                  'Boolean',
                  'False',
                  'Applies the pagination--round class',
                ],
              ],
              model: {
                types: ['Number'],
                default: 0
              }
            }
          }
        },
        page: 3,
        page2: 7,
        page3: 4
      }
    },

    mounted () {
      this.$emit('view', this.meta())
    },

    preFetch () {
      return this.methods.meta()
    },

    methods: {
      meta () {
        return {
          title: 'Pagination Component | Vuetify.js',
          h1: 'Pagination',
          description: 'Pagination component for Vuetify Framework',
          keywords: 'vuetify, pagination, components'
        }
      }
    }
  }
</script>