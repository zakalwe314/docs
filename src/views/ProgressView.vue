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
    markup(slot="markup")
      |&lt;v-progress value="100" min="0" max="100"&gt;&lt;/v-progress&gt;
      |&nbsp;
      |&lt;v-progress indeterminate&gt;&lt;/v-progress&gt;
      |&nbsp;
      |&lt;v-progress v-model="progress" min="0" max="100"&gt;&lt;/v-progress&gt;
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Progress',
          desc: 'Soon',
          types: ['comp'],
          params: [
            [
              '<code>v-progress</code>',
              '',
              'Base component'
            ],
            [
              '<code>height</code>',
              'Sets the height of the progress bar',
              'Default: 7px'
            ],
            [
              '<code>indeterminate</code>',
              'Applies the progress--indeterminate class',
              'Default: false'
            ],
            [
              '<code>max</code>',
              'Sets the max limit of the progress bar',
              'Default: 0'
            ],
            [
              '<code>min</code>',
              'Sets the min limit of the progress bar',
              'Default: 0'
            ],
            [
              '<code>value</code>',
              'Sets the value of the progress bar',
              'Default: 0'
            ]
          ]
        },

        value: 40
      }
    },

    mounted () {
      this.$emit('view', 'Progress')
    }
  }
</script>

<style lang="stylus">
  #progress .component-example
    flex-direction: column
</style>