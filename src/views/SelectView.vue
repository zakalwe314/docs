<template lang="pug">
  doc-view(v-bind:doc="doc" id="selects-view")
    component-example(header="Standard select" file="selects/1" v-bind:data="$data")
      span(class="subheading" slot="details") Light Theme
    component-example(file="selects/2" v-bind:data="$data")
      span(class="subheading" slot="details") Dark Theme
</template>

<script>
  export default {
    data () {
      let srcs = {
        1: '/public/doc-images/lists/1.jpg',
        2: '/public/doc-images/lists/2.jpg',
        3: '/public/doc-images/lists/3.jpg',
        4: '/public/doc-images/lists/4.jpg',
        5: '/public/doc-images/lists/5.jpg'
      }
      return {
        activatorXY: {clientX: 0, clientY: 0},
        e1: {},
        e2: {},
        e3: {},
        e4: {},
        e5: {},
        e6: [],
        e7: [],
        e8: {},
        e9: [],
        e10: [],
        e11: [],
        e12: {
          select: [],
          people: [
            { 'name': 'Sandra Adams', 'group': 'Group 1', avatar: srcs[1] },
            { 'name': 'Ali Connors', 'group': 'Group 1', avatar: srcs[2] },
            { 'name': 'Trevor Hansen', 'group': 'Group 1', avatar: srcs[3] },
            { 'name': 'Tucker Smith', 'group': 'Group 1', avatar: srcs[2] },
            { 'name': 'Britta Holt', 'group': 'Group 2', avatar: srcs[4] },
            { 'name': 'Jane Smith ', 'group': 'Group 2', avatar: srcs[5] },
            { 'name': 'John Smith', 'group': 'Group 2', avatar: srcs[1] },
            { 'name': 'Sandra Williams', 'group': 'Group 2', avatar: srcs[3] }
          ],
          list: [
            { header: 'Today' },
            { avatar: srcs[1], title: 'Brunch this weekend?', subtitle: "<span class='grey--text text--darken-2'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
            { divider: true, inset: true },
            { avatar: srcs[2], title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='grey--text text--darken-2'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." },
            { divider: true, inset: true },
            { avatar: srcs[3], title: 'Oui oui', subtitle: "<span class='grey--text text--darken-2'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" },
            { divider: true, inset: true },
            { avatar: srcs[4], title: 'Birthday gift', subtitle: "<span class='grey--text text--darken-2'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?" },
            { divider: true, inset: true },
            { avatar: srcs[5], title: 'Recipe to try', subtitle: "<span class='grey--text text--darken-2'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos." },
          ],
        },
        items: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' }
        ],
        people: [
          { 'name': 'Sandra Adams', 'group': 'Group 1', avatar: srcs[1] },
          { 'name': 'Ali Connors', 'group': 'Group 1', avatar: srcs[2] },
          { 'name': 'Trevor Hansen', 'group': 'Group 1', avatar: srcs[3] },
          { 'name': 'Tucker Smith', 'group': 'Group 1', avatar: srcs[2] },
          { 'name': 'Britta Holt', 'group': 'Group 2', avatar: srcs[4] },
          { 'name': 'Jane Smith ', 'group': 'Group 2', avatar: srcs[5] },
          { 'name': 'John Smith', 'group': 'Group 2', avatar: srcs[1] },
          { 'name': 'Sandra Williams', 'group': 'Group 2', avatar: srcs[3] }
        ],
        states: [
          { text: 'Alabama' },{ text: 'Alaska' },{ text: 'American Samoa' },{ text: 'Arizona' },
          { text: 'Arkansas' },{ text: 'California' },{ text: 'Colorado' },{ text: 'Connecticut' },
          { text: 'Delaware' },{ text: 'District of Columbia' },{ text: 'Federated States of Micronesia' },
          { text: 'Florida' },{ text: 'Georgia' },{ text: 'Guam' },{ text: 'Hawaii' },{ text: 'Idaho' },
          { text: 'Illinois' },{ text: 'Indiana' },{ text: 'Iowa' },{ text: 'Kansas' },{ text: 'Kentucky' },
          { text: 'Louisiana' },{ text: 'Maine' },{ text: 'Marshall Islands' },{ text: 'Maryland' },
          { text: 'Massachusetts' },{ text: 'Michigan' },{ text: 'Minnesota' },{ text: 'Mississippi' },
          { text: 'Missouri' },{ text: 'Montana' },{ text: 'Nebraska' },{ text: 'Nevada' },
          { text: 'New Hampshire' },{ text: 'New Jersey' },{ text: 'New Mexico' },{ text: 'New York' },
          { text: 'North Carolina' },{ text: 'North Dakota' },{ text: 'Northern Mariana Islands' },{ text: 'Ohio' },
          { text: 'Oklahoma' },{ text: 'Oregon' },{ text: 'Palau' },{ text: 'Pennsylvania' },{ text: 'Puerto Rico' },
          { text: 'Rhode Island' },{ text: 'South Carolina' },{ text: 'South Dakota' },{ text: 'Tennessee' },
          { text: 'Texas' },{ text: 'Utah' },{ text: 'Vermont' },{ text: 'Virgin Island' },{ text: 'Virginia' },
          { text: 'Washington' },{ text: 'West Virginia' },{ text: 'Wisconsin' },{ text: 'Wyoming' }
        ],
        doc: {
          title: 'Select',
          desc: 'Select fields components are used for collecting user provided information from a list of options.',
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
            'v-text-field': {
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
        multiple: ['1', '2'],
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
        text: null,
        errors: ['Username or Password is incorrect']
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
          title: 'Select Component | Vuetify.js',
          h1: 'Selects',
          description: 'Select component for Vuetify Framework',
          keywords: 'vuetify, selects, directives'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #forms-view
    .with
      min-height: 0
      
    main
      min-height: 0
      padding-left: 0
      
    .toolbar
      max-height: 64px
      
    .component-example__container
      justify-content: space-between
      flex-wrap: wrap
      
      > div > *
        margin: 2rem 0
        flex: 1 0 100%
</style>
