<template lang="pug">
  doc-view(v-bind:doc="doc" id="lists-view")
    //- Example 1
    component-example(header="Avatar with 2 lines" file="lists/1")
      v-card(class="card-view")
        v-navbar(class="cyan")
          v-navbar-toolbar
            v-navbar-side-icon(class="grey--text text--darken-4")
            v-navbar-title Inbox
            v-icon search
        v-list(two-line v-bind:items="card1.slice(0, 6)")
    markup(lang="js")
      |list: [
      |  { avatar: '...', title: 'Brunch this weekend?', subtitle: "..." },
      |  { avatar: '...', title: 'Summer BBQ', subtitle: "..." },
      |  { avatar: '...', title: 'Qui Qui', subtitle: "..." }
      |]

    //- Example 2
    component-example(header="Avatar with title and action" file="lists/2")
      v-card(class="card-view")
        v-navbar(class="white--text indigo")
          v-navbar-toolbar
            v-navbar-side-icon
            v-navbar-title Inbox
            v-icon(class="mr-2") search
            v-icon more_vert
        v-list
          v-list-row(v-for="item in card2")
            v-list-tile
              v-list-tile-action
                v-icon(class="pink--text" v-if="item.icon") star
              v-list-tile-content
                v-list-tile-title(v-text="item.title")
              v-list-tile-avatar
                img(v-bind:src="item.avatar")

    //- Example 3
    component-example(header="Icons with 2 lines and action" file="lists/3")
      v-card(class="card-view")
        v-navbar(class="light-blue")
          v-navbar-toolbar
            v-navbar-side-icon
            v-spacer
            v-icon(class="mr-4") search
            v-icon view_module
          v-navbar-sub
            div(class="headline white--text") My files
        v-list(two-line)
          v-list-sub-header(inset) Folders
          v-list-row(v-for="item in card31")
            v-list-tile
              v-list-tile-avatar
                v-icon(v-bind:class="[item.iconClass]") {{ item.icon }}
              v-list-tile-content
                v-list-tile-title {{ item.title }}
                v-list-tile-sub-title {{ item.subtitle }}
              v-list-tile-action
                v-btn(icon ripple)
                  v-icon(class="grey--text text--lighten-1") info
          v-divider(inset)
          v-list-sub-header(inset) Files
          v-list-row(v-for="item in card32")
            v-list-tile
              v-list-tile-avatar
                v-icon(v-bind:class="[item.iconClass]") {{ item.icon }}
              v-list-tile-content
                v-list-tile-title {{ item.title }}
                v-list-tile-sub-title {{ item.subtitle }}
              v-list-tile-action
                v-btn(icon ripple)
                  v-icon(class="grey--text text--lighten-1") info

    //- Example 4
    component-example(header="Avatar with title and clamped sub-title" file="lists/4")
      v-card(class="card-view")
        v-navbar(class="cyan")
          v-navbar-toolbar
            v-navbar-side-icon(class="grey--text text--darken-4")
            v-navbar-title Inbox
            v-icon search
        v-list(three-line v-bind:items="card1")
    blockquote The clamped prop uses <code>-webkit-line-clamp</code> which is not supported on all browsers.

    //- Example 5
    component-example(header="Avatar with title and action" file="lists/5")
      v-card(class="card-view")
        v-navbar(class="teal")
          v-navbar-toolbar
            v-navbar-side-icon(class="grey--text text--darken-4")
            v-navbar-title(class="text-xs-center") New Chat
            v-icon search
        v-list
          v-list-sub-header Recent chat
          v-list-row(v-for="item in card41")
            v-list-tile
              v-list-tile-avatar
                img(v-bind:src="item.avatar")
              v-list-tile-content
                v-list-tile-title(v-html="item.title")
              v-list-tile-action
                v-icon(v-bind:class="[item.active ? 'teal--text' : 'grey--text']") chat_bubble
        v-divider
        v-list
          v-list-sub-header Previous chats
          v-list-row(v-for="item in card42")
            v-list-tile
              v-list-tile-avatar
                img(v-bind:src="item.avatar")
              v-list-tile-content
                v-list-tile-title(v-html="item.title")

    //- Example 6
    component-example(header="Action with title and sub-title" file="lists/6")
      v-card(class="card-view")
        v-navbar(class="teal")
          v-navbar-toolbar
            v-navbar-side-icon(class="grey--text text--darken-4")
            v-navbar-title Settings
        v-list(two-line)
          v-list-sub-header General
          v-list-row
            v-list-tile
              v-list-tile-content
                v-list-tile-title Profile photo
                v-list-tile-sub-title Change your Google+ profile photo
          v-list-row
            v-list-tile
              v-list-tile-content
                v-list-tile-title Show your status
                v-list-tile-sub-title Your status is visible to everyone
        v-divider
        v-list(two-line)
          v-list-sub-header Hangout notifications
          v-list-row
            v-list-tile
              v-list-tile-action
                v-checkbox(label="&nbsp;" id="check1" filled)
              v-list-tile-content
                v-list-tile-title Notifications
                v-list-tile-sub-title Allow notifications
          v-list-row
            v-list-tile
              v-list-tile-action
                v-checkbox(label="&nbsp;" id="check2" filled)
              v-list-tile-content
                v-list-tile-title Sound
                v-list-tile-sub-title Hangouts message
          v-list-row
            v-list-tile
              v-list-tile-action
                v-checkbox(label="&nbsp;" id="check3" filled)
              v-list-tile-content
                v-list-tile-title Video sounds
                v-list-tile-sub-title Hangouts vidoe call
          v-list-row
            v-list-tile
              v-list-tile-action
                v-checkbox(label="&nbsp;" id="check4" filled)
              v-list-tile-content
                v-list-tile-title Invites
                v-list-tile-sub-title Notify when receiving invites

    //- Example 7
    component-example(header="Card image with toolbar and list" file="lists/7")
      v-card(class="card-view")
        v-card-row(img="/public/doc-images/lists/alison.jpeg" height="300px")
          v-card-text(class="white--text pa-0")
            v-card-title
              v-btn(icon)
                v-icon chevron_left
              v-spacer
              v-btn(icon class="mr-3")
                v-icon edit
              v-btn(icon)
                v-icon more_vert
            v-card-row(height="100%" class="pl-5 pt-5")
              div(class="display-1 pl-5 pt-5") Ali Conners
        v-list(two-line)
          v-list-row
            v-list-tile
              v-list-tile-avatar
                v-icon(class="indigo--text") phone
              v-list-tile-content
                v-list-tile-title (650) 555-1234
                v-list-tile-sub-title Mobile
              v-list-tile-action
                v-icon chat
          v-list-row
            v-list-tile
              v-list-tile-avatar
              v-list-tile-content
                v-list-tile-title (323) 555-6789
                v-list-tile-sub-title Work
              v-list-tile-action
                v-icon chat
          v-divider(inset)
          v-list-row
            v-list-tile
              v-list-tile-avatar
                v-icon(class="indigo--text") mail
              v-list-tile-content
                v-list-tile-title aliconnors@example.com
                v-list-tile-sub-title Personal
          v-list-row
            v-list-tile
              v-list-tile-avatar
              v-list-tile-content
                v-list-tile-title ali_connors@example.com
                v-list-tile-sub-title Work
          v-divider(inset)
          v-list-row
            v-list-tile
              v-list-tile-avatar
                v-icon(class="indigo--text") location_on
              v-list-tile-content
                v-list-tile-title 1400 Main Street
                v-list-tile-sub-title Orlando, FL 79938

    //- Example 8
    component-example(header="Title with sub-title, actions and action-text" file="lists/8")
      v-card(class="card-view")
        v-navbar(class="white--text pink")
          v-navbar-toolbar
            v-navbar-side-icon
            v-navbar-title Inbox
            v-icon(class="mr-4") search
            v-icon check_circle
        v-list(two-line)
          v-list-row(v-for="(item, index) in card7")
            v-list-tile
              v-list-tile-content
                v-list-tile-title {{ item.title }}
                v-list-tile-sub-title(class="grey--text text--darken-4") {{ item.headline }}
                v-list-tile-sub-title {{ item.subtitle }}
              v-list-tile-action
                v-list-tile-action-text {{ item.action }}
                v-icon(class="grey--text text--lighten-1") star_border
            v-divider(v-if="index + 1 < card7.length")

    //- Example 9
    component-example(header="Action with title and sub-title" file="lists/9")
      v-card(class="card-view")
        v-navbar(class="purple white--text")
          v-navbar-toolbar
            v-navbar-side-icon
            v-navbar-title Settings
            v-icon search
        v-list-sub-header User Controls
        v-list(three-line)
          v-list-row
            v-list-tile
              v-list-tile-content
                v-list-tile-title Content filtering
                v-list-tile-sub-title Set the content filtering level to restrict appts that can be downloaded
          v-list-row
            v-list-tile
              v-list-tile-content
                v-list-tile-title Password
                v-list-tile-sub-title Require password for purchase or use password to restrict purchase
        v-divider
        v-list-sub-header General
        v-list(three-line)
          v-list-row
            v-list-tile
              v-list-tile-action
                v-checkbox(label="&nbsp;" id="check5" filled)
              v-list-tile-content
                v-list-tile-title Notifications
                v-list-tile-sub-title Notify me about updates to apps or games that I downloaded
          v-list-row
            v-list-tile
              v-list-tile-action
                v-checkbox(label="&nbsp;" id="check6" filled)
              v-list-tile-content
                v-list-tile-title Sound
                v-list-tile-sub-title Auto-update apps at any time. Data charges may apply
          v-list-row
            v-list-tile
              v-list-tile-action
                v-checkbox(label="&nbsp;" id="check7" filled)
              v-list-tile-content
                v-list-tile-title Auto-add widgets
                v-list-tile-sub-title Automatically add home screen widgets
    markup(lang="stylus")
      |.card
      |   width: 400px
      |&nbsp;
      |   .navbar
      |     height: auto
      |     min-height: 55px
      |     padding-left: 0
</template>

<script>
  export default {
    name: 'lists-view',

    data () {
      let srcs = {
        1: '/public/doc-images/lists/elon.jpg',
        2: '/public/doc-images/lists/carmack.jpg',
        3: '/public/doc-images/lists/seth.jpg',
        4: '/public/doc-images/lists/gabe.jpg',
        5: '/public/doc-images/lists/jobs.jpg'
      }

      return {
        card1: [
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
        card2: [
          { icon: true, title: 'Elon Musk', avatar: srcs[1] },
          { title: 'Gabe Newell', avatar: srcs[3] },
          { title: 'Christ Metzen', avatar: srcs[2] },
          { title: 'John Carmack', avatar: srcs[4] },
        ],
        card31: [
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' }
        ],
        card32: [
          { icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
          { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' },
        ],
        card41: [
          { active: true, title: 'Elon Musk', avatar: srcs[1] },
          { active: true, title: 'Steve Jobs', avatar: srcs[5] },
          { title: 'Gabe Newell', avatar: srcs[4] },
          { title: 'Seth Macfarlane', avatar: srcs[3] },
        ],
        card42: [
          { title: 'John Carmack', avatar: srcs[2] },
        ],
        card7: [
          { action: '15 min', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
          { action: '2 hr', headline: 'Summer BBQ', title: 'me, Scrott, Jennifer', subtitle: "Wish I could come, but I'm out of town this weekend." },
          { action: '6 hr', headline: 'Oui oui', title: 'Sandra Adams', subtitle: "Do you have Paris recommendations? Have you ever been?" },
          { action: '12 hr', headline: 'Birthday gift', title: 'Trevor Hansen', subtitle: "Have any ideas about what we should get Heidi for her birthday?" },
          { action: '18hr', headline: 'Recipe to try', title: 'Britta Holt', subtitle: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos." },
        ],
        doc: {
          title: 'List',
          desc: 'The <code>v-list</code> component is used to display information. It can contain an avatar, content and an action. Lists are the basis for other component functionality such as the sidebar, toolbar and dropdowns.',
          props: {
            'v-list-item': {
              params: [
                ['disabled', 'Boolean', 'False', 'Disables the item']
              ]
            },
            'v-list-item-sub-title': {
              params: [
                ['clamped', 'Boolean', 'False', 'Clamps text at 2 lines, does not work in all browsers']
              ]
            }
          },

          functional: {
            'v-list': {
              params: [
                ['v-list-item-action', 'list__item__action'],
                ['v-list-item-action-text', 'list__item__action-text'],
                ['v-list-item-avatar', 'list__item__avatar'],
                ['v-list-item-content', 'list__item__content'],
                ['v-list-item-title', 'list__item__title']
              ]
            }
          }
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
          title: 'List Component | Vuetify.js',
          h1: 'Lists',
          description: 'List component for Vuetify Framework',
          keywords: 'vuetify, lists, components'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #lists-view
    .card-view
      width: 400px
      .navbar
        height: auto
        min-height: 55px
        padding-left: 0
</style>