<template lang="pug">
  v-card.my-5
    v-card-row
      v-card-title Nutrition
        v-spacer
        v-text-field(
          label="Search"
          single-line
          append-icon="search"
          hide-details
          v-model="search"
        )
    v-data-table(
      v-bind:headers="headers"
      v-model="items"
      v-bind:search="search"
    )
      template(slot="items" scope="props")
        td
          v-edit-dialog(
            class="text-xs-left"
            @open="props.item._name = props.item.name"
            @cancel="props.item.name = props.item._name"
            @save="saving"
            lazy
          ) {{ props.item.name }}
            v-text-field(
              slot="input"
              label="Edit"
              v-bind:value="props.item.name"
              v-on:change="val => props.item.name = val"
              single-line
              counter
            )
        td {{ props.item.calories }}
        td {{ props.item.fat }}
        td {{ props.item.carbs }}
        td {{ props.item.protein }}
        td {{ props.item.sodium }}
        td {{ props.item.calcium }}
        td
          v-edit-dialog(
            @open="props.item._iron = props.item.iron"
            @cancel="props.item.iron = props.item._iron"
            @save="saving"
            large
            lazy
          )
            div.text-xs-right {{ props.item.iron }}
            div(slot="input").mt-3.title Update Iron
            v-text-field(
              slot="input"
              label="Edit"
              v-bind:value="props.item.iron"
              v-on:blur="val => props.item.iron = val"
              single-line
              counter
              autofocus
            )
</template>

<script>
  export default {
    data () {
      return {
        test: false,
        search: null,
        doc: {
          title: 'Data tables',
          desc: ``,
          props: {
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