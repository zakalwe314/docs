<template lang="pug">
  v-sidebar(
    id="mainsidebar"
    fixed
    class="grey darken-3"
    close-on-click
  )
    div(class="vuetify")
      h1
        router-link(to="/welcome", class="navbar__logo") Vuetify
    v-sidebar-items
      template(v-for="item in items")
        v-sidebar-group(
          v-if="item.items"
          v-bind:item="item.parent"
        )
          v-sidebar-item(
            v-for="j in item.items"
            v-bind:item="j"
            v-bind:router="true"
          )
        v-sidebar-item(
          v-bind:item="item"
          v-bind:router="true"
          v-else
        )
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            href: 'welcome',
            text: 'Welcome',
            icon: 'dashboard'
          },
          {
            href: 'quick-start',
            text: 'Quick Start',
            icon: 'fast_forward'
          },
          {
            parent: {
              href: '#!',
              text: 'Components'
            },
            items: [
              {
                href: 'alerts',
                text: 'Alerts',
                icon: 'priority_high'
              },
              {
                href: 'badges',
                text: 'Badges',
                icon: 'fiber_manual_record'
              },
              {
                href: 'breadcrumbs',
                text: 'Breadcrumbs',
                icon: 'linear_scale'
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
                href: 'lists',
                text: 'Lists',
                icon: 'reorder'
              },
              {
                href: 'pagination',
                text: 'Pagination',
                icon: 'looks_one'
              },
              {
                href: 'progress',
                text: 'Progress',
                icon: 'trending_flat'
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
                href: 'tooltips',
                text: 'Tooltips',
                icon: 'sms'
              }
            ]
          },
          {
            parent: {
              href: '#!',
              text: 'Functions'
            },
            items: [
              {
                href: 'toasts',
                text: 'Toasts',
                icon: 'picture_in_picture'
              }
            ]
          },
          {
            parent: {
              href: '#!',
              text: 'CSS'
            },
            items: [
              {
                href: 'typography',
                text: 'Typography',
                icon: 'title'
              }
            ]
          },
          {
            href: 'layouts',
            text: 'Layouts',
            icon: 'view_day'
          }          
        ]
      }
    }
  }
</script>

<style lang="stylus">    
  .vuetify
    h1
      padding: 1.5rem 0
      font-weight: 100
      font-size: 1.5rem
      letter-spacing: .3rem
      text-align: center
      
      &:first-letter
        color: #2196F3
        font-weight: 900
        font-size: 2.5rem
        text-decoration: overline
        letter-spacing: 0px
    .navbar__logo
      font-size: 1.5rem
        
  .sidebar__item
    color: #fff !important
    
    &:hover
      background: rgba(255, 255, 255, .2)
      
    &--active
      background: rgba(255, 255, 255, .2)      
</style>