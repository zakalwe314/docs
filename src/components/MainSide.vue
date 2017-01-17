<template lang="pug">
  v-sidebar(
    id="mainsidebar"
    fixed
    v-bind:items="items"
    ripple
    router
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
      a(href="https://github.com/vuetifyjs/vuetify/releases/tag/v0.8.6" target="_blank") v0.8.6
      div(class="sidebar__links")
        a(href="https://github.com/vuetifyjs/vuetify" target="_blank")
          img(src="~public/github.png" alt="github")
        a(href="https://twitter.com/vuetifyjs" target="_blank")
          img(src="~public/twitter.png" alt="twitter")
        a(href="https://www.facebook.com/vuetifyjs" target="_blank")
          img(src="~public/facebook.png" alt="facebook")
        a(href="mailto:john.j.leider@gmail.com")
          img(src="~public/mail.png" alt="mail")
      div Need help?
      div Join the Vuetify.js <a href="https://gitter.im/vuetifyjs/Lobby" target="_blank">gitter</a>
    div(class="gitter") 
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { href: '/', title: 'About', avatar: 'question_answer' },
          { href: '/quick-start', title: 'Quick Start', avatar: 'fast_forward' },
          { href: '/server-side-rendering', title: 'Server Side Rendering that is very long', avatar: 'cloud_circle' },
          { href: '/event-bus', title: 'Event Bus', avatar: 'device_hub' },
          { href: '/layouts', title: 'Layouts', avatar: 'devices' },
          {
            title: 'Components',
            avatar: 'widgets',
            group: '/components',
            items: [
              { href: '/components/alerts', title: 'Alerts' },
              { href: '/components/breadcrumbs', title: 'Breadcrumbs' },
              { href: '/components/buttons', title: 'Buttons' },
              { href: '/components/cards', title: 'Cards' },
              { href: '/components/chips', title: 'Chips' },
              { href: '/components/collapsible', title: 'Collapsible' },
              { href: '/components/dropdowns', title: 'Dropdowns' },
              { href: '/components/footer', title: 'Footer' },
              { href: '/components/forms', title: 'Forms' },
              { href: '/components/icons', title: 'Icons' },
              { href: '/components/lists', title: 'Lists' },
              { href: '/components/modals', title: 'Modals' },
              { href: '/components/navbar', title: 'Navbars' },
              { href: '/components/pagination', title: 'Pagination' },
              { href: '/components/parallax', title: 'Parallax' },
              { href: '/components/progress-circular', title: 'Progress Circular' },
              { href: '/components/progress-linear', title: 'Progress Linear' },
              { href: '/components/sidebar', title: 'Sidebars' },
              { href: '/components/slider', title: 'Sliders' },
              { href: '/components/tabs', title: 'Tabs' }
            ]
          },
          {
            title: 'Directives',
            avatar: 'polymer',
            group: '/directives',
            items: [
              { href: '/directives/badges', title: 'Badges' },
              { href: '/directives/ripples', title: 'Ripples' },
              { href: '/directives/tooltips', title: 'Tooltips' }
            ]
          },
          {
            title: 'Functions', 
            avatar: 'functions',
            group: '/functions',
            items: [
              { href: '/functions/toasts', title: 'Toasts' }
            ]
          },
          {
            title: 'CSS', 
            avatar: 'brush',
            group: '/css',
            items: [
              { href: '/css/typography', title: 'Typography' },
              { href: '/css/content', title: 'Content' },
              { href: '/css/grid', title: 'Grid' },
              { href: '/css/colors', title: 'Colors' },
              { href: '/css/tables', title: 'Tables' },
            ]
          },
          {
            title: 'Helpers', 
            avatar: 'build',
            group: '/helpers',
            items: [
              { href: '/helpers/spacing', title: 'Spacing' },
              { href: '/helpers/alignment', title: 'Alignment' },
              { href: '/helpers/display', title: 'Display' }
            ]
          },
          { title: 'Optimization', avatar: 'flash_on', disabled: true },
          { title: 'Deployment', avatar: 'important_devices', disabled: true },
          { title: 'Examples', avatar: 'web', disabled: true },
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
    padding: 1rem 0 1rem
    color: #fff
        
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