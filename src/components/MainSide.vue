<template lang="pug">
  v-sidebar(
    id="mainsidebar"
    fixed
    close-on-click
    v-bind:items="items"
  )
    div(class="vuetify" slot="top")
      router-link(
        to="/welcome",
        class="sidebar__logo"
      )
        span.v V
        span uetify
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { href: '/', text: 'About', icon: 'question_answer' },
          { href: '/quick-start', text: 'Quick Start', icon: 'fast_forward' },
          { href: '/overview', text: 'Overview', icon: 'info' },
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
              { href: '/components/navbar', text: 'Navbar', icon: 'web' },
              { href: '/components/pagination', text: 'Pagination', icon: 'looks_one' },
              { href: '/components/progress', text: 'Progress', icon: 'trending_flat' },
              { href: '/components/parallax', text: 'Parallax', icon: 'import_export' },
              { href: '/components/sidebar', text: 'Sidebar', icon: 'view_quilt' },
              { href: '/components/slider', text: 'Slider', icon: 'slideshow' },
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
          },
          { href: '/layouts', text: 'Layouts', icon: 'devices' },
          { href: '/bus', text: 'Bus', icon: 'device_hub' }
        ]
      }
    }
  }
</script>