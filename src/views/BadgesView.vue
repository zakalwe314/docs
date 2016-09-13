<template lang="pug">
  section
    section-header Icons
    v-row
      v-col(xs12)
        v-icon(large, v-badge:2.overlap="{ overlap: true }", class="grey--text") mail
        v-icon(large, v-badge:edit.overlap.icon="", class="grey--text text--darken-1") account_box
        v-icon(large, v-badge:done.overlap.icon="") account_circle
        v-icon(large, v-badge:indeterminate_check_box.icon.overlap="") delete
        v-icon(large, v-badge:6.left="") shopping_cart
    section-header Inline
    v-row
      v-col(xs2)
        span(v-badge:4="") Inbox
      v-col(xs2)
        span(v-badge:cloud_off.icon="") Status
    section-header Navbar
    v-row
      v-col(xs12)
        v-navbar(class="secondary")
          v-col-spacer
          v-navbar-items(v-bind:items="items")
            li
              a(
                class="navbar__item"
                href="#!"
              )
                span(
                  v-badge:done.icon=""
                ) Badge
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            href: '#!',
            text: 'Link 1'
          },
          {
            href: '#!',
            text: 'Link 2'
          },
          {
            href: '#!',
            text: 'Link 3'
          }
        ]
      }
    },

    mounted () {
      this.$emit('view', 'Badges')
    }
  }
</script>