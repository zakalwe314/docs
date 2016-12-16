<template lang="pug">
  v-sidebar(
    id="mainsidebar"
    fixed
    close-on-click
  )
    div(class="vuetify" slot="top")
      router-link(
        to="/about",
        class="sidebar__logo"
      )
        img(
          src="~public/v.png" 
          height="100px"
          width="100px"
          alt="Vuetify Logo"
        )
      a(href="https://github.com/vuetifyjs/vuetify/releases/tag/v0.7.4" target="_blank") v0.7.4
    v-sidebar-items
      template(v-for="item in items")
        v-sidebar-group(v-if="item.items" v-bind:item="item.parent")
          v-sidebar-item(
            v-for="j in item.items"
            v-bind:item="j"
            v-bind:router="item.router || true"
          )
            v-chip(class="green" v-if="j.chip") updated
        v-sidebar-item(
          v-bind:item="item"
          v-bind:router="item.router || true"
          v-else
        )
          v-chip(class="green" v-if="item.chip") updated
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
              { href: '/components/lists', text: 'Lists', icon: 'format_list_bulleted' },
              { href: '/components/modals', text: 'Modals', icon: 'picture_in_picture' },
              { href: '/components/navbar', text: 'Navbars', icon: 'web', chip: true },
              { href: '/components/pagination', text: 'Pagination', icon: 'looks_one' },
              { href: '/components/parallax', text: 'Parallax', icon: 'import_export' },
              { href: '/components/sidebar', text: 'Sidebars', icon: 'view_quilt', chip: true },
              { href: '/components/slider', text: 'Sliders', icon: 'slideshow' },
              { href: '/components/tabs', text: 'Tabs', icon: 'more_horiz' }
            ]
          },
          {
            parent: { href: '#!', text: 'Directives', icon: 'polymer' },
            items: [
              { href: '/directives/badges', text: 'Badges', icon: 'fiber_manual_record' },
              { href: '/directives/tooltips', text: 'Tooltips', icon: 'sms' },
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
              { href: '/css/colors', text: 'Colors', icon: 'invert_colors' }
            ]
          }
        ]
      }
    }
  }
</script>