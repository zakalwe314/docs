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
          desc: 'Soon',
          params: []
        }
      }
    },

    mounted () {
      this.$emit('view', 'Footer')
    }
  }
</script>