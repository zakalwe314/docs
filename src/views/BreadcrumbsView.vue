<template lang="pug">
  section
    section-header Variations
    v-row
      v-col(xs12)
        v-breadcrumbs(
          icons,
          divider="chevron_right"
        )
          v-breadcrumbs-item(
            v-for="item in items"
            v-bind:item="item",
            v-bind:disabled="item.disabled"
          )
      v-col(xs12)
        v-breadcrumbs(
          icons,
          divider="forward"
        )
          v-breadcrumbs-item(
            v-for="item in items"
            v-bind:item="item",
            v-bind:disabled="item.disabled"
          )
      v-col(xs12)
        v-breadcrumbs
          v-breadcrumbs-item(
            v-for="item in items"
            v-bind:item="item",
            v-bind:disabled="item.disabled"
          )
      v-col(xs12)
        v-breadcrumbs(divider="-")
          v-breadcrumbs-item(
            v-for="item in items"
            v-bind:item="item",
            v-bind:disabled="item.disabled"
          )
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            href: '#!',
            text: 'Dashboard',
            disabled: true
          },
          {
            href: '#!',
            text: 'Link 1',
            disabled: false
          },
          {
            href: '#!',
            text: 'Link 2',
            disabled: false
          }
        ]
      }
    },
    mounted () {
      this.$emit('view', 'Breadcrumbs')
    }
  }
</script>