<template lang="pug">
  v-view(v-bind:doc="doc")
    component-example(header="Text Dividers" file="breadcrumbs/1")
    //- component-example(header="Icon Dividers" file="breadcrumbs/2")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Breadcrumbs',
          desc: `
            <p>
              The <code>v-breadcrumbs</code> component is a navigational helper for pages. It can accept a <strong>Material Icons</strong> icon or characters as a divider. An array of objects containing the fields <em>href</em>, <em>text</em> and optional <em>disabled</em> can be passed to the <strong>items</strong> property of the component.  Additionally, a regular slot exists for more control of the breadcrumbs, either utilizing <code>v-breadcrumb</code> or other custom markup.
            </p>
          `,
          props2: {
            'v-breadcrumbs': {
              params: [
                [
                  'divider',
                  'String',
                  '/',
                  'Specifies the dividing character'
                ],
                [
                  'icon',
                  'Boolean',
                  'False',
                  'Specifies that the divider is an icon'
                ]
              ]
            },
            'v-breadcrumbs-item': {
              params: [
                [
                  'append',
                  'Boolean',
                  'False',
                  'Vue Router router-link prop'
                ],
                [
                  'disabled',
                  'Boolean',
                  'False',
                  'List tile is disabled'
                ],
                [
                  'href',
                  'String, Object',
                  'javascript:;',
                  'For router, this is passed to the "to" prop'
                ],
                [
                  'to',
                  'String, Object',
                  'javascript:;',
                  'For router, this is passed to the "to" prop'
                ],
                [
                  'nuxt',
                  'Boolean',
                  'False',
                  'Specifies the link is a nuxt-link'
                ],
                [
                  'replace',
                  'Boolean',
                  'False',
                  'Vue Router router-link prop'
                ],
                [
                  'router',
                  'Boolean',
                  'False',
                  'Designates whether the list tiles will be a router-link'
                ],
                [
                  'tag',
                  'String',
                  'a',
                  'Use a custom tag for the list tile'
                ]
              ]
            }
          }
        }
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
          title: 'Breadcrumbs Component | Vuetify.js',
          h1: 'Breadcrumbs',
          description: 'The v-breadcrumbs component is a navigational helper for pages. It can accept a Material Icons icon or characters as a divider',
          keywords: 'vuetify, breadcrumbs, components'
        }
      }
    }
  }
</script>
