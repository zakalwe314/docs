<template lang="pug">
  doc-view(v-bind:doc="doc" id="grid-view")
    section(slot="documentation" class='documentation-slot')
      v-card
        v-table-overflow
          table.table
            caption Viewport breakpoints
            thead
              tr
                th Device
                th Types
                th Range
            tbody
              tr
                td
                  v-icon.mr-3 phone_iphone
                  span Extra small
                td small to large handset
                td &lt; 600px
              tr
                td
                  v-icon.mr-3 tablet
                  span Small
                td small to medium tablet
                td 600px &gt; &lt; 1024px
              tr
                td
                  v-icon.mr-3 laptop
                  span Medium
                td large tablet to laptop
                td 1024px &gt; &lt; 1440px
              tr
                td
                  v-icon.mr-3 desktop_windows
                  span Large
                td desktop
                td 1440px &gt; &lt; 1920px
              tr
                td
                  v-icon.mr-3 tv
                  span Extra large
                td 4k and ultra-wides
                td &gt; 1920px

    component-example(header="Grid" file="grid/1").mb-5
      section-text(slot="details") The <code>v-container</code> can be used for a center focused page, or given the <code>fluid</code> prop to extend its full width. <code>v-row</code> is used for separating sections and contains the <code>v-col</code>. The structure of your layout will be as follows, <strong>v-container</strong> &raquo; <strong>v-row</strong> &raquo; <strong>v-col</strong>.
    component-example(header="Offset" file="grid/2").mb-5
      section-text(slot="details") Offsets are useful for compensating for elements that may not be visible yet, or control the position of content. Just as with breakpoints, you can set an offset for any available sizes.
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Grid',
          desc: 'Vuetify.js uses a 12 point grid system. The grid is used to layout an applications content and contains 5 types of media breakpoints. The 5 ranges of breakpoints are used for targeting specific screen sizes or orientations.',
          props: {
            'v-container': {
              params: [
                [
                  'fluid',
                  'Boolean',
                  'False',
                  'Applies the .container--fluid class'
                ]
              ]
            },
            'v-col': {
              params: [
                [
                  'Width',
                  'Boolean',
                  'False',
                  'xs:extra small, sm:small, md:medium, lg:large, xl:extra large - 1 through 12'
                ],
                [
                  'Offset',
                  'Boolean',
                  'False',
                  'offset- xs:extra small, sm:small, md:medium, lg:large, xl:extra large - 1 through 12'
                ]
              ]
            }
          },
          functional: {
            'grid': {
              params: [
                ['<v-content>', 'The main content wrapper for your application'],
                ['<v-row>', 'The .row class'],
                ['<v-spacer>', 'Spacer for flexbox grids']
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
          title: 'Grid | Vuetify.js',
          h1: 'Grid',
          description: 'Grid for the Vuetify Framework',
          keywords: 'vuetify, grid'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #grid-view
    .component-example
      .card
        color: #fff
        text-align: center
        padding: 1rem 0
        margin: .5rem 0

        &__text
          padding: 0
  
  .icon
    vertical-align: middle

  .documentation-slot
    margin-bottom: 2rem
</style>
