<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(header="Selects" file="forms/1")
      div
        v-select(
          v-bind:options="options",
          id="test",
          label="Testing",
          name="test",
          v-model="input"
        )
        div {{ input }}
      div
        v-select(
          v-bind:options="options",
          id="test4",
          label="Testing4",
          name="test4",
          multiple,
          v-model="multiple"
        )
        div {{ multiple }}
    component-example(header="Inputs" file="forms/2")
      div
        v-text-input(
          id="test2",
          name="test2",
          label="Testing 2"
          v-model="text"
        )
        div {{ text }}
      div
        v-text-input(
          id="test3",
          name="test3",
          label="Testing 3",
          placeholder="Testing 3"
        )
    component-example(header="Radios" file="forms/3")
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
    component-example(header="Checkboxes" file="forms/4")
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
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Form Inputs',
          desc: 'Form components are used for collecting user provided information.',
          props: {
            'v-select': {
              params: [
                [
                  'defaultText',
                  'String',
                  'Select...',
                  'Sets default option text'
                ],
                [
                  'multiple',
                  'Boolean',
                  'False',
                  'Sets the multiple attribute'
                ],
                [
                  'options',
                  'Array',
                  `{ id: 1, text: 'Value' }`,
                  'The options array'
                ]
              ],
              model: {
                types: ['Array', 'String', 'Number'],
                default: 'null'
              }
            },
            'v-text-input': {
              params: [
                [
                  'type',
                  'String',
                  'text',
                  'Sets the type attribute'
                ],
              ],
              model: {
                types: ['*'],
                default: 'null'
              }
            },
            'v-radio': {
              params: [
                [
                  'gap',
                  'Boolean',
                  'False',
                  'Creates a gap between the selected circle and the outer border'
                ]
              ],
              model: {
                types: ['String', 'Number', 'Boolean'],
                default: 'null'
              }
            },
            'v-checkbox': {
              params: [
                [
                  'gap',
                  'Boolean',
                  'False',
                  'Creates a gap between the selected box and the outer border'
                ],
                [
                  'filled',
                  'Boolean',
                  'False',
                  'Fills the checkbox when selected'
                ],
                [
                  'indeterminate',
                  'Boolean',
                  'False',
                  'Sets the indeterminate state'
                ]
              ],
              model: {
                types: ['String', 'Number', 'Boolean'],
                default: 'null'
              }
            },
            'All Components': {
              params: [
                [
                  'disabled',
                  'Boolean',
                  'False',
                  'Sets the disabled attribute',
                ],
                [
                  'label',
                  'String',
                  "''",
                  'Sets the label text',
                ],
                [
                  'id',
                  "String",
                  "''",
                  'Sets the input id',
                ],
                [
                  'name',
                  "String",
                  "''",
                  'Sets the label text',
                ],
                [
                  'placeholder',
                  "String",
                  "''",
                  'Sets the placeholder text',
                ]
              ]
            }
          }
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
      this.$emit('view', this.meta())
    },

    preFetch () {
      return this.methods.meta()
    },

    methods: {
      meta () {
        return {
          title: 'Form Input Components | Vuetify.js',
          h1: 'Form Inputs',
          description: 'Form input components for Vuetify Framework',
          keywords: 'vuetify, form, components'
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .component-example__container
    justify-content: space-between
    flex-wrap: wrap
    
    > *
      margin: 2rem 0
      flex: 1 0 100%
</style>