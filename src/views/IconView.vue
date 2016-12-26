<template lang="pug">
  doc-view(v-bind:doc="doc" id="icons")
    component-example(header="Standard (small)")
      v-icon(class="grey--text text--darken-2") home
      v-icon(class="grey--text text--darken-2") event
      v-icon(class="grey--text text--darken-2") info
      v-icon(class="grey--text text--darken-2") folder_open
      v-icon(class="grey--text text--darken-2") widgets
      v-icon(class="grey--text text--darken-2") gavel
    component-example(header="Medium")
      v-icon(medium class="grey--text text--darken-2") lock
      v-icon(medium class="grey--text text--darken-2") search
      v-icon(medium class="grey--text text--darken-2") settings
      v-icon(medium class="grey--text text--darken-2") pets
      v-icon(medium class="grey--text text--darken-2") settings_voice
      v-icon(medium class="grey--text text--darken-2") schedule
    component-example(header="Large")
      v-icon(large class="grey--text text--darken-2") note
      v-icon(large class="grey--text text--darken-2") mic
      v-icon(large class="grey--text text--darken-2") new_releases
      v-icon(large class="grey--text text--darken-2") equalizer
      v-icon(large class="grey--text text--darken-2") repeat_one
      v-icon(large class="grey--text text--darken-2") replay
    component-example(header="X-Large")
      v-icon(x-large class="grey--text text--darken-2") view_week
      v-icon(x-large class="grey--text text--darken-2") radio
      v-icon(x-large class="grey--text text--darken-2") bluetooth
      v-icon(x-large class="grey--text text--darken-2") pause
      v-icon(x-large class="grey--text text--darken-2") add_to_queue
      v-icon(x-large class="grey--text text--darken-2") battery_std
    component-example(header="Color")
      v-icon(large class="green--text text--darken-2") business
      v-icon(large class="blue--text text--darken-2") chat
      v-icon(large class="purple--text text--darken-2") dialpad
      v-icon(large class="teal--text text--darken-2") email
      v-icon(large class="blue-grey--text text--darken-2") call_split
      v-icon(large class="orange--text text--darken-2") present_to_all
    component-example(header="Buttons")
      v-btn(class="primary white--text")
        | Accept
        v-icon(right) check_circle
      v-btn(class="red white--text")
        | Decline
        v-icon(right) block
      v-btn(class="grey lighten-2")
        v-icon(left) remove_circle
        | Cancel
      v-btn(class="orange darken-2 white--text")
        v-icon(left) arrow_back
        | Back
      v-btn(class="purple white--text")
        v-icon build
      v-btn(class="indigo white--text")
        v-icon backup
      v-btn(icon class="blue--text text--lighten-2")
        v-icon thumb_up
      v-btn(icon class="red--text text--lighten-2")
        v-icon thumb_down
    markup(lang="html" slot="markup")
      |&lt;v-icon&gt;business&lt;/v-icon&gt;
      |&nbsp;
      |&lt;v-icon medium&gt;new_releases&lt;/v-icon&gt;
      |&nbsp;
      |&lt;v-icon large&gt;note&lt;/v-icon&gt;
      |&nbsp;
      |&lt;v-icon x-large&gt;check_circle&lt;/v-icon&gt;
      |&nbsp;
      |&lt;v-icon x-large class="green-text text--darken-1"&gt;building&lt;/v-icon&gt;
      |&nbsp;
      |&lt;v-btn&gt;
      |   Decline
      |   &lt;v-icon right&gt;remove&lt;/v-icon&gt;
      |&lt;/v-btn&gt;
      |&nbsp;
      |&lt;v-btn&gt;
      |   &lt;v-icon&gt;build&lt;/v-icon&gt;
      |&lt;/v-btn&gt;
      |&nbsp;
      |&lt;v-btn icon&gt;
      |   &lt;v-icon class="blue--text text--lighten-2"&gt;&lt;/v-icon&gt;
      |&lt;/v-btn&gt;
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Icons',
          desc: 'The <code>v-icon</code> component provides a large set of glyphs to provide context to various aspects of your application. Vuetify icons utilize Google\'s Material Icons font library. For a list of all available icons, visit the official <a href="https://material.io/icons/" target="_blank">Material Icons</a> page.',
          params: [
            [
              '<code>&lt;v-icon&gt;</code>',
              '',
              'Base component'
            ],
            [
              '<code>medium</code>',
              'Applies the icon--medium class',
              'Default: false'
            ],
            [
              '<code>large</code>',
              'Applies the icon--large class',
              'Default: false'
            ],
            [
              '<code>x-large</code>',
              'Applies the icon--x-large class',
              'Default: false'
            ],
            [
              '<code>left</code>',
              'Applies the icon--left class',
              'Default: false'
            ],
            [
              '<code>right</code>',
              'Applies the icon--right class',
              'Default: false'
            ]
          ]
        }
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
          title: 'Icon Component | Vuetify.js',
          h1: 'Icons',
          description: 'Icon component for Vuetify Framework',
          keywords: 'vuetify, icons, material design icons'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #icons
    .component-example
      > .icon
        margin: 1rem
        
      > .btn
        margin: 1rem
</style>