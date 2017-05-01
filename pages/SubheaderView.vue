<template lang="pug">
  doc-view(v-bind:doc="doc" id="subheader-view")
    component-example(header="List subheaders" file="subheaders/1" v-bind:data="$data")
    component-example(header="Grid subheaders" file="subheaders/2" v-bind:data="$data")
    component-example(header="Menu subheaders" file="subheaders/3" v-bind:data="$data")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Subheaders',
          desc: 'The <code>v-subheader</code> component is used to separate sections of lists.',
          props: {
            'v-subheader': {
              params: [
                [
                  'inset',
                  'Boolean',
                  'False',
                  'Adds identation (72px)'
                ]
              ]
            }
          }
        },
        e1: [
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
        ],
        e3: [
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
          title: 'Subheader Component | Vuetify.js',
          h1: 'Subheaders',
          description: 'Subheaders are used for separating lists of content.',
          keywords: 'vuetify, header, subheaders'
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

    .component-example .card
      max-width: 400px
      margin: 0 auto

      .image
        width: 100%

    .toolbar
      height: 64px
      min-height: none
</style>
