<template lang="pug">
  doc-view(v-bind:doc="doc" id="lists-view")
    //- Example 1
    component-example(header="Avatar with 2 lines" v-bind:data="example" file="lists/1")
      section-text(slot="details") Lists can take an array of list items. When given an array, the list component will figure out the classes that are needed depending on what it was given. You can also define headers or dividers within the items array.
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
    component-example(header="Avatar with title and action" v-bind:data="example" file="lists/2")
      section-text(slot="details") Lists also contain slots for a more explicit approach. If you choose this approach, remember you must provide additional props for correct spacing. In this example, we have a tile with an avatar, so we must provide an <code>avatar</code> property.

    //- Example 3
    component-example(header="Icons with 2 lines and action" v-bind:data="example" file="lists/3")
      section-text(slot="details") Lists can contain subheaders, dividers, and can contain 1 or more lines. The subtitle will overflow with ellipsis if it extends past one line.

    //- Example 4
    component-example(header="Avatar with 3 lines" v-bind:data="example" file="lists/4")
      section-text(slot="details") For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. If you need more than 3 lines, it is adviced to use a <router-link to="/components/cards">card</router-link>.

    blockquote The three-line prop uses <code>-webkit-line-clamp</code> which is not supported on all browsers. If not supposed, the line will just continue to wrap.

    //- Example 5
    component-example(header="Avatar with title and action" v-bind:data="example" file="lists/5")
      section-text(slot="details") When a lists slot is used, you must manually define whether it contains headers, or if the items contain an avatar. This is required to maintain proper spacing.

    //- Example 6
    component-example(header="Action with title and sub-title" v-bind:data="example" file="lists/6")

    //- Example 7
    component-example(header="Card image with toolbar and list" v-bind:data="example" file="lists/7")
      section-text(slot="details") A list can be combined with a card.

    //- Example 8
    component-example(header="Title with sub-title, actions and action-text" v-bind:data="example" file="lists/8")
      section-text(slot="details") A list can contain a stack within an action. Ripple and router props can be passed through the main v-list, to the v-list-tile or as a property in the items array.

    markup(lang="js")
      |e7: [
      |   {
      |     title: '...',
      |     subtitle: '...',
      |     action : {
      |       text: '...',
      |       icon: 'star_border'
      |     }
      |   }
      |]
    //- Example 9
    component-example(header="Action with title and sub-title" v-bind:data="example" file="lists/9")
      section-text(slot="details") A list can contain up to 3 lines.

    markup(lang="stylus")
      |.card
      |   width: 400px
      |&nbsp;
      |   .toolbar
      |     height: auto
      |     min-height: 55px
      |     padding-left: 0

    //- Example 10
    component-example(header="Expansion Lists" v-bind:data="example" file="lists/10")
      section-text(slot="details") A list can contain a group of items which will display on click. Expansion lists are also used within the <code>sidebar</code> component.

    markup(lang="js")
      |{
      |  action: { icon: 'restaurant', class: 'grey--text' },
      |  title: 'Dining',
      |  items: [
      |    { title: 'Breakfast &amp; brunch' },
      |    { title: 'New American' },
      |    { title: 'Sushi' }
      |  ]
      |}
</template>

<script>
  export default {
    name: 'lists-view',

    data () {
      let srcs = {
        1: '/public/doc-images/lists/1.jpg',
        2: '/public/doc-images/lists/2.jpg',
        3: '/public/doc-images/lists/3.jpg',
        4: '/public/doc-images/lists/4.jpg',
        5: '/public/doc-images/lists/5.jpg'
      }

      return {
        example: {
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
          { icon: true, title: 'Jason Oner', avatar: srcs[1] },
          { title: 'Travis Howard', avatar: srcs[3] },
          { title: 'Ali Connors', avatar: srcs[2] },
          { title: 'Cindy Baker', avatar: srcs[4] },
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
          { active: true, title: 'Jason Oner', avatar: srcs[1] },
          { active: true, title: 'Ranee Carlson', avatar: srcs[5] },
          { title: 'Cindy Baker', avatar: srcs[4] },
          { title: 'Ali Connors', avatar: srcs[3] },
        ],
        e42: [
          { title: 'Travis Howard', avatar: srcs[2] },
        ],
        e7: [
          { action: '15 min', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
          { action: '2 hr', headline: 'Summer BBQ', title: 'me, Scrott, Jennifer', subtitle: "Wish I could come, but I'm out of town this weekend." },
          { action: '6 hr', headline: 'Oui oui', title: 'Sandra Adams', subtitle: "Do you have Paris recommendations? Have you ever been?" },
          { action: '12 hr', headline: 'Birthday gift', title: 'Trevor Hansen', subtitle: "Have any ideas about what we should get Heidi for her birthday?" },
          { action: '18hr', headline: 'Recipe to try', title: 'Britta Holt', subtitle: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos." },
        ],
        e10: [
          {
            action: 'local_activity',
            title: 'Attractions',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'restaurant',
            title: 'Dining',
            active: true,
            items: [
              { title: 'Breakfast & brunch' },
              { title: 'New American' },
              { title: 'Sushi' }
            ]
          },
          {
            action: 'school',
            title: 'Education',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'directions_run',
            title: 'Family',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'healing',
            title: 'Health',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'content_cut',
            title: 'Office',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'local_offer',
            title: 'Promotions',
            items: [
              { title: 'List Item' }
            ]
          }
        ]
      },
        doc: {
          title: 'List',
          desc: 'The <code>v-list</code> component is used to display information. It can contain an avatar, content, actions, subheaders and much more. Lists can contain children and are used in the sidebar.',
          props: {
            'v-list': {
              params: [
                [
                  'dense',
                  'Boolean',
                  'False',
                  'Lowers max height of list tiles'
                ],
                [
                  'subheader',
                  'Boolean',
                  'False',
                  'Designates that list has a previous sibling subheader'
                ],
                [
                  'two-line',
                  'Boolean',
                  'False',
                  'Designates list contains two-line list tiles'
                ],
                [
                  'three-line',
                  'Boolean',
                  'False',
                  'Designates list contains three-line list tiles'
                ]
              ]
            },
            'v-list-tile': {
              params: [
                [
                  'append',
                  'Boolean',
                  'False',
                  'Vue Router router-link prop'
                ],
                [
                  'avatar',
                  'Boolean',
                  'False',
                  'Used to set minimum tile height on a single-line list item'
                ],
                [
                  'disabled',
                  'Boolean',
                  'False',
                  'List tile is disabled'
                ],
                [
                  'href',
                  'String, Object',
                  'javascript:;',
                  'For router, this is passed to the "to" prop'
                ],
                [
                  'nuxt',
                  'Boolean',
                  'False',
                  'Specifies the link is a nuxt-link'
                ],
                [
                  'replace',
                  'Boolean',
                  'False',
                  'Vue Router router-link prop'
                ],
                [
                  'router',
                  'Boolean',
                  'False',
                  'Designates whether the list tiles will be a router-link'
                ],
                [
                  'ripple',
                  'Boolean',
                  'False',
                  'Designates whether the list tiles will attach the ripple directive'
                ],
                [
                  'tag',
                  'String',
                  'a',
                  'Use a custom tag for the list tile'
                ]
              ],
              model: {
                types: ['Boolean'],
                default: 'False',
                description: 'Toggles the list tile active state'
              }
            },
            'v-list-group': {
              params: [
                [
                  'group',
                  'String',
                  'False',
                  'Assign a route namespace'
                ],
                [
                  'no-action',
                  'Boolean',
                  'False',
                  'Removes left padding assigned for action icons from group items'
                ],
              ],
              model: {
                types: ['Boolean'],
                default: 'False',
                description: 'Expands / Collapse list group'
              }
            }
          },
          functional: {
            'v-list': {
              params: [
                ['v-list-item', 'list__item'],
                ['v-list-tile-action', 'list__tile__action--stack']
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
            'v-subheader': {
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
  #lists-view .component-example
    .card
      max-width: 400px
      margin: 1rem auto

      .toolbar
        height: auto
        min-height: 55px
</style>
