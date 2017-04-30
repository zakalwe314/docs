<template lang="pug">
  v-sidebar(v-model="isActive")
    div(class="vuetify")
      router-link(
        to="/about",
        class="sidebar__logo"
      )
        img(
          src="~public/v.png"
          height="100"
          width="100"
          alt="Vuetify Logo"
        )
      .title Vuetify
      a(href="https://github.com/vuetifyjs/vuetify/releases/tag/v0.11.1" target="_blank") v0.11.1
    v-divider(dark)
    v-list(dense)
      template(v-for="item in items")
        v-list-group(v-if="item.items" v-bind:group="item.group")
          v-list-tile(slot="item" ripple)
            v-list-tile-action
              v-icon {{ item.action }}
            v-list-tile-content
              v-list-tile-title {{ item.title }}
            v-list-tile-action
              v-icon keyboard_arrow_down
          v-list-item(v-for="subItem in item.items")
            v-list-tile(
              :href="subItem.href"
              v-bind:router="!subItem.target"
              ripple
              v-bind:disabled="subItem.disabled"
              v-bind:target="subItem.target"
            )
              v-list-tile-content
                v-list-tile-title {{ subItem.title }}
              v-list-tile-action(v-if="subItem.action")
                v-icon(class="success--text") {{ subItem.action }}
        v-subheader(v-else-if="item.header") {{ item.header }}
        v-divider(v-else-if="item.divider" dark)
        v-list-item(v-else)
          v-list-tile(:href="item.href" router ripple v-bind:disabled="item.disabled")
            v-list-tile-action
              v-icon {{ item.action }}
            v-list-tile-content
              v-list-tile-title {{ item.title }}
            v-list-tile-action(v-if="item.subAction")
              v-icon(class="success--text") {{ item.subAction }}
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { header: 'Core documentation' },
          { href: '/', title: 'About', action: 'question_answer' },
          { href: '/quick-start', title: 'Quick start', action: 'explore' },
          { href: '/motion', title: 'Motion', action: 'slow_motion_video' },
          {
            title: 'Style',
            action: 'style',
            group: 'style',
            items: [
              { href: '/style/colors', title: 'Colors' },
              { href: '/style/theme', title: 'Theme' },
              { href: '/style/typography', title: 'Typography' },
              { href: '/style/content', title: 'Content' }
            ]
          },
          {
            title: 'Layout',
            action: 'devices',
            group: 'layout',
            items: [
              { href: '/layout/pre-defined', title: 'Pre-defined' },
              { href: '/layout/grid', title: 'Grid' },
              { href: '/layout/spacing', title: 'Spacing' },
              { href: '/layout/alignment', title: 'Alignment' },
              { href: '/layout/display', title: 'Display' },
              { href: '/layout/elevation', title: 'Elevation' }
            ]
          },
          {
            title: 'Components',
            action: 'widgets',
            group: '/components',
            items: [
              { href: '/components/alerts', title: 'Alerts' },
              { href: '/components/breadcrumbs', title: 'Breadcrumbs' },
              { href: '/components/bottom-navigation', title: 'Bottom navigation' },
              { href: '/components/buttons', title: 'Buttons' },
              { href: '/components/cards', title: 'Cards' },
              { href: '/components/carousel', title: 'Carousel' },
              { href: '/components/chips', title: 'Chips' },
              { href: '/components/datatables', title: 'Data tables' },
              { href: '/components/dialogs', title: 'Dialogs', action: 'fiber_new' },
              { href: '/components/dividers', title: 'Dividers' },
              { href: '/components/expansion-panel', title: 'Expansion panel' },
              { href: '/components/footer', title: 'Footer' },
              { href: '/components/icons', title: 'Icons' },
              { href: '/components/lists', title: 'Lists' },
              { href: '/components/menus', title: 'Menus' },
              { href: '/components/pagination', title: 'Pagination' },
              { href: '/components/parallax', title: 'Parallax' },
              { href: '/components/pickers', title: 'Pickers', action: 'fiber_new' },
              { href: '/components/progress', title: 'Progress & activity' },
              { href: '/components/selects', title: 'Selects' },
              { href: '/components/selection-controls', title: 'Selection controls' },
              { href: '/components/sidebar', title: 'Sidebars' },
              { href: '/components/sliders', title: 'Sliders' },
              { href: '/components/snackbars', title: 'Snackbars & toasts' },
              { href: '/components/steppers', title: 'Steppers' },
              { href: '/components/subheaders', title: 'Subheaders' },
              { href: '/components/tabs', title: 'Tabs' },
              { href: '/components/text-fields', title: 'Text fields' },
              { href: '/components/toolbar', title: 'Toolbars' }
            ]
          },
          {
            title: 'Directives',
            action: 'polymer',
            group: '/directives',
            items: [
              { href: '/directives/badges', title: 'Badges' },
              { href: '/directives/ripples', title: 'Ripples' },
              { href: '/directives/tooltips', title: 'Tooltips' }
            ]
          },
          { divider: true, light: true },
          { header: 'Additional resources' },
          {
            title: 'Ecosystem',
            action: 'public',
            items: [
              {
                href: 'https://vuejobs.com/?ref=vuetify',
                target: '_blank',
                title: 'Jobs',
                action: 'whatshot'
              },
              {
                href: 'https://gitter.im/vuetifyjs/Lobby/~chat#',
                target: '_blank',
                title: 'Chat'
              }
            ]
          },
          {
            title: 'Guides',
            action: 'developer_mode',
            items: [
              {
                href: '/server-side-rendering',
                title: 'Server Side Rendering'
              }
            ]
          },
          {
            title: 'Examples',
            action: 'web',
            items: [
              {
                href: 'https://github.com/nuxt/nuxt.js/tree/master/examples/with-vuetify',
                target: '_blank',
                title: 'NUXT'
              }
            ]
          },
          { title: 'Optimization', action: 'flash_on', disabled: true },
          { title: 'Deployment', action: 'important_devices', disabled: true }
        ]
      }
    },

    computed: {
      isActive: {
        get () {
          return this.$store.state.sidebar
        },
        set (val) {
          this.$store.commit('vuetify/SIDEBAR', val)
        }
      }
    }
  }
</script>

<style lang="stylus">
  @import '../stylus/settings/_variables'
  .vuetify
    text-align: center
    margin: 16px 0
    color: #fff

    .sidebar__logo
      display: block
      position: relative
      margin-bottom: 16px
      text-decoration: none

      img
        height: 100px

    a
      color: #fff

    .gitter
      margin-bottom: 16px

  .sidebar__item-header
    color: #fff

  .sidebar__item
    color: #fff
</style>
