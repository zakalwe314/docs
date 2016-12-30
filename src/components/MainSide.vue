<template lang="pug">
  v-sidebar(
    id="mainsidebar"
    fixed
  )
    div(class="vuetify" slot="top")
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
      a(href="https://github.com/vuetifyjs/vuetify/releases/tag/v0.8.3" target="_blank") v0.8.3
      div(class="sidebar__links")
        a(href="https://github.com/vuetifyjs/vuetify" target="_blank")
          img(src="~public/github.png" alt="github")
        a(href="https://twitter.com/vuetifyjs" target="_blank")
          img(src="~public/twitter.png" alt="twitter")
        a(href="https://www.facebook.com/vuetifyjs" target="_blank")
          img(src="~public/facebook.png" alt="facebook")
        a(href="mailto:john.j.leider@gmail.com")
          img(src="~public/mail.png" alt="mail")
    v-sidebar-items
      template(v-for="item in items")
        v-sidebar-item-header(v-if="item.header" v-html="item.header")
        v-sidebar-group(v-if="item.items" v-bind:item="item.parent")
          v-sidebar-item(
            v-for="child in item.items"
            v-bind:item="child"
            v-bind:router="item.router"
            v-if="child.href"
            router
          )
            v-chip(class="green" v-if="child.chip") {{ child.chip }}
        v-sidebar-item(
          v-bind:item="item"
          v-bind:router="item.router"
          v-else-if="item.href"
          router
        )
          v-chip(class="green" v-if="item.chip") {{ item.chip }}
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { href: '/', text: 'About', icon: 'question_answer' },
          { href: '/quick-start', text: 'Quick Start', icon: 'fast_forward' },
          { href: '/overview', text: 'Overview', icon: 'info' },
          { href: '/event-bus', text: 'Event Bus', icon: 'device_hub' },
          { href: '/layouts', text: 'Layouts', icon: 'devices' },
          {
            parent: { href: '#!', text: 'Components', icon: 'widgets', },
            items: [
              { href: '/components/alerts', text: 'Alerts', icon: 'priority_high' },
              { href: '/components/breadcrumbs', text: 'Breadcrumbs', icon: 'linear_scale' },
              { href: '/components/buttons', text: 'Buttons', icon: 'arrow_forward' },
              { href: '/components/cards', text: 'Cards', icon: 'note' },
              { href: '/components/chips', text: 'Chips', icon: 'label' },
              { href: '/components/collapsible', text: 'Collapsible', icon: 'reorder' },
              { href: '/components/dropdowns', text: 'Dropdowns', icon: 'arrow_drop_down_circle' },
              { href: '/components/footer', text: 'Footer', icon: 'call_to_action' },
              { href: '/components/forms', text: 'Forms', icon: 'text_format' },
              { href: '/components/icons', text: 'Icons', icon: 'favorite' },
              { href: '/components/lists', text: 'Lists', icon: 'format_list_bulleted' },
              { href: '/components/modals', text: 'Modals', icon: 'picture_in_picture' },
              { href: '/components/navbar', text: 'Navbars', icon: 'web' },
              { href: '/components/pagination', text: 'Pagination', icon: 'looks_one' },
              { href: '/components/parallax', text: 'Parallax', icon: 'import_export' },
              { href: '/components/progress-circular', text: 'Progress Circular', icon: 'replay' },
              { href: '/components/sidebar', text: 'Sidebars', icon: 'view_quilt', chip: 'updated' },
              { href: '/components/slider', text: 'Sliders', icon: 'slideshow' },
              { href: '/components/tabs', text: 'Tabs', icon: 'more_horiz' }
            ]
          },
          {
            parent: { href: '#!', text: 'Directives', icon: 'polymer' },
            items: [
              { href: '/directives/badges', text: 'Badges', icon: 'fiber_manual_record' },
              { href: '/directives/tooltips', text: 'Tooltips', icon: 'sms' }
            ]
          },
          {
            parent: { href: '#!', text: 'Functions', icon: 'functions' },
            items: [
              { href: '/functions/toasts', text: 'Toasts', icon: 'flip_to_front' }
            ]
          },
          {
            parent: { href: '#!', text: 'CSS', icon: 'brush'
            },
            items: [
              { href: '/css/typography', text: 'Typography', icon: 'title' },
              { href: '/css/grid', text: 'Grid', icon: 'grid_on' },
              { href: '/css/colors', text: 'Colors', icon: 'invert_colors' },
              { href: '/css/helpers', text: 'Helpers', icon: 'build' }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import '../stylus/settings/_variables'
  
  .sidebar
    background: $grey.darken-3
    
    &__links
      margin: 1rem
      display: flex
      justify-content: center
      align-items: center
      
      a
        color: #fff
        text-align: center
        text-decoration: none
        margin: 0 .5rem
        
        img
          height: 25px
          
        i
          padding: 0
  
  .vuetify
    text-align: center
    border-bottom: 1px solid rgba(#fff, .1)
    margin: 0 0 1rem
    padding: 1rem 0 0
        
    .sidebar__logo
      display: block
      position: relative
      margin-bottom: 1rem
      text-decoration: none
      
      img
        height: 100px
    
    a
      color: #fff
        
  .sidebar__item-header
    color: #fff
    
  .sidebar__item
    color: #fff
</style>