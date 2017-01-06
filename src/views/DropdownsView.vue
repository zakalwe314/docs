<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(header="On Click" file="dropdowns/1")
      v-btn(
        class="primary white--text"
        v-dropdown:dropdown=""
      ) Click Dropdown
      v-dropdown(
        id="dropdown"
        v-bind:items="items"
      )
      v-btn(
        class="secondary white--text"
        v-dropdown:dropdown3=""
      ) Click With Labels
      v-dropdown(
        id="dropdown3"
      )
        li
          a(href="#!", class="dropdown__item")
            | Profile
            v-chip(label, class="teal white--text right", small) new
        li
          a(href="#!", class="dropdown__item")
            span(v-badge:2="") Notifications
        li
          a(href="#!", class="dropdown__item")
            | Logout
            v-icon(class="secondary--text right") cloud_off
    component-example(header="On Hover" file="dropdowns/2")
      v-btn(
        class="primary white--text"
        v-dropdown:dropdown2=""
      ) Hover Dropdown
      v-dropdown(
        id="dropdown2"
        v-bind:items="items"
        right
        hover
      )
      v-btn(
        class="secondary white--text"
        v-dropdown:dropdown4=""
      ) Hover With Labels
      v-dropdown(
        id="dropdown4"
        hover
      )
        li
          a(href="#!", class="dropdown__item")
            | Profile
            v-chip(label, class="teal white--text right", small) new
        li
          a(href="#!", class="dropdown__item")
            span(v-badge:2="") Notifications
        li
          a(href="#!", class="dropdown__item")
            | Logout
            v-icon(class="secondary--text right") cloud_off
    component-example(header="Menus" file="dropdowns/3")
      v-card
        v-card-row(class="blue white--text")
          v-btn(
              icon
              v-dropdown:menu=""
          )
            v-icon(
              class="white--text"
            ) more_vert
          v-dropdown(
            id="menu"
            v-bind:items="items"
          )
          v-card-title Menu
        v-card-text Lorem Ipsum
      v-card
        v-card-row(class="blue white--text")
          v-card-title Menu
          v-spacer
          v-btn(
            icon
            v-dropdown:menu2=""
          )
            v-icon(
              class="white--text"
            ) more_vert
          v-dropdown(
            id="menu2"
            v-bind:items="items",
            right
          )
        v-card-text Lorem Ipsum
    div(slot="markup")
      markup(lang="js")
        |data () {
        |   return {
        |     items: [{ text: 'Link', href: '#!' }]
        |   }
        |}
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Dropdown',
          desc: `The <code>v-dropdown</code> component utilizes the v-dropdown directive to link itself to another element. Once binded, clicking the element, or by hovering (if using the <code>hover</code> parameter), the dropdown will reposition absolutely positioned on top of the selected activator.`,
          props: {
            'v-dropdown': {
              params: [
                [
                  'id',
                  'String',
                  'Required',
                  'Sets the id of the dropdown'
                ],
                [
                  'items',
                  'Object',
                  '[]',
                  'Optionally pass array of items'
                ],
                [
                  'right',
                  'Boolean',
                  'False',
                  'Open dropdown from right'
                ]
              ]
            },
            'v-dropdown-item': {
              params: [
                [
                  'item',
                  'Object',
                  `{ href: '#!', text: ''`,
                  'The invididual items'
                ]
              ]
            }
          },
          slots: {
            'v-dropdown': {
              default: true
            }
          }
        },
        items: [
          {
            href: '#!',
            text: 'Click Me'
          },
          {
            href: '#!',
            text: 'Click Me'
          },
          {
            href: '#!',
            text: 'Click Me'
          },
          {
            href: '#!',
            text: 'Click Me 2'
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
      meta () {
        return {
          title: 'Dropdown Component | Vuetify.js',
          h1: 'Dropdowns',
          description: 'Dropdown component for Vuetify Framework',
          keywords: 'vuetify, dropdowns, components'
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .btn
    margin: 1rem
    
  .component-example
    .card
      flex: 1
      margin: 1rem
</style>