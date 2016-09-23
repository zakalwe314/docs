<template lang="pug">
  div.view
    section
      section-header Introduction
      component-chip(type="comp")
      component-chip(type="directive")
      component-chip(type="slot")
      section-text(v-html="text")
    section
      section-header Examples
      component-header On Click
      component-example
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
      component-header On Hover
      component-example
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
      component-header Menus
      component-example
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
    component-options
</template>

<script>
  export default {
    name: 'dropdowns-view',

    mounted () {
      this.$emit('view', 'Dropdowns')
    },

    data () {
      return {
        text: `Soon`,
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