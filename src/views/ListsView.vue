<template lang="pug">
  doc-view(v-bind:doc="doc")
    component-example(header="Basic")
      v-list
        v-list-item
          v-list-item-title John Leider
        v-list-item 
          v-list-item-title Ranee Leider
        v-list-item 
          v-list-item-title Declan Leider
    component-example(header="With Icon")
      v-list
        v-list-item
          v-list-item-icon person
          v-list-item-title John Leider
        v-list-item 
          v-list-item-icon person
          v-list-item-title Ranee Leider
        v-list-item 
          v-list-item-icon person
          v-list-item-title Declan Leider
    component-example(header="With Avatar")
      v-list
        v-list-item
          a(href="#!", v-dropdown:dropdown="")
            v-list-item-avatar(class="orange", large) event
          v-dropdown(id="dropdown", v-bind:items="items")
          v-list-item-title John Leider
        v-list-item 
          v-list-item-avatar(class="brown", large, v-badge:done.icon="") person
          v-list-item-title Ranee Leider
          v-list-item-action
            a(href="#!", v-dropdown:menu="")
              v-icon(class="blue--text", medium) edit
            v-dropdown(id="menu", v-bind:items="items", right)
        v-list-item 
          v-list-item-avatar(class="green", large) phone
          v-list-item-title
            span Declan Leider
            v-list-item-sub-title Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          v-list-item-action
            v-list-item-action-title Contact
            a(href="#!")
              v-icon(class="grey--text darken-1") email
    markup(slot="markup")
      |&lt;v-list&gt;
      |   &lt;v-list-item&gt;
      |     &lt;v-list-item-title&gt;
      |       ...
      |     &lt;/v-list-item-title&gt;  
      |   &lt;/v-list-item&gt;
      |&lt;/v-list&gt;
      |&nbsp;
      |&lt;v-list&gt;
      |   &lt;v-list-item&gt;
      |     &lt;v-list-item-icon&gt;list&lt;/v-list-item-icon&gt;
      |     &lt;v-list-item-title&gt;
      |       ...
      |     &lt;/v-list-item-title&gt;
      |   &lt;/v-list-item&gt;
      |&lt;/v-list&gt;
      |&nbsp;
      |&lt;v-list&gt;
      |   &lt;v-list-item&gt;
      |     &lt;v-list-item-avatar class="green" large&gt;list&lt;/v-list-item-avatar&gt;
      |     &lt;v-list-item-title&gt;
      |       &lt;span&gt;...&lt;/span&gt;
      |       &lt;v-list-item-sub-title&gt;...&lt;/v-list-item-sub-title&gt;
      |     &lt;/v-list-item-title&gt;
      |     &lt;v-list-item-action&gt;
      |       &lt;v-list-item-action-title&gt;...&lt;/v-list-item-action-title&gt;
      |       &lt;a href="#!"&gt;
      |         &lt;v-icon class="grey--text darken-1"&gt;email&lt;/v-icon&gt;
      |     &lt;/v-list-item-action&gt;
      |   &lt;/v-list-item&gt;
      |&lt;/v-list&gt;
</template>

<script>
  export default {
    name: 'lists-view',

    data () {
      return {
        doc: {
          title: 'List',
          desc: 'Coming Soon',
          types: [
            'comp', 'slot'
          ],
          params: [
            [
              '<code>&lt;v-list&gt;</code>',
              '',
              'Base component'
            ],
            [
              '<code>&lt;v-list-item&gt;</code>',
              '',
              'Functional component'
            ],
            [
              '<code>&lt;v-list-item-title&gt;</code>',
              '',
              'Functional component'
            ],
            [
              '<code>&lt;v-list-item-sub-title&gt;</code>',
              '',
              'Functional component'
            ],
            [
              '<code>&lt;v-list-action&gt;</code>',
              '',
              'Functional component'
            ],
            [
              '<code>&lt;v-list-action-title&gt;</code>',
              '',
              'Functional component'
            ],
            [
              '<code>&lt;v-list-icon&gt;</code>',
              '',
              'Functional component'
            ],
            [
              '<code>&lt;v-list-avatar&gt;</code>',
              '',
              'Functional component'
            ]
          ]
        },
        items: [
          {
            href: '#!',
            text: 'Profile'
          },
          {
            href: '#!',
            text: 'Message'
          },
          {
            href: '#!',
            text: 'Friend Request'
          }
        ]
      }
    },

    mounted () {
      this.$emit('view', 'Lists')
    }
  }
</script>