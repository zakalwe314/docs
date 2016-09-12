<template lang="pug">
  v-sidebar(
    id="mainsidebar",
    fixed,
    class="grey darken-3",
    close-on-click
  )
    div(class="logo")
      h1(class="white--text center-align") Vuetify
    ul(
      class="sidebar__items"
    )
      li(
        v-for="i in items"
      )
        router-link(
          :to="i.href",
          class="sidebar__item grey--text text--lighten-2",
          activeClass="sidebar__item--active"
        )
          v-icon {{ i.icon }}
          span {{ i.text }}
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            href: 'badges',
            text: 'Badges',
            icon: 'crop_3_2'
          },
          {
            href: 'buttons',
            text: 'Buttons',
            icon: 'arrow_forward'
          },
          {
            href: 'cards',
            text: 'Cards',
            icon: 'note'
          },
          {
            href: 'chips',
            text: 'Chips',
            icon: 'label'
          },
          {
            href: 'collapsible',
            text: 'Collapsible',
            icon: 'reorder'
          },
          {
            href: 'dropdowns',
            text: 'Dropdowns',
            icon: 'arrow_drop_down_circle'
          },
          {
            href: 'forms',
            text: 'Forms',
            icon: 'text_format'
          },
          {
            href: 'layouts',
            text: 'Layouts',
            icon: 'border_all'
          },
          {
            href: 'lists',
            text: 'Lists',
            icon: 'reorder'
          },
          {
            href: 'parallax',
            text: 'Parallax',
            icon: 'import_export'
          },
          {
            href: 'modals',
            text: 'Modals',
            icon: 'call_to_action'
          },
          {
            href: 'slider',
            text: 'Slider',
            icon: 'slideshow'
          },
          {
            href: 'tabs',
            text: 'Tabs',
            icon: 'more_horiz'
          },
          {
            href: 'toasts',
            text: 'Toasts',
            icon: 'picture_in_picture'
          },
          {
            href: 'tooltips',
            text: 'Tooltips',
            icon: 'sms'
          },
          {
            href: 'typography',
            text: 'Typography',
            icon: 'title'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  .logo
    h1
      padding: 1.5rem 0
      font-weight: 100
      font-size: 1.5rem
      letter-spacing: .3rem
      
      &:first-letter
        color: #2196F3
        font-weight: 900
        font-size: 2.5rem
        text-decoration: overline
        letter-spacing: 0px
</style>