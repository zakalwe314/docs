<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(header="Character" file="badges/1")
    component-example(header="Icon" file="badges/2")
    component-example(header="Inline" file="badges/3")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Badge',
          desc: `
            <p>
              Badge directives can be applied to any element using the <code>v-badge</code> directive. By default, a badge will use the application's defined <strong class="primary--text">primary color</strong>. Parameters can be passed using the arg, <code>v-badge:arg</code>, modifier, <code>v-badge:2.modifier</code>, or by passing an object by expression, <code>v-badge="{ value: 2, overlap: true }"</code>
            </p>
            <p>
              The color can be changed by using the color--after helper class, or by apply a class that modifies the background of the badged elements <strong>:after</strong> psuedo-selector.
            </p>`,
          props: {
            'v-badge': {
              params: [
                [
                  'v-badge:arg.icon',
                  'Boolean',
                  'False',
                  'Specifies the use of an icon'
                ],
                [
                  'v-badge:arg.left',
                  'Boolean',
                  'False',
                  'Positions the badge to the left of the element'
                ],
                [
                  'v-badge:arg.overlap',
                  'Boolean',
                  'False',
                  'Overlaps badge on element'
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
          title: 'Badge Directive | Vuetify.js',
          h1: 'Badges',
          description: 'Badge directive for Vuetify Framework',
          keywords: 'vuetify, badges, directives'
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .component-example
    span
      margin: 1rem
</style>