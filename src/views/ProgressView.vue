<template lang="pug">
  doc-view(
    id="progress"
    v-bind:doc="doc"
  )
    component-example(header="Fixed Width")
      div
        v-progress(
          value="25"
          min="0"
          max="100"
        )
      div
        v-progress(
          value="50"
          min="0"
          max="100"
        )
      div
        v-progress(
          value="75"
          min="0"
          max="100"
        )
      div
        v-progress(
          value="100"
          min="0"
          max="100"
        )
    component-example(header="Indeterminate")
      div
        v-progress(indeterminate)
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          intro: 'Soon',
          types: ['comp'],
          params: []
        },

        value: 40
      }
    },

    mounted () {
      this.$emit('view', 'Progress')
      // setInterval(() => {
      //   this.value = Math.random() * 100
      // }, 3000)
    }
  }
</script>

<style lang="stylus">
  #progress .component-example
    flex-direction: column
</style>