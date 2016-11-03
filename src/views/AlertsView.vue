<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(id="alerts")
      v-alert(error) 
        | This is an error alert with 
        strong strong text.
      v-alert(info) 
        | This is an info alert with 
        strong strong text.
      v-alert(success) 
        | This is a success alert with 
        strong strong text.
      v-alert(warning) 
        | This is a warning alert with 
        strong strong text.
    markup(slot="markup")
      |&lt;v-alert error&gt;
      |   This is an error alert with &lt;strong&gt;strong text&lt;/strong&gt;
      |&lt;/v-alert&gt;
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Alert',
          desc: 'Soon',
          types: ['comp', 'slot'],
          params: []
        }
      }
    },

    mounted () {
      this.$emit('view', 'Alerts')
    }
  }
</script>

<style lang="stylus">
  #alerts .component-example
    flex-wrap: wrap
    
    .alert
      flex-basis: 100%
</style>