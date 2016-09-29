<template lang="pug">
  div.view
    section
      section-header Introduction
      component-chip(type='directive')
      section-text(v-html="text")
    section
      section-header Examples
      component-header Character
      component-example
        v-icon(
          large
          v-badge:6.left=""
          class="grey--text text--lighten-1"
        ) shopping_cart
        v-icon(
          large,
          v-badge="{ overlap: true, value: '!' }"
          class="grey--text red--after"
        ) mail
      component-header Icon
      component-example
        v-icon(
          large
          v-badge:done.overlap.icon.left=""
          class="grey--text text--lighten-1"
        ) account_circle
        v-icon(
          large
          v-badge:notifications.icon.overlap=""
          class="grey--text text--darken-1 orange--after"
        ) account_box
      component-header Inline
      component-example
        span(
          v-badge:2.left=""
        ) Examples
        span(
          v-badge:list.icon=""
          class="green--after"
        ) Lists
    component-options(v-bind:items="options")
</template>

<script>
  export default {
    data () {
      return {
        text: `
          <p>
            Badge directives can be applied to any element using the <code>v-badge</code> directive. By default, a badge will use the application's defined <strong class="primary--text">primary color</strong>. Parameters can be passed using the arg, <code>v-badge:arg</code>, modifier, <code>v-badge:2.modifier</code>, or by passing an object by expression, <code>v-badge="{ value: 2, overlap: true }"</code>
          </p>
          <p>
            The color can be changed by using the color--after helper class, or by apply a class that modifies the background of the badged elements <strong>:after</strong> psuedo-selector.
          </p>`,
        options: [
          [
            '<code>v-badge:arg.icon</code>',
            '<code>icon</code>',
            'Specifies the use of an icon',
            'Default: false'
          ],
          [
            '<code>v-badge:arg.left</code>',
            '<code>left</code>',
            'Positions the badge to the left of the element',
            'Default: false'
          ],
          [
            '<code>v-badge:arg.overlap</code>',
            '<code>overlap</code>',
            'Overlaps badge on element',
            'Default: false'
          ]
        ]
      }
    },

    mounted () {
      this.$emit('view', 'Badges')
    }
  }
</script>