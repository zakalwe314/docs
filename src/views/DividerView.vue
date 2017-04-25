<template lang="pug">
  doc-view(v-bind:doc="doc" id="subheader-view")
    component-example(header="Full bleed" file="dividers/1" v-bind:data="$data")
    component-example(file="dividers/2" v-bind:data="$data")
    component-example(header="Inset dividers" file="dividers/3" v-bind:data="$data")
    component-example(header="Subheaders and dividers" file="dividers/4" v-bind:data="$data")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Dvididers',
          desc: 'The <code>v-divider</code> component is used to separate sections of lists.',
          props: {
            'v-divider': {
              params: [
                [
                  'inset',
                  'Boolean',
                  'False',
                  'Applies a margin-left of 72px'
                ],
                [
                  'light',
                  'Boolean',
                  'False',
                  'Changes color for darker backgrounds'
                ]
              ]
            }
          }
        },
        e1: [
          { action: '15 min', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
          { action: '2 hr', headline: 'Summer BBQ', title: 'me, Scrott, Jennifer', subtitle: "Wish I could come, but I'm out of town this weekend." },
          { action: '6 hr', headline: 'Oui oui', title: 'Sandra Adams', subtitle: "Do you have Paris recommendations? Have you ever been?" },
          { action: '12 hr', headline: 'Birthday gift', title: 'Trevor Hansen', subtitle: "Have any ideas about what we should get Heidi for her birthday?" },
          { action: '18hr', headline: 'Recipe to try', title: 'Britta Holt', subtitle: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos." },
        ],
        e2: [
          {
            action: 'move_to_inbox',
            title: 'Inbox'
          },
          {
            action: 'send',
            title: 'Sent'
          },
          {
            action: 'delete',
            title: 'Trash',
          },
          {
            action: 'report',
            title: 'Spam'
          },
          { divider: true },
          { header: 'Labels' },
          {
            action: 'label',
            title: 'Family'
          },
          {
            action: 'label',
            title: 'Friends'
          },
          {
            action: 'label',
            title: 'Work',
          }
        ],
        e31: [
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' }
        ],
        e32: [
          { icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
          { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' },
        ],
        e4: [
          { header: 'Today' },
          { avatar: '/public/doc-images/lists/1.jpg', title: 'Brunch this weekend?', subtitle: "<span class='grey--text text--darken-2'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
          { divider: true, inset: true },
          { avatar: '/public/doc-images/lists/2.jpg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='grey--text text--darken-2'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." },
          { divider: true, inset: true },
          { avatar: '/public/doc-images/lists/3.jpg', title: 'Oui oui', subtitle: "<span class='grey--text text--darken-2'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" },
          { divider: true, inset: true },
          { avatar: '/public/doc-images/lists/4.jpg', title: 'Birthday gift', subtitle: "<span class='grey--text text--darken-2'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?" },
          { divider: true, inset: true },
          { avatar: '/public/doc-images/lists/5.jpg', title: 'Recipe to try', subtitle: "<span class='grey--text text--darken-2'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos." },
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
          title: 'Divider Component | Vuetify.js',
          h1: 'Dividers',
          description: 'Dividers are used for separating lists of content.',
          keywords: 'vuetify, header, divider'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #subheader-view
    .grid
      max-height: 500px
      overflow-y: auto

    .component-example
      position: relative
      z-index: 1

      .card
        max-width: 400px
        margin: 0 auto

      .image
        width: 100%

    .toolbar
      height: 64px
      min-height: none
</style>
