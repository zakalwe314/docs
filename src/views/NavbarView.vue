<template lang="pug">
  doc-view(v-bind:doc="doc" id="navbar")
    component-example(header="Variants")
      v-navbar(class="green")
        v-navbar-logo Navbar
        v-navbar-items(v-bind:items="items")
      v-navbar(class="orange")
        v-spacer
        v-navbar-logo(class="text-xs-center") Navbar
        v-navbar-items(v-bind:items="items")
      v-navbar(class="red")
        v-navbar-items(v-bind:items="items")
        v-navbar-logo
          v-spacer
          | Navbar
    div(slot="markup")
      markup(lang="xml")
        |&lt;v-navbar class="green"&gt;
        |   &lt;v-navbar-logo&gt;Navbar&lt;/v-navbar&gt;
        |   &lt;v-navbar-items v-bind:items="items"&gt;&lt;/v-navbar-items&gt;
        |&lt;/v-navbar&gt;
        |&nbsp;
        |&lt;v-navbar class="yellow"&gt;
        |   &lt;v-spacer&gt;&lt;/v-spacer&gt;
        |   &lt;v-navbar-logo&gt;Navbar&lt;/v-navbar&gt;
        |   &lt;v-navbar-items v-bind:items="items"&gt;&lt;/v-navbar-items&gt;
        |&lt;/v-navbar&gt;
        |&nbsp;
        |&lt;v-navbar class="red"&gt;
        |   &lt;v-navbar-items v-bind:items="items"&gt;&lt;/v-navbar-items&gt;
        |   &lt;v-navbar-logo&gt;
        |     &lt;v-spacer&gt;&lt;/v-spacer&gt;
        |     Navbar
        |   &lt;/v-navbar&gt;
        |&lt;/v-navbar&gt;
      markup(lang="js")
        |data () {
        |   return {
        |     items: [
        |       { text: 'Link', href: '#!' }
        |     ]
        |   }
        |}
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Navbar',
          desc: 'Soon',
          params: [
            [
              '<code>&lt;v-navbar&gt;</code>',
              '',
              'Base component'
            ],
            [
              '<code>&lt;v-navbar-items&gt;</code>',
              '',
              'Base component'
            ],
            [
              '<code>items</code>',
              'The array of Navbar items',
              'Allowed properties: href, text'
            ],
            [
              '<code>&lt;v-navbar-item&gt;</code>',
              '',
              'base component'
            ],
            [
              '<code>item</code>',
              'The item object',
              'Allowed object properties: href, text'
            ]
          ]
        },
        items: [
          { text: 'Link', href: '#!' },
          { text: 'Link', href: '#!' },
          { text: 'Link', href: '#!' }
        ]
      }
    },

    mounted () {
      this.$emit('view', 'Navbar')
    }
  }
</script>

<style lang="stylus">
  #navbar
    .navbar
      padding-left: 0
      min-height: 5rem
      margin: 1rem 0
      
      &__item
        min-height: 5rem
</style>