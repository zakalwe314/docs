<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(header="Default")
      v-tabs(id="tabs")
        v-tabs-tabs
          v-tab(href="tab1" selected) Tab 1
          v-tab(href="tab2") Tab 2
          v-tab(href="tab3") Tab 3
          v-tab(href="tab4") Tab 4
          
        v-tabs-items
          v-tabs-item(id="tab1") Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          v-tabs-item(id="tab2") Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          v-tabs-item(id="tab3") Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          v-tabs-item(id="tab4") Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    markup(slot="markup" lang="xml")
      |&lt;v-tabs id="tabs"&gt;
      |   &lt;v-tabs-container&gt;
      |     &lt;v-tab href="tab1" selected&gt;
      |       ...
      |     &lt;/v-tab&gt;
      |   &lt;/v-tabs-container&gt;
      |   &lt;v-tabs-content-container&gt;
      |     &lt;v-tab-content id="tab1"&gt;
      |       ...
      |     &lt;/v-tab-content&gt;
      |   &lt;/v-tabs-content&gt;
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
          desc: 'Soon',
          types: [
            'comp', 'slot'
          ],
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
      this.$emit('view', 'Tabs')
    }
  }
</script>