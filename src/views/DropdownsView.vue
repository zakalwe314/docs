<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(header="On Click")
      v-btn(
        primary
        v-dropdown:dropdown=""
      ) Dropdown
      v-dropdown(
        id="dropdown",
        v-bind:items="items"
      )
      v-btn(
        secondary
        v-dropdown:dropdown3=""
      ) With Labels
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
    component-example(header="On Hover")
      v-btn(
        secondary,
        v-dropdown:dropdown2="options"
      ) Dropdown
      v-dropdown(
        id="dropdown2",
        v-bind:items="items",
        right
      )
    component-example(header="Menus")
      v-card
        v-card-title(class="blue")
          v-card-title-text
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
        v-card-text Lorem Ipsum
      v-card
        v-card-title(class="blue")
          v-col-spacer
          v-card-title-actions
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
      markup
        |&lt;v-btn v-dropdown:dropdown="options"&gt;
        |   ...
        |&lt;/v-btn&gt;
        |&lt;v-dropdown id="dropdown" v-bind:items="items"&gt;&lt;/v-dropdown&gt;
      markup
        |data () {
        |   return {
        |     options: { hover: true },
        |     items: [{ text: 'Link', href: '#!' }]
        |   }
        |}
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', 'Dropdowns')
    },

    data () {
      return {
        doc: {
          title: 'Dropdown',
          desc: `Soon`,
          types: [
            'comp', 'slot', 'directive'
          ],
          params: []
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
        ],
        options: { hover: true }
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