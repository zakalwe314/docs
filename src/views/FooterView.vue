<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example
      div
        v-footer
          div(class="text-xs-right") &copy; 2016
    markup(slot="markup" lang="xml")
      |&lt;v-footer&gt;
      |   &lt;div class="text-xs-right"&gt;...&lt;/div&gt;
      |&lt;/v-footer&gt;
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Footer',
          desc: 'The <code>v-footer</code> component is used for displaying general information that a user might want to access from any page within your site.',
          params: [
            [
              '<code>&lt;v-footer&gt;</code>',
              '',
              'Base component'
            ]
          ]
        }
      }
    },

    mounted () {
      this.$emit('view', 'Footer')
    }
  }
</script>