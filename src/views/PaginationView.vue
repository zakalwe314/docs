<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(header="Short" file="pagination/1" v-bind:data="example")
    component-example(header="Long" file="pagination/2" v-bind:data="example")
    component-example(header="Round" file="pagination/3" v-bind:data="example")
    component-example(header="Disabled" file="pagination/4" v-bind:data="example")
</template>

<script>
  export default {
    data () {
      return {
        example: {
          page: 1,
          page2: 4,
          page3: 2
        },
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
                  'circle',
                  'Boolean',
                  'False',
                  'Shape pagination elements as circles',
                ],
                [
                  'length',
                  'Number',
                  '0',
                  'Defines number of pages',
                ],
              ],
              model: {
                types: ['Number'],
                default: 0,
                description: 'Current selected page'
              }
            }
          },
          events: {
            'v-pagination': {
              events: [
                ['input', 'Number', 'Current page'],
              ]
            },
          }
        }
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
