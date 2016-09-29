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
        options: [
          [
            '<code>&lt;v-breadcrumbs divider="-"&gt;</code>',
            '<code>divider</code>',
            'Specifies the dividing character',
            'Default: /'
          ],
          [
            '<code>&lt;v-breadcrumbs divider="chevron_right" icon&gt;</code>',
            '<code>icon</code>',
            'Specifies that the divider is an icon',
            'Default: false'
          ],
          [
            '<code>&lt;v-breadcrumbs v-bind:items="items"&gt;</code>',
            '<code>items</code>',
            'The array of Breadcrumbs',
            'Allowed properties: href, text, disabled'
          ],
          [
            '<code>&lt;v-breadcrumbs-item disabled&gt;</code>',
            '<code>disabled</code>',
            'Disables the breadcrumb',
            'Default: false'
          ],
          [
            '<code>&lt;v-breadcrumbs-item v-bind:item="item"&gt;</code>',
            '<code>item<code>',
            'The item object',
            'Allowed object properties: href, text'
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