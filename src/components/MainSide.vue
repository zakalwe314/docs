<template lang="pug">
  v-sidebar(
    id="mainsidebar"
    fixed
    class="grey darken-3"
    close-on-click
  )
    div(class="vuetify")
      h1
        router-link(
          to="/welcome",
          class="navbar__logo"
        )
          span.v V
          | uetify
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
            href: '/',
            text: 'About',
            icon: 'question_answer'
          },
          {
            href: '/quick-start',
            text: 'Quick Start',
            icon: 'fast_forward'
          },
          {
            href: '/tutorial',
            text: 'Tutorial',
            icon: 'help'
          },
          {
            parent: {
              href: '#!',
              text: 'Components',
              icon: 'widgets',
            },
            items: [
              {
                href: '/components/alerts',
                text: 'Alerts',
                icon: 'priority_high'
              },
              {
                href: '/components/breadcrumbs',
                text: 'Breadcrumbs',
                icon: 'linear_scale'
              },
              {
                href: '/components/buttons',
                text: 'Buttons',
                icon: 'arrow_forward'
              },
              {
                href: '/components/cards',
                text: 'Cards',
                icon: 'note'
              },
              {
                href: '/components/chips',
                text: 'Chips',
                icon: 'label'
              },
              {
                href: '/components/collapsible',
                text: 'Collapsible',
                icon: 'reorder'
              },
              {
                href: '/components/dropdowns',
                text: 'Dropdowns',
                icon: 'arrow_drop_down_circle'
              },
              {
                href: '/components/forms',
                text: 'Forms',
                icon: 'text_format'
              },
              {
                href: '/components/lists',
                text: 'Lists',
                icon: 'reorder'
              },
              {
                href: '/components/pagination',
                text: 'Pagination',
                icon: 'looks_one'
              },
              {
                href: '/components/progress',
                text: 'Progress',
                icon: 'trending_flat'
              },
              {
                href: '/components/parallax',
                text: 'Parallax',
                icon: 'import_export'
              },
              {
                href: '/components/modals',
                text: 'Modals',
                icon: 'call_to_action'
              },
              {
                href: '/components/slider',
                text: 'Slider',
                icon: 'slideshow'
              },
              {
                href: '/components/tabs',
                text: 'Tabs',
                icon: 'more_horiz'
              }
            ]
          },
          {
            parent: {
              href: '#!',
              text: 'Directives',
              icon: 'polymer'
            },
            items: [
              {
                href: '/directives/badges',
                text: 'Badges',
                icon: 'fiber_manual_record'
              },
              {
                href: '/directives/tooltips',
                text: 'Tooltips',
                icon: 'sms'
              }
            ]
          },
          {
            parent: {
              href: '#!',
              text: 'Functions',
              icon: 'functions'
            },
            items: [
              {
                href: '/functions/toasts',
                text: 'Toasts',
                icon: 'picture_in_picture'
              }
            ]
          },
          {
            parent: {
              href: '#!',
              text: 'CSS',
              icon: 'brush'
            },
            items: [
              {
                href: '/css/typography',
                text: 'Typography',
                icon: 'title'
              }
            ]
          },
          {
            href: 'layouts',
            text: 'Layouts',
            icon: 'view_quilt'
          },
          {
            href: 'faq',
            text: 'FAQ',
            icon: 'comment'
          }       
        ]
      }
    }
  }
</script>

<style lang="stylus">    
  .vuetify
    h1
      font-weight: 100
      letter-spacing: .3rem
      text-align: center
      font-size: 4rem !important
        
    .navbar__logo
      font-size: 1.7rem
      display: block
      padding: 2rem 0
      position: relative
      border-bottom: 1px solid rgba(#fff, .1)
      margin-bottom: 1rem
      
      .v
        color: #2196F3
        font-weight: 900
        font-size: 3rem
        text-decoration: overline
        letter-spacing: 0px
        transition: 1s ease-out
        
  .sidebar__item-header
    color: #fff
    
  .sidebar__item
    color: #fff
    
    &:hover
      background: rgba(255, 255, 255, .2)
      
    &--active
      background: rgba(255, 255, 255, .2)      
</style>