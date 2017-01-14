<template lang="pug">
  doc-view(v-bind:doc="doc" id="table-view")
    component-example(header="Default" file="tables/1")
      table
        thead
          tr
            th
            th(v-for="header in headers" v-text="header")
            th
        tbody
          template(v-for="(item, index) in items")
            tr
              td
                v-checkbox(v-bind:id="'checkbox' + index" filled class="text-xs-center")
              td(v-for="data in item" v-text="data")
              td
                v-btn(icon)
                  v-icon edit
    component-example(header="Inside Card" file="tables/2" id="table-overflow")
      section-text(slot="details") Cards allow tables to overflow-x, creating a scroll-bar if the content is too wide.
      v-card
        table
          thead
            tr
              th
              th(v-for="header in headers" v-text="header")
              th
          tbody
            template(v-for="(item, index) in items")
              tr
                td
                  v-checkbox(v-bind:id="'checkbox2' + index" filled class="text-xs-center")
                td(v-for="data in item" v-text="data")
                td
                  v-btn(icon)
                    v-icon edit
    component-example(header="With Dropdown" file="tables/3")
      table
        thead
          tr
            th
            th(v-for="header in headers" v-text="header")
            th
        tbody
          template(v-for="(item, index) in items")
            tr
              td
                v-checkbox(v-bind:id="'checkbox3' + index" filled class="text-xs-center")
              td(v-for="data in item" v-text="data")
              td
                v-btn(v-dropdown="{ value: 'dropdown3-' + index }") Options
                v-dropdown(
                  v-bind:id="'dropdown3-' + index"
                  transition="v-slide-y-transition"
                  origin="top center"
                  top right
                )
                  v-dropdown-item(v-bind:item="{ text: 'Edit', href: 'javascript:;' }")
                  v-dropdown-item(v-bind:item="{ text: 'Reset Password', href: 'javascript:;' }")
                  v-dropdown-item(v-bind:item="{ text: 'Delete', href: 'javascript:;' }")
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
        headers: ['ID', 'Name', 'Email'],
        items: [
          ['1', 'Thrall', 'thrall@blizzard.com'],
          ['2', 'Jaina', 'jaina@blizzard.com'],
          ['3', 'Grom', 'grom@blizzard.com']
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