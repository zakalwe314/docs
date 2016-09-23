<template lang="pug">
  div.view
    section
      section-header Introduction
      component-chip(type="comp")
      section-text Soon
      component-example
        div
          div
            v-tabs(id="tabs")
              v-tab(
                target="tab1"
                v-bind:selected="true"
              ) Tab 1
              v-tab(target="tab2") Tab 2
              v-tab(target="tab3") Tab 3
              v-tab(target="tab4") Tab 4

            v-tab-content(
              id="tab1"
              target="tabs"
            ) {{ text }}
            v-tab-content(
              id="tab2"
              target="tabs"
            ) {{ text }}
            v-tab-content(
              id="tab3"
              target="tabs"
            ) {{ text }}
            v-tab-content(
              id="tab4"
              target="tabs"
            ) {{ text }}
      component-options
</template>

<script>
  export default {
    name: 'tabs-view',

    data () {
      return {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },

    mounted () {
      this.$emit('view', 'Tabs')
    }
  }
</script>