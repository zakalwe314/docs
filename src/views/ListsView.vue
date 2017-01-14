<template lang="pug">
  doc-view(v-bind:doc="doc" id="lists-view")
    component-example
      v-card(class="card-view card-1")
        v-navbar(class="cyan")
          v-navbar-toolbar
            v-navbar-side-icon(class="grey--text text--darken-4")
            v-navbar-title Inbox
            v-icon search
        v-card-text
          strong(class="grey--text text--darken-1") Today
        v-card-text
          v-list
            template(v-for="(item, index) in card1")
              v-list-item(v-if="index < 3")
                v-list-item-avatar
                  img(v-bind:src="item.src")
                v-list-item-content
                  v-list-item-title(v-html="item.title")
                  v-list-item-sub-title(v-html="item.subtitle")
    component-example
      v-card(class="card-view card-2")
        v-navbar(class="white--text indigo")
          v-navbar-toolbar
            v-navbar-side-icon
            v-navbar-title Inbox
            v-icon(class="mr-2") search
            v-icon more_vert
        v-card-text
          v-list
            v-list-item(v-for="item in card2")
              v-list-item-action
                v-icon(class="pink--text" v-if="item.icon") star
              v-list-item-content
                v-list-item-title(v-text="item.title")
              v-list-item-avatar
                img(v-bind:src="item.src")
    component-example
      v-card(class="card-view card-2")
        v-navbar(class="light-blue")
          v-navbar-toolbar
            v-navbar-side-icon
            v-spacer
            v-icon(class="mr-4") search
            v-icon view_module
          v-navbar-sub
            div(class="headline white--text") My files
        v-card-text
          v-list
            v-list-item(disabled)
              v-list-item-avatar
              v-list-item-content
                v-list-item-sub-title
                  strong Folders
            v-list-item(v-for="item in card31")
              v-list-item-avatar
                v-icon(v-bind:class="[item.iconClass]") {{ item.icon }}
              v-list-item-content
                v-list-item-title {{ item.title }}
                v-list-item-sub-title {{ item.subtitle }}
              v-list-item-action
                v-btn(icon ripple)
                  v-icon(class="grey--text text--lighten-1") info
            v-list-item(disabled)
              v-list-item-avatar
              v-list-item-content
                v-list-item-sub-title
                  strong Files
            v-list-item(v-for="item in card32")
              v-list-item-avatar
                v-icon(v-bind:class="[item.iconClass]") {{ item.icon }}
              v-list-item-content
                v-list-item-title {{ item.title }}
                v-list-item-sub-title {{ item.subtitle }}
              v-list-item-action
                v-btn(icon ripple)
                  v-icon(class="grey--text text--lighten-1") info
    component-example
      v-card(class="card-view card-1")
        v-navbar(class="cyan")
          v-navbar-toolbar
            v-navbar-side-icon(class="grey--text text--darken-4")
            v-navbar-title Inbox
            v-icon search
        v-card-text
          strong(class="grey--text text--darken-1") Today
        v-card-text
          v-list
            v-list-item(v-for="item in card1")
              v-list-item-avatar
                img(v-bind:src="item.src")
              v-list-item-content
                v-list-item-title(v-html="item.title")
                v-list-item-sub-title(v-html="item.subtitle" clamp)
    component-example
      v-card(class="card-view card-1")
        v-navbar(class="teal")
          v-navbar-toolbar
            v-navbar-side-icon(class="grey--text text--darken-4")
            v-navbar-title(class="text-xs-center") New Chat
            v-icon search
        v-card-text
          strong(class="grey--text text--darken-1") Recent chat
        v-card-text
          v-list
            v-list-item(v-for="item in card41")
              v-list-item-avatar
                img(v-bind:src="item.src")
              v-list-item-content
                v-list-item-title(v-html="item.title")
              v-list-item-action
                v-icon(v-bind:class="[item.active ? 'teal--text' : 'grey--text']") chat_bubble
        v-card-text
          strong(class="grey--text text--darken-1") Previous chats
        v-card-text
          v-list
            v-list-item(v-for="item in card42")
              v-list-item-avatar
                img(v-bind:src="item.src")
              v-list-item-content
                v-list-item-title(v-html="item.title")
    component-example
      v-card(class="card-view card-1")
        v-navbar(class="teal")
          v-navbar-toolbar
            v-navbar-side-icon(class="grey--text text--darken-4")
            v-navbar-title Settings
        v-card-text
          strong(class="grey--text text--darken-1") General
        v-card-text
          v-list
            v-list-item
              v-list-item-content
                v-list-item-title Profile photo
                v-list-item-sub-title Change your Google+ profile photo
            v-list-item
              v-list-item-content
                v-list-item-title Show your status
                v-list-item-sub-title Your status is visible to everyone
        v-card-text
          strong(class="grey--text text--darken-1") Hangout notifications
        v-card-text
          v-list
            v-list-item
              v-list-item-action
                v-checkbox(label="&nbsp;" id="check1" filled)
              v-list-item-content
                v-list-item-title Notifications
                v-list-item-sub-title Allow notifications
            v-list-item
              v-list-item-action
                v-checkbox(label="&nbsp;" id="check2" filled)
              v-list-item-content
                v-list-item-title Sound
                v-list-item-sub-title Hangouts message
            v-list-item
              v-list-item-action
                v-checkbox(label="&nbsp;" id="check3" filled)
              v-list-item-content
                v-list-item-title Video sounds
                v-list-item-sub-title Hangouts vidoe call
            v-list-item
              v-list-item-action
                v-checkbox(label="&nbsp;" id="check4" filled)
              v-list-item-content
                v-list-item-title Invites
                v-list-item-sub-title Notify when receiving invites

    component-example
      v-card(class="card-view card-1")
        v-card-row(img="https://assets.entrepreneur.com/content/16x9/822/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg" height="300px")
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
        v-card-text
          v-list
            v-list-item
              v-list-item-avatar
                v-icon(class="indigo--text") phone
              v-list-item-content
                v-list-item-title (650) 555-1234
                v-list-item-sub-title Mobile
              v-list-item-action
                v-icon chat
            v-list-item
              v-list-item-avatar
              v-list-item-content
                v-list-item-title (323) 555-6789
                v-list-item-sub-title Work
              v-list-item-action
                v-icon chat
            v-list-item
              v-list-item-avatar
                v-icon(class="indigo--text") mail
              v-list-item-content
                v-list-item-title aliconnors@example.com
                v-list-item-sub-title Personal
            v-list-item
              v-list-item-avatar
              v-list-item-content
                v-list-item-title ali_connors@example.com
                v-list-item-sub-title Work
            v-list-item
              v-list-item-avatar
                v-icon(class="indigo--text") location_on
              v-list-item-content
                v-list-item-title 1400 Main Street
                v-list-item-sub-title Orlando, FL 79938

    component-example
      v-card(class="card-view card-1")
        v-navbar(class="white--text pink")
          v-navbar-toolbar
            v-navbar-side-icon
            v-navbar-title Inbox
            v-icon(class="mr-4") search
            v-icon check_circle
        v-card-text
          v-list
            v-list-item(v-for="item in card7")
              v-list-item-content
                v-list-item-title {{ item.title }}
                v-list-item-sub-title
                  span(class="grey--text text--darken-4") {{ item.headline }} <br>
                  v-list-item-sub-title {{ item.subtitle }}
              v-list-item-action
                v-list-item-action-text {{ item.action }}
                v-icon(class="grey--text text--lighten-1") star_border

    component-example
      v-card(class="card-view card-1")
        v-navbar(class="purple white--text")
          v-navbar-toolbar
            v-navbar-side-icon
            v-navbar-title Settings
            v-icon search
        v-card-text
          strong(class="grey--text text--darken-1") User Controls
        v-card-text
          v-list
            v-list-item
              v-list-item-content
                v-list-item-title Content filtering
                v-list-item-sub-title Set the content filtering level to restrict appts that can be downloaded
            v-list-item
              v-list-item-content
                v-list-item-title Password
                v-list-item-sub-title Require password for purchase or use password to restrict purchase
        v-card-text
          strong(class="grey--text text--darken-1") General
        v-card-text
          v-list
            v-list-item
              v-list-item-action
                v-checkbox(label="&nbsp;" id="check4" filled)
              v-list-item-content
                v-list-item-title Notifications
                v-list-item-sub-title Notify me about updates to apps or games that I downloaded
            v-list-item
              v-list-item-action
                v-checkbox(label="&nbsp;" id="check5" filled)
              v-list-item-content
                v-list-item-title Sound
                v-list-item-sub-title Auto-update apps at any time. Data charges may apply
            v-list-item
              v-list-item-action
                v-checkbox(label="&nbsp;" id="check6" filled)
              v-list-item-content
                v-list-item-title Auto-add widgets
                v-list-item-sub-title Automatically add home screen widgets

</template>

<script>
  export default {
    name: 'lists-view',

    data () {
      let srcs = {
        1: 'https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg',
        2: 'http://www.gamasutra.com/db_area/images/news/2016/Sep/281244/metzen.jpg',
        3: 'http://metagearsolid.org/wp-content/uploads/2011/08/blog_newell1.jpg',
        4: 'http://topnews.ae/images/John_Carmack.jpg',
      }

      return {
        card1: [
          { src: srcs[1], title: 'Brunch this weekend?', subtitle: "<span class='grey--text text--darken-2'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
          { src: srcs[2], title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='grey--text text--darken-2'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." },
          { src: srcs[3], title: 'Oui oui', subtitle: "<span class='grey--text text--darken-2'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" },
          { src: srcs[4], title: 'Birthday gift', subtitle: "<span class='grey--text text--darken-2'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?" },
          { src: srcs[1], title: 'Recipe to try', subtitle: "<span class='grey--text text--darken-2'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos." },
        ],
        card7: [
          { action: '15 min', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
          { action: '2 hr', headline: 'Summer BBQ', title: 'me, Scrott, Jennifer', subtitle: "Wish I could come, but I'm out of town this weekend." },
          { action: '6 hr', headline: 'Oui oui', title: 'Sandra Adams', subtitle: "Do you have Paris recommendations? Have you ever been?" },
          { action: '12 hr', headline: 'Birthday gift', title: 'Trevor Hansen', subtitle: "Have any ideas about what we should get Heidi for her birthday?" },
          { action: '18hr', headline: 'Recipe to try', title: 'Britta Holt', subtitle: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos." },
        ],
        card2: [
          { icon: true, title: 'Elon Musk', src: srcs[1] },
          { title: 'Gabe Newell', src: srcs[3] },
          { title: 'Christ Metzen', src: srcs[2] },
          { title: 'John Carmack', src: srcs[4] },
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
          { active: true, title: 'Elon Musk', src: srcs[1] },
          { active: true, title: 'Elon Musk', src: srcs[1] },
          { title: 'Gabe Newell', src: srcs[3] },
          { title: 'Christ Metzen', src: srcs[2] },
          { title: 'John Carmack', src: srcs[4] },
        ],
        card42: [
          { title: 'Elon Musk', src: srcs[1] },
          { title: 'Elon Musk', src: srcs[1] }
        ],
        doc: {
          title: 'List',
          desc: 'The <code>v-list</code> component is used to display, you guessed it, lists!. Combine the list with a <code>v-badge</code> directive or a <code>v-dropdown</code> to enhance and add functionality.',
          functional: {
            'v-list': {
              params: [
                ['v-list-item', 'list__item'],
                ['v-list-title', 'list__item__title'],
                ['v-list-sub-title', 'list__item__sub-title'],
                ['v-list-action', 'list__action'],
                ['v-list-action-title', 'list__action__title'],
                ['v-list-icon', 'list__icon'],
                ['v-list-avatar', 'list__avatar'],
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
      .navbar
        height: auto
        min-height: 55px
        padding-left: 0
        
      &.card-1, &.card-2
        width: 400px
</style>