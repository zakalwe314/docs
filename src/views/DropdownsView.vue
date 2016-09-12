<template lang="pug">
  section
    section-header On Click
    v-row
      v-col(xs6)
        v-btn(
          primary
          v-dropdown:dropdown=""
        ) Dropdown
        v-dropdown(
          id="dropdown",
          v-bind:items="items"
        )
      v-col(xs6)
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
    section-header On Hover
    v-row
      v-col(xs6)
        v-btn(
          secondary,
          v-dropdown:dropdown2="options"
        ) Dropdown
        v-dropdown(
          id="dropdown2",
          v-bind:items="items",
          right
        )
    section-header Menus
    v-row
      v-col(xs4, offset-xs2)
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
      v-col(xs4)
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
            text: 'Click Me'
          }
        ],
        options: { hover: true }
      }
    }
  }
</script>

<style lang="stylus">
  section
    margin-bottom: 40vh
</style>