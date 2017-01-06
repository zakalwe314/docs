<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(header="Basic" file="lists/1")
      v-list
        v-list-item
          v-list-item-title Person
        v-list-item 
          v-list-item-title Person
        v-list-item 
          v-list-item-title Person
    component-example(header="With Icon" file="lists/2")
      v-list
        v-list-item
          v-list-item-icon person
          v-list-item-title Person
        v-list-item 
          v-list-item-icon person
          v-list-item-title Person
        v-list-item 
          v-list-item-icon person
          v-list-item-title Person
    component-example(header="With Avatar" file="lists/3")
      v-list
        v-list-item
          a(href="#!", v-dropdown:dropdown="")
            v-list-item-avatar(class="orange", large) event
          v-dropdown(id="dropdown", v-bind:items="items")
          v-list-item-title Person
        v-list-item 
          v-list-item-avatar(class="brown", large, v-badge:notifications.icon="") person
          v-list-item-title Person
          v-list-item-action
            a(href="#!", v-dropdown:menu="")
              v-icon(class="blue--text", medium) edit
            v-dropdown(id="menu" v-bind:items="items" top right origin="top right")
        v-list-item 
          v-list-item-avatar(class="green", large) phone
          v-list-item-title
            span Person
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
        doc: {
          title: 'List',
          desc: 'The <code>v-list</code> component is used to display, you guessed it, lists!. Combine the list with a <code>v-badge</code> directive or a <code>v-dropdown</code> to enhance and add functionality.',
          functional: {
            'v-list': {
              params: [
                ['v-list-item', 'list__item'],
                ['v-list-title', 'list__item__title'],
                ['v-list-sub-title', 'list__item__sub-title'],
                ['v-list-action', 'list__action'],
                ['v-list-action-title', 'list__action__title'],
                ['v-list-icon', 'list__icon'],
                ['v-list-avatar', 'list__avatar'],
              ]
            }
          }
        },
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
      this.$emit('view', this.meta())
    },

    preFetch () {
      return this.methods.meta()
    },

    methods: {
      meta () {
        return {
          title: 'List Component | Vuetify.js',
          h1: 'Lists',
          description: 'List component for Vuetify Framework',
          keywords: 'vuetify, lists, components'
        }
      }
    }
  }
</script>