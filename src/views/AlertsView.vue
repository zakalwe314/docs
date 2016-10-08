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
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          intro: 'Soon',
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