<template lang="pug">
  doc-view(v-bind:doc="doc" id="table-view")
    component-example(header="Default" file="tables/1" v-bind:data="example")
    component-example(header="Inside Card" file="tables/2" id="table-overflow" v-bind:data="example")
    component-example(header="With Dropdown" file="tables/3" v-bind:data="example")
</template>

<script>
  export default {
    name: 'table-view',

    data () {
      return {
        doc: {
          title: 'Table',
          desc: 'Tables are useful for displaying large rows of data. This is very common in CRUD (Create Read Update Delete) applications.',
          functional: {
            'v-table-overflow': {
              params: [
                ['v-table-overflow', '.table__overflow']
              ]
            }
          }
        },
        example: {
          modal: false,
          headers: ['ID', 'Name', 'Email'],
          items: [
            ['1', 'Thrall', 'thrall@blizzard.com'],
            ['2', 'Jaina', 'jaina@blizzard.com'],
            ['3', 'Grom', 'grom@blizzard.com']
          ]
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
          title: 'Tables | Vuetify.js',
          h1: 'Tables',
          description: 'Table styles for the Vuetify Framework',
          keywords: 'vuetify, tables'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #table-view
    .component-example__container
      > div
        width: 100%
        
    #table-overflow
      .card
        width: 500px
        
        table
          width: 500px
</style>