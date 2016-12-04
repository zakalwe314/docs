<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(header="Selects")
      div
        v-select(
          v-bind:options="options",
          id="test",
          label="Testing",
          name="test",
          v-model="input"
        )
        |{{ input }}
      div
        v-select(
          v-bind:options="options",
          id="test4",
          label="Testing4",
          name="test4",
          multiple,
          v-model="multiple"
        )
        |{{ multiple }}
    component-example(header="Inputs")
      div
        v-text-input(
          id="test2",
          name="test2",
          label="Testing 2"
          v-model="text"
        )
        |{{ text }}
      div
        v-text-input(
          id="test3",
          name="test3",
          label="Testing 3",
          placeholder="Testing 3"
        )
    component-example(header="Radios")
      v-radio(
        id="test5",
        name="test5",
        label="Testing 5"
      )
      v-radio(
        id="test6",
        name="test5",
        label="Testing 6",
        gap
      )
      v-radio(
        id="test62",
        name="test52",
        label="Testing 62",
        gap,
        checked,
        disabled
      )
      v-radio(
        id="test61",
        name="test54",
        label="Testing 61",
        disabled,
        checked
      )
      v-radio(
        id="test71",
        name="test5",
        label="Testing 71",
        disabled
      )
    component-example(header="Checkboxes")
      v-checkbox(
        id="test7",
        name="test7",
        label="Testing 7"
      )
      v-checkbox(
        id="test8",
        name="test8",
        label="Testing 8",
        filled
      )
      v-checkbox(
        id="test9",
        name="test9",
        label="Testing 9",
        indeterminate
      )
      v-checkbox(
        id="test10",
        name="test10",
        label="Testing 10",
        disabled
      )
      v-checkbox(
        id="test10",
        name="test10",
        label="Testing 10",
        checked,
        disabled
      )
    div(slot="markup")
      markup(lang="xml")
        |&lt;v-select&gt;
        |   ...
        |&lt;/v-select&gt;
      markup(lang="xml")
        |&lt;v-text-input&gt;
        |   ...
        |&lt;/v-text-input&gt;
      markup(lang="xml")
        |&lt;v-radio&gt;
        |   ...
        |&lt;/v-radio&gt;
      markup(lang="xml")
        |&lt;v-checkbox&gt;
        |   ...
        |&lt;/v-checkbox&gt;
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          stage: 'iter',
          title: 'Forms',
          desc: 'Soon',
          types: [
            'comp'
          ],
          params: [
            [
              '<code>v-select</code>',
              '',
              'Base component'
            ],
            [
              '<code>v-text-input</code>',
              '',
              'Base component'
            ],
            [
              '<code>v-radio</code>',
              '',
              'Base component'
            ],
            [
              '<code>v-checkbox</code>',
              '',
              'Base component'
            ]
          ]
        },
        input: null,
        multiple: ['2'],
        options: [
          {
            value: 1,
            text: 'Option 1'
          },
          {
            value: 2,
            text: 'Option 2'
          },
          {
            value: 3,
            text: 'Option 3'
          }
        ],
        text: ''
      }
    },

    mounted () {
      this.$emit('view', 'Forms')
    }
  }
</script>

<style lang="stylus" scoped>
  .component-example
    justify-content: space-between
    flex-wrap: wrap
    
    > *
      margin: 2rem 0
</style>