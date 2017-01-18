<template lang="pug">
  doc-view(v-bind:doc="doc" id="lists-view")
    //- Example 1
    component-example(header="Avatar with 2 lines" file="lists/1")
      section-text(slot="details") Lists can take an array of list items. When given an array, the list component will figure out the classes that are needed depending on what it was given. You can also define headers and dividers here.
      v-card(class="card-view")
        v-navbar(class="cyan")
          v-navbar-toolbar
            v-navbar-side-icon(class="grey--text text--darken-4")
            v-navbar-title Inbox
            v-icon search
        v-list(two-line v-bind:items="e1.slice(0, 6)")
    markup(lang="js")
      |list: [
      |   { header: 'Today' },
      |   { avatar: '...', title: 'Brunch this weekend?', subtitle: "..." },
      |   { divider: true, inset: true },
      |   { avatar: '...', title: 'Summer BBQ', subtitle: "..." },
      |   { divider: true, inset: true },
      |   { avatar: '...', title: 'Qui Qui', subtitle: "..." }
      |]

    //- Example 2
    component-example(header="Avatar with title and action" file="lists/2")
      section-text(slot="details") Lists also contain slots for a more explicit approach.
      v-card(class="card-view")
        v-navbar(class="white--text indigo")
          v-navbar-toolbar
            v-navbar-side-icon
            v-navbar-title Inbox
            v-icon(class="mr-2") search
            v-icon more_vert
        v-list
          v-list-item(v-for="item in e2")
            v-list-tile(avatar)
              v-list-tile-action
                v-icon(class="pink--text" v-if="item.icon") star
              v-list-tile-content
                v-list-tile-title(v-text="item.title")
              v-list-tile-avatar
                img(v-bind:src="item.avatar")

    //- Example 3
    component-example(header="Icons with 2 lines and action" file="lists/3")
      section-text(slot="details") Lists can contain sub-headers, dividers, and be specified as more than 1 line.
      v-card(class="card-view")
        v-navbar(class="light-blue")
          v-navbar-toolbar
            v-navbar-side-icon
            v-spacer
            v-icon(class="mr-4") search
            v-icon view_module
          v-navbar-sub
            div(class="headline white--text") My files
        v-list(two-line sub-header)
          v-list-sub-header(inset) Folders
          v-list-item(v-for="item in e31")
            v-list-tile(avatar)
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
          v-list-item(v-for="item in e32")
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
        v-list(three-line v-bind:items="e1")
    blockquote The clamped prop uses <code>-webkit-line-clamp</code> which is not supported on all browsers.

    //- Example 5
    component-example(header="Avatar with title and action" file="lists/5")
      section-text(slot="details") When a lists slot is used, in order to obtain the proper spacing, you must manually define whether it contains headers, or if the items contain an avatar.
      v-card(class="card-view")
        v-navbar(class="teal")
          v-navbar-toolbar
            v-navbar-side-icon(class="grey--text text--darken-4")
            v-navbar-title(class="text-xs-center") New Chat
            v-icon search
        v-list(sub-header)
          v-list-sub-header Recent chat
          v-list-item(v-for="item in e41")
            v-list-tile(avatar)
              v-list-tile-avatar
                img(v-bind:src="item.avatar")
              v-list-tile-content
                v-list-tile-title(v-html="item.title")
              v-list-tile-action
                v-icon(v-bind:class="[item.active ? 'teal--text' : 'grey--text']") chat_bubble
        v-divider
        v-list(sub-header)
          v-list-sub-header Previous chats
          v-list-item(v-for="item in e42")
            v-list-tile(avatar)
              v-list-tile-avatar
                img(v-bind:src="item.avatar")
              v-list-tile-content
                v-list-tile-title(v-html="item.title")

    //- Example 6
    component-example(header="Action with title and sub-title" file="lists/6")
      section-text(slot="details") A list can contain an input that is actionable.
      v-card(class="card-view")
        v-navbar(class="teal")
          v-navbar-toolbar
            v-navbar-side-icon(class="grey--text text--darken-4")
            v-navbar-title Settings
        v-list(two-line sub-header)
          v-list-sub-header General
          v-list-item
            v-list-tile(avatar)
              v-list-tile-content
                v-list-tile-title Profile photo
                v-list-tile-sub-title Change your Google+ profile photo
          v-list-item
            v-list-tile(avatar)
              v-list-tile-content
                v-list-tile-title Show your status
                v-list-tile-sub-title Your status is visible to everyone
        v-divider
        v-list(two-line sub-header)
          v-list-sub-header Hangout notifications
          v-list-item
            v-list-tile(avatar)
              v-list-tile-action
                v-checkbox(label="&nbsp;" id="check-e6-1" filled)
              v-list-tile-content
                v-list-tile-title Notifications
                v-list-tile-sub-title Allow notifications
          v-list-item
            v-list-tile(avatar)
              v-list-tile-action
                v-checkbox(label="&nbsp;" id="check-e6-2" filled)
              v-list-tile-content
                v-list-tile-title Sound
                v-list-tile-sub-title Hangouts message
          v-list-item
            v-list-tile(avatar)
              v-list-tile-action
                v-checkbox(label="&nbsp;" id="check-e6-3" filled)
              v-list-tile-content
                v-list-tile-title Video sounds
                v-list-tile-sub-title Hangouts vidoe call
          v-list-item
            v-list-tile(avatar)
              v-list-tile-action
                v-checkbox(label="&nbsp;" id="check-e6-4" filled)
              v-list-tile-content
                v-list-tile-title Invites
                v-list-tile-sub-title Notify when receiving invites

    //- Example 7
    component-example(header="Card image with toolbar and list" file="lists/7")
      section-text(slot="details") A list can be combined with a card.
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
          v-list-item
            v-list-tile(avatar)
              v-list-tile-avatar
                v-icon(class="indigo--text") phone
              v-list-tile-content
                v-list-tile-title (650) 555-1234
                v-list-tile-sub-title Mobile
              v-list-tile-action
                v-icon chat
          v-list-item
            v-list-tile(avatar)
              v-list-tile-avatar
              v-list-tile-content
                v-list-tile-title (323) 555-6789
                v-list-tile-sub-title Work
              v-list-tile-action
                v-icon chat
          v-divider(inset)
          v-list-item
            v-list-tile(avatar)
              v-list-tile-avatar
                v-icon(class="indigo--text") mail
              v-list-tile-content
                v-list-tile-title aliconnors@example.com
                v-list-tile-sub-title Personal
          v-list-item
            v-list-tile(avatar)
              v-list-tile-avatar
              v-list-tile-content
                v-list-tile-title ali_connors@example.com
                v-list-tile-sub-title Work
          v-divider(inset)
          v-list-item
            v-list-tile(avatar)
              v-list-tile-avatar
                v-icon(class="indigo--text") location_on
              v-list-tile-content
                v-list-tile-title 1400 Main Street
                v-list-tile-sub-title Orlando, FL 79938

    //- Example 8
    component-example(header="Title with sub-title, actions and action-text" file="lists/8")
      section-text(slot="details") A list can contain a stack within an action. Ripple and router props can be passed through the main v-list, to the v-list-tile or as a property in the items array.
      v-card(class="card-view")
        v-navbar(class="white--text pink")
          v-navbar-toolbar
            v-navbar-side-icon
            v-navbar-title Inbox
            v-icon(class="mr-4") search
            v-icon check_circle
        v-list(two-line)
          v-list-item(v-for="(item, index) in e7")
            v-list-tile(avatar ripple)
              v-list-tile-content
                v-list-tile-title {{ item.title }}
                v-list-tile-sub-title(class="grey--text text--darken-4") {{ item.headline }}
                v-list-tile-sub-title {{ item.subtitle }}
              v-list-tile-action
                v-list-tile-action-text {{ item.action }}
                v-icon(class="grey--text text--lighten-1") star_border
            v-divider(v-if="index + 1 < e7.length")

    //- Example 9
    component-example(header="Action with title and sub-title" file="lists/9")
      section-text(slot="details") A list can contain up to 3 lines.
      v-card(class="card-view")
        v-navbar(class="purple white--text")
          v-navbar-toolbar
            v-navbar-side-icon
            v-navbar-title Settings
            v-icon search
        v-list(three-line sub-header)
          v-list-sub-header User Controls
          v-list-item
            v-list-tile(avatar)
              v-list-tile-content
                v-list-tile-title Content filtering
                v-list-tile-sub-title Set the content filtering level to restrict appts that can be downloaded
          v-list-item
            v-list-tile(avatar)
              v-list-tile-content
                v-list-tile-title Password
                v-list-tile-sub-title Require password for purchase or use password to restrict purchase
        v-divider
        v-list(three-line sub-header)
          v-list-sub-header General
          v-list-item
            v-list-tile(avatar)
              v-list-tile-action
                v-checkbox(label="&nbsp;" id="check-e9-1" filled)
              v-list-tile-content
                v-list-tile-title Notifications
                v-list-tile-sub-title Notify me about updates to apps or games that I downloaded
          v-list-item
            v-list-tile(avatar)
              v-list-tile-action
                v-checkbox(label="&nbsp;" id="check-e9-2" filled)
              v-list-tile-content
                v-list-tile-title Sound
                v-list-tile-sub-title Auto-update apps at any time. Data charges may apply
          v-list-item
            v-list-tile(avatar)
              v-list-tile-action
                v-checkbox(label="&nbsp;" id="check-e9-3" filled)
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
        e1: [
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
        e2: [
          { icon: true, title: 'Elon Musk', avatar: srcs[1] },
          { title: 'Gabe Newell', avatar: srcs[3] },
          { title: 'Christ Metzen', avatar: srcs[2] },
          { title: 'John Carmack', avatar: srcs[4] },
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
        e41: [
          { active: true, title: 'Elon Musk', avatar: srcs[1] },
          { active: true, title: 'Steve Jobs', avatar: srcs[5] },
          { title: 'Gabe Newell', avatar: srcs[4] },
          { title: 'Seth Macfarlane', avatar: srcs[3] },
        ],
        e42: [
          { title: 'John Carmack', avatar: srcs[2] },
        ],
        e7: [
          { action: '15 min', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
          { action: '2 hr', headline: 'Summer BBQ', title: 'me, Scrott, Jennifer', subtitle: "Wish I could come, but I'm out of town this weekend." },
          { action: '6 hr', headline: 'Oui oui', title: 'Sandra Adams', subtitle: "Do you have Paris recommendations? Have you ever been?" },
          { action: '12 hr', headline: 'Birthday gift', title: 'Trevor Hansen', subtitle: "Have any ideas about what we should get Heidi for her birthday?" },
          { action: '18hr', headline: 'Recipe to try', title: 'Britta Holt', subtitle: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos." },
        ],
        doc: {
          title: 'List',
          desc: 'The <code>v-list</code> component is used to display information. It can contain an avatar, content, actions, sub-headers and much more. Lists can contain children and are used in the sidebar.',
          props: {
            'v-list': {
              params: [
                [
                  'dense',
                  'Boolean',
                  'False',
                  'Applies the list--dense class'
                ],
                [
                  'sub-header',
                  'Boolean',
                  'False',
                  'Applies the list--sub-header class'
                ],
                [
                  'items',
                  'Array',
                  '[]',
                  'Array of list tiles, sub-headers and dividers. See example 1 for an example array.'
                ],
                [
                  'two-line',
                  'Boolean',
                  'False',
                  'Applies the list--two-line class'
                ],
                [
                  'three-line',
                  'Boolean',
                  'False',
                  'Applies the list--three-line class'
                ],
                [
                  'router',
                  'Boolean',
                  'False',
                  'Designates whether the list tiles will be a router-link, only needed when items prop is used'
                ],
                [
                  'ripple',
                  'Boolean',
                  'False',
                  'Designates whether the list tiles will attach the ripple directive, only needed when items prop is used'
                ]
              ]
            },
            'v-list-tile': {
              params: [
                [
                  'avatar',
                  'Boolean',
                  'False',
                  'Applies the list__tile--avatar class'
                ],
                [
                  'disabled',
                  'Boolean',
                  'False',
                  'Applies the list__tile--disabled class'
                ],
                [
                  'item',
                  'Object',
                  `{ href: 'javascript:;', title: false, subtitle: false, icon: false, router: false, ripple: false, action: false, disabled: false }`,
                  'The list-tile object. The action property can be an object containing a class or text property'
                ]
              ]
            },
            'v-list-tile-action': {
              params: [
                [
                  'stack',
                  'Boolean',
                  'False',
                  'Applies the list__tile__action--stack class. Automatically applied if array is used and action-text property exists.'
                ]
              ]
            },
            'v-list-sub-header': {
              params: [
                [
                  'inset',
                  'Boolean',
                  'False',
                  'Applies the list__sub-header--inset class'
                ]
              ]
            }
          },
          functional: {
            'v-list': {
              params: [
                ['v-list-item', 'list__item'],
                ['v-list-tile-action-text', 'list__tile__action-text'],
                ['v-list-tile-avatar', 'list__tile__avatar'],
                ['v-list-tile-content', 'list__tile__content'],
                ['v-list-tile-title', 'list__tile__title'],
                ['v-list-tile-sub-title', 'list__tile__sub-title']
              ]
            }
          },
          slots: {
            'v-list': {
              default: true
            },
            'v-list-item': {
              default: true
            },
            'v-list-tile': {
              default: true
            },
            'v-list-tile-content': {
              default: true
            },
            'v-list-tile-title': {
              default: true
            },
            'v-list-tile-sub-title': {
              default: true
            },
            'v-list-tile-action': {
              default: true
            },
            'v-list-tile-action-text': {
              default: true
            },
            'v-list-tile-avatar': {
              default: true
            },
            'v-list-sub-header': {
              default: true
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