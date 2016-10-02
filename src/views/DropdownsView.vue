<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(header="On Click")
      div
        v-btn(
          primary
          v-dropdown:dropdown=""
        ) Dropdown
        v-dropdown(
          id="dropdown",
          v-bind:items="items"
        )
      div
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
      div
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
      div
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
      div
        v-card
          v-card-title(class="blue")
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
</template>

<script>
  export default {
    name: 'dropdowns-view',

    mounted () {
      this.$emit('view', 'Dropdowns')
    },

    data () {
      return {
        doc: {
          intro: `Soon`,
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
  .component-example
    > *
      flex-basis: 40%
</style>