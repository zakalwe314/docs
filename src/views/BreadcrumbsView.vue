<template lang="pug">
  div.view
    section
      section-header Introduction
      component-chip(type="comp")
      component-chip(type="slot")
      section-text(v-html="text")
    section
      section-header Examples
      component-header Text Dividers
      component-example
        v-breadcrumbs(
            divider="/"
          )
            v-breadcrumbs-item(
              v-for="item in items"
              v-bind:item="item",
              v-bind:disabled="item.disabled"
            )
        v-breadcrumbs(
            divider="-"
          )
            v-breadcrumbs-item(
              v-for="item in items"
              v-bind:item="item",
              v-bind:disabled="item.disabled"
            )
      component-header Icon Dividers
      component-example
        v-breadcrumbs(
            icons,
            divider="forward"
          )
            v-breadcrumbs-item(
              v-for="item in items"
              v-bind:item="item",
              v-bind:disabled="item.disabled"
            )
        v-breadcrumbs(
            icons,
            divider="chevron_right"
          )
            v-breadcrumbs-item(
              v-for="item in items"
              v-bind:item="item",
              v-bind:disabled="item.disabled"
            )
      component-options(v-bind:items="options")
    section
      section-header Helper-Components
      component-header.secondary--text Breadcrumb
      component-chip(type="comp")
      section-text(v-html="breadcrumb")
      component-options(v-bind:items="breadcrumb_options")
</template>

<script>
  export default {
    data () {
      return {
        text: `
          <p>
            The <code>v-breadcrumbs</code> component is a navigational helper for pages. It can accept a <strong>Material Icons</strong> icon or character as a divider. An array of objects containing the fields <em>href</em>, <em>text</em> and optional <em>disabled</em> can be passed to the <strong>items</strong> property of the component.  Additionally, a regular slot exists for more control of the breadcrumbs, either utilizing <code>v-breadcrumb</code> or other custom markup.
          </p>
        `,
        breadcrumb: `For more control over the individual crumbs, use the <code>v-breadcrumb</code> helper component.`,
        breadcrumb_options: [
          [
            '<code>disabled</code>',
            'Disables the breadcrumb',
            'Default: false'
          ],
          [
            '<code>item<code>',
            'The item object',
            'Allowed properties: href, text'
          ]
        ],
        options: [
          [
            '<code>divider</code>',
            'Specifies the dividing character',
            'Default: /'
          ],
          [
            '<code>icon</code>',
            'Specifies that the divider is an icon',
            'Default: false'
          ],
          [
            '<code>items</code>',
            'The array of Breadcrumbs',
            'Allowed properties: href, text, disabled'
          ]
        ],
        items: [
          {
            href: '#!',
            text: 'Dashboard',
            disabled: false
          },
          {
            href: '#!',
            text: 'Link 1',
            disabled: false
          },
          {
            href: '#!',
            text: 'Link 2',
            disabled: true
          }
        ]
      }
    },
    mounted () {
      this.$emit('view', 'Breadcrumbs')
    }
  }
</script>