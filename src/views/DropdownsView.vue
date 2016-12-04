<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(header="On Click")
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
    component-example(header="On Hover")
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
    component-example(header="Menus")
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
      markup(lang="xml")
        |&lt;v-btn v-dropdown:dropdown&gt;
        |   ...
        |&lt;/v-btn&gt;
        |&lt;v-dropdown id="dropdown" v-bind:items="items"&gt;&lt;/v-dropdown&gt;
        |&nbsp;
        |&lt;v-btn v-dropdown:dropdown2&gt;
        |   ...
        |&lt;/v-btn&gt;
        |&lt;v-dropdown id="dropdown2" v-bind:items="items" hover&gt;&lt;/v-dropdown&gt;
      markup(lang="js")
        |data () {
        |   return {
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
          stage: 'iter',
          title: 'Dropdown',
          desc: `The <code>v-dropdown</code> component utilizes the v-dropdown directive to link itself to another element. Once binded, clicking the element, or by hovering (if using the <code>hover</code> parameter), the dropdown will reposition absolutely positioned on top of the selected activator.`,
          types: [
            'comp', 'slot', 'directive'
          ],
          params: [
            [
              '<code>v-dropdown</code>',
              '',
              'Base component'
            ],
            [
              '<code>id</code>',
              'Sets the id of the dropdown',
              'Required: true'
            ],
            [
              '<code>items</code>',
              'Optionally pass array of items',
              'Type: object'
            ],
            [
              '<code>right</code>',
              'Open dropdown from right',
              'Default: false'
            ]
          ]
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