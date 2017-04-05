<template lang="pug">
  doc-view(id="data-tables-view" v-bind:doc="doc")
    component-example(header="Standard" file="tables/1" v-bind:data="$data")
    component-example(header="Selectable with header tooltip" file="tables/2" v-bind:data="$data")
    component-example(header="Title with actions and editing" file="tables/3" v-bind:data="$data")
</template>

<script>
  export default {
    data () {
      const data = {
        test: false,
        search: null,
        e3: null,
        doc: {
          title: 'Data tables',
          desc: ``,
          props: {
            'v-data-table': {
              params: [
                [
                  'headers',
                  'Array',
                  '[]',
                  'The array of headers'
                ],
                [
                  'header-text',
                  'String',
                  'text',
                  'If using an object, the text value for the header'
                ],
                [
                  'hide-actions',
                  'Boolean',
                  'False',
                  'Hide the table actions'
                ],
                [
                  'items',
                  'Array',
                  '[]',
                  'The array of table rows'
                ],
                [
                  'item-value',
                  'String',
                  'value',
                  'When using a selectable row, used for determining the item value for highlight.'
                ],
                [
                  'rows-per-page-items',
                  'Array',
                  '[5, 15, 25, { text: "All", value: -1 }]',
                  'When using a selectable row, used for determining the item value for highlight.'
                ],
                [
                  'select-all',
                  'Boolean',
                  'False',
                  'Adds header row select all radio.'
                ],
                [
                  'search',
                  'String',
                  '',
                  'The search model for filtering results'
                ],
                [
                  'filter',
                  'Function',
                  `(val, search) => {
                    return ['undefined', 'boolean'].indexOf(typeof val) === -1 &&
                      val.toString().toLowerCase().indexOf(search) !== -1
                  }`,
                  'The filtering method for search'
                ]
              ],
              model: {
                types: ['Array'],
                default: 'undefined',
                description: 'Used for mutating the items array when selecting items.'
              }
            }
          },
          slots: {
            headers: {
              params: [
                [
                  'scope[headers]',
                  'The scoped slot for modifying headers.'
                ]
              ]
            },
            items: {
              params: [
                [
                  'scope[items]',
                  'The scoped slot for templating the row display.'
                ]
              ]
            }
          },
          events: {
            'v-data-table': {
              events: [
                ['input', 'Array', 'Array will contain selected rows'],
              ]
            },
            'v-edit-dialog': {
              events: [
                ['open', '-', 'Edit dialog opened'],
                ['close', '-', 'Edit dialog closed'],
                ['cancel', '-', 'Cancel button was clicked'],
                ['save', '-', 'Save button was clicked'],
              ]
            },
          }
        },
        headers: [
          {
            text: 'Dessert (100g serving)',
            left: true,
            sortable: false
          },
          { text: 'Calories' },
          { text: 'Fat (g)' },
          { text: 'Carbs (g)' },
          { text: 'Protein (g)' },
          { text: 'Sodium (mg)' },
          { text: 'Calcium (%)' },
          { text: 'Iron (%)' }
        ],
        items: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            sodium: 87,
            calcium: '14%',
            iron: '1%'
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            sodium: 129,
            calcium: '8%',
            iron: '1%'
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            sodium: 337,
            calcium: '6%',
            iron: '7%'
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            sodium: 413,
            calcium: '3%',
            iron: '8%'
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            sodium: 327,
            calcium: '7%',
            iron: '16%'
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            sodium: 50,
            calcium: '0%',
            iron: '0%'
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            sodium: 38,
            calcium: '0%',
            iron: '2%'
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            sodium: 562,
            calcium: '0%',
            iron: '45%'
          },
          {
            value: false,
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            sodium: 326,
            calcium: '2%',
            iron: '22%'
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            sodium: 54,
            calcium: '12%',
            iron: '6%'
          }
        ]
      }

      data.items2 = data.items.concat()
      data.items3 = data.items.concat()

      return data
    },

    mounted () {
      this.$emit('view', this.meta())
    },

    preFetch () {
      return this.methods.meta()
    },

    methods: {
      saving () {
        console.log('I saved!')
      },
      meta () {
        return {
          title: 'Data tables | Vuetify.js',
          h1: 'Data tables',
          description: 'Data tables component for Vuetify Framework',
          keywords: 'vuetify, components, data tables'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #data-tables-view
    max-width: 1200px
</style>
