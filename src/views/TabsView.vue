<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(header="Default")
      v-tabs(id="tabs")
        v-card(class="secondary")
          v-card-row
            v-spacer
            v-card-title(class="white--text") Title
            v-spacer
        v-tabs-tabs
          v-tab(href="tab1" selected) Tab 1
          v-tab(href="tab2") Tab 2
          v-tab(href="tab3") Tab 3
          v-tab(href="tab4") Tab 4
          
        v-tabs-items(class="white")
          v-tabs-item(id="tab1")
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
          v-tabs-item(id="tab2")
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          v-tabs-item(id="tab3") Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          v-tabs-item(id="tab4") Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    markup(slot="markup" lang="xml")
      |&lt;v-tabs id="tabs"&gt;
      |   &lt;v-card class="secondary"&gt;
      |     &lt;v-card-row&gt;
      |       &lt;v-spacer&gt;&lt;/v-spacer&gt;
      |       &lt;v-card-title&gt;Title&lt;/v-card-title&gt;
      |       &lt;v-spacer&gt;&lt;/v-spacer&gt;
      |     &lt;/v-card-row&gt;
      |   &lt;/v-card&gt;
      |   &lt;v-tabs-tabs&gt;
      |     &lt;v-tab href="tab1" selected&gt;
      |       ...
      |     &lt;/v-tab&gt;
      |   &lt;/v-tabs-tabs&gt;
      |   &lt;v-tabs-items&gt;
      |     &lt;v-tabs-item id="tab1"&gt;
      |       ...
      |     &lt;/v-tabs-item&gt;
      |   &lt;/v-tabs-items&gt;
      |&lt;/v-tabs&gt;
</template>

<script>
  export default {
    name: 'tabs-view',

    data () {
      return {
        doc: {
          stage: 'comp',
          title: 'Tabs',
          desc: 'The <code>v-tabs</code> component is used for hiding content behind a selectable item. This can also be used as a psuedo-navigation for a page, where the tabs are links and the tab-items are the content.',
          params: [
            [
              '<code>v-tabs</code>',
              '',
              'Base component'
            ],
            [
              '<code>v-tab</code>',
              '',
              'Base component'
            ],
            [
              '<code>href</code>',
              'Assigns a tab-content to the tab',
              'Required: true'
            ],
            [
              '<code>selected</code>',
              'Pre-selects a tab',
              'Default: false'
            ],
            [
              '<code>v-tabs-content-container</code>',
              '',
              'Base component'
            ],
            [
              '<code>v-tabs-content</code>',
              '',
              'Base component'
            ],
            [
              '<code>id</code>',
              'Assigns the id of the tab content',
              'Required: true'
            ]
          ]
        },
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
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
          title: 'Tabs Component | Vuetify.js',
          h1: 'Tabs',
          description: 'Tabs component for Vuetify Framework',
          keywords: 'vuetify, tabs, components'
        }
      }
    }
  }
</script>