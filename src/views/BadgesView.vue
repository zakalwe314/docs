<template lang="pug">
  section
    section-header Intro
    section-text
      | Badge directives can be applied to any element. using the 
      code v-badge
      |  directive. This component will use the application's defined 
      strong.primary--text primary color
      | . Parameters can be passed using the arg, modifier method, 
      code v-badge:2.overlap
      |  , or by passing an object by expression/object 
      code v-badge="{ value: 2, overlap: true }"
      | .
    component-header Character
    v-row.center-align
      v-col(xs12)
        v-icon(
          large,
          v-badge:6.left=""
        ) shopping_cart
        v-icon(
          large,
          v-badge:2.overlap="{ overlap: true }"
          class="grey--text"
        ) mail
    component-header Material Icons
    v-row.center-align
      v-col(xs12)
        v-icon(
          class="grey--text"
          large
          v-badge:notifications.icon.left.overlap=""
        ) account_box
        v-icon(
          large,
          v-badge:done.icon=""
        ) account_circle
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