<template lang="pug">
  doc-view(v-bind:doc="doc" id="dropdowns-view")
    component-example(header="On Click" file="dropdowns/1")
      v-btn(
        class="primary white--text"
        v-dropdown:dropdown=""
      ) Click Dropdown
      v-dropdown(
        id="dropdown"
        v-bind:items="items"
      )
      v-btn(
        class="secondary white--text"
        v-dropdown:dropdown3=""
      ) Click With Labels
      v-dropdown(
        id="dropdown3"
      )
        li
          a(href="#!", class="dropdown__item")
            | Profile
            v-chip(label, class="teal white--text right", small) new
        li
          a(href="#!", class="dropdown__item")
            span(v-badge:2="") Notifications
        li
          a(href="#!", class="dropdown__item")
            | Logout
            v-icon(class="secondary--text right") cloud_off
    component-example(header="On Hover" file="dropdowns/2")
      v-btn(
        class="primary white--text"
        v-dropdown:dropdown2=""
      ) Hover Dropdown
      v-dropdown(
        id="dropdown2"
        v-bind:items="items"
        right
        hover
      )
      v-btn(
        class="secondary white--text"
        v-dropdown:dropdown4=""
      ) Hover With Labels
      v-dropdown(
        id="dropdown4"
        hover
      )
        li
          a(href="#!", class="dropdown__item")
            | Profile
            v-chip(label, class="teal white--text right", small) new
        li
          a(href="#!", class="dropdown__item")
            span(v-badge:2="") Notifications
        li
          a(href="#!", class="dropdown__item")
            | Logout
            v-icon(class="secondary--text right") cloud_off
    component-example(header="Menus" file="dropdowns/3")
      v-card
        v-card-row(class="blue")
          v-btn(
              icon
              v-dropdown:menu=""
          )
            v-icon(
              class="white--text"
            ) more_vert
          v-dropdown(
            id="menu"
            v-bind:items="items"
          )
          v-card-title(class="white--text") Menu
        v-card-text Lorem Ipsum
      v-card
        v-card-row(class="blue")
          v-card-title(class="white--text") Menu
          v-spacer
          v-btn(
            icon
            v-dropdown:menu2=""
          )
            v-icon(
              class="white--text"
            ) more_vert
          v-dropdown(
            id="menu2"
            v-bind:items="items"
            top
            right
            origin="top right"
          )
        v-card-text Lorem Ipsum
    component-example(header="Custom Transitions" file="dropdowns/4")
      section-text(slot="details") Vuetify comes with 3 standard transitions, <strong>scale</strong>, <strong>slide-x</strong> and <strong>slide-y</strong>. You can also create your own and pass it as the transition argument. For an example of how the stock transitions are constructed, visit <a href="https://github.com/vuetifyjs/vuetify/blob/master/src/util/helpers.js#L13" target="_blank">here</a>.
      div
        v-btn(
          class="primary white--text"
          v-dropdown:dropdown-transition-1=""
        ) Changed Origin
        v-dropdown(
          id="dropdown-transition-1"
          v-bind:items="items"
          origin="center center"
        )
        v-btn(
          class="deep-orange white--text"
          v-dropdown:dropdown-transition-2=""
        ) Slide X Transition
        v-dropdown(
          id="dropdown-transition-2"
          v-bind:items="items"
          top
          left
          transition="v-slide-x-transition"
        )
        v-btn(
          class="purple white--text"
          v-dropdown:dropdown-transition-3=""
        ) Slide Y Transition
        v-dropdown(
          id="dropdown-transition-3"
          v-bind:items="items"
          top
          transition="v-slide-y-transition"
        )
</template>

<script>
  import ItemProps from '../constants/itemable-props'

  export default {
    data () {
      return {
        doc: {
          title: 'Dropdown',
          desc: `The <code>v-dropdown</code> component utilizes the v-dropdown directive to link itself to another element. Once binded, clicking the element, or by hovering (if using the <code>hover</code> parameter), the dropdown will reposition absolutely positioned on top of the selected activator.`,
          props: {
            'v-dropdown': {
              params: [
                [
                  'id',
                  'String',
                  'Required',
                  'Sets the id of the dropdown'
                ],
                [
                  'items',
                  'Object',
                  '[]',
                  'Optionally pass array of items'
                ],
                [
                  'top',
                  'Boolean',
                  'False',
                  'Set top coordinate for dropdown'
                ],
                [
                  'right',
                  'Boolean',
                  'False',
                  'Set right coordinate for dropdown'
                ],
                [
                  'bottom',
                  'Boolean',
                  'False',
                  'Set bottom coordinate for dropdown'
                ],
                [
                  'left',
                  'Boolean',
                  'False',
                  'Set left coordinate for dropdown'
                ],
                [
                  'origin',
                  'String',
                  'top left',
                  'Set the transform-origin of the transition'
                ],
                [
                  'transition',
                  'String',
                  'v-scale-transition',
                  'Set the transition component'
                ]
              ]
            },
            'v-dropdown-item': {
              params: ItemProps
            }
          },
          slots: {
            'v-dropdown': {
              default: true
            }
          }
        },
        items: [
          {
            href: '#!',
            text: 'Click Me'
          },
          {
            href: '#!',
            text: 'Click Me'
          },
          {
            href: '#!',
            text: 'Click Me'
          },
          {
            href: '#!',
            text: 'Click Me 2'
          }
        ]
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
          title: 'Dropdown Component | Vuetify.js',
          h1: 'Dropdowns',
          description: 'Dropdown component for Vuetify Framework',
          keywords: 'vuetify, dropdowns, components'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #dropdowns-view
    .btn
      margin: 1rem
      
    .component-example__container
      .card
        flex: 1
        margin: 1rem
        
        &__text
          height: 200px
</style>