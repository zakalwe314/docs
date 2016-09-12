<template lang="pug">
  section
    section-header Lists
    v-row
      v-col(xs6)
        v-list
          v-list-item
            v-list-item-title John Leider
          v-list-item 
            v-list-item-title Ranee Leider
          v-list-item 
            v-list-item-title Declan Leider
    v-row
      v-col(xs6)
        v-list
          v-list-item
            v-list-item-icon person
            v-list-item-title John Leider
          v-list-item 
            v-list-item-icon person
            v-list-item-title Ranee Leider
          v-list-item 
            v-list-item-icon person
            v-list-item-title Declan Leider
    v-row
      v-col(xs6)
        v-list
          v-list-item
            a(href="#!", v-dropdown:dropdown="")
              v-list-item-avatar(class="orange", large) event
            v-dropdown(id="dropdown", v-bind:items="items")
            v-list-item-title John Leider
          v-list-item 
            v-list-item-avatar(class="brown", large, v-badge:done.icon="") person
            v-list-item-title Ranee Leider
            v-list-item-action
              a(href="#!", v-dropdown:menu="")
                v-icon(class="blue--text", medium) edit
              v-dropdown(id="menu", v-bind:items="items", right)
          v-list-item 
            v-list-item-avatar(class="green", large) phone
            v-list-item-title
              span Declan Leider
              v-list-item-sub-title Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            v-list-item-action
              v-list-item-action-title Contact
              a(href="#!")
                v-icon(class="grey--text darken-1") email
</template>

<script>
  export default {
    name: 'lists-view',

    data () {
      return {
        items: [
          {
            href: '#!',
            text: 'Profile'
          },
          {
            href: '#!',
            text: 'Message'
          },
          {
            href: '#!',
            text: 'Friend Request'
          }
        ]
      }
    },

    mounted () {
      this.$emit('view', 'Lists')
    }
  }
</script>