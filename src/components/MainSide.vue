<template lang="pug">
  v-sidebar(
    fixed
    :active="active"
    @active="active = arguments[0]"
  )
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
      a(href="https://github.com/vuetifyjs/vuetify/releases/tag/v0.8.7" target="_blank") v0.8.7
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
      div(class="gitter") Join the Vuetify.js <a href="https://gitter.im/vuetifyjs/Lobby" target="_blank">gitter</a>
      v-divider(light)
    v-list(dense)
      template(v-for="item in items")
        v-list-item(v-if="item.items")
          v-list-group
            v-list-tile(slot="item")
              v-list-tile-avatar
                v-icon {{ item.action }}
              v-list-tile-content
                v-list-tile-title {{ item.title }}
              v-list-tile-action
                v-icon keyboard_arrow_down
            v-list-item(v-for="subItem in item.items")
              v-list-tile(router)
                v-list-tile-avatar
                  v-icon {{ subItem.action }}
                v-list-tile-content
                  v-list-tile-title {{ subItem.title }}
        v-list-sub-header(v-else-if="item.header") {{ item.header }}
        v-divider(v-else-if="item.divider" light)
        v-list-item(v-else)
          v-list-tile(:href="item.href" router)
            v-list-tile-avatar
              v-icon {{ item.action }}
            v-list-tile-content
              v-list-tile-title {{ item.title }}
</template>
 
<script>
  export default {
    data () {
      return {
        active: true,
        items: [
          { header: 'Core Documentation' },
          { href: '/', title: 'About', action: 'question_answer' },
          { href: '/quick-start', title: 'Quick Start', action: 'fast_forward' },
          { href: '/server-side-rendering', title: 'Server Side Rendering', action: 'cloud_circle' },
          { href: '/vuex', title: 'Vuex', action: 'device_hub' },
          { href: '/layouts', title: 'Layouts', action: 'devices' },
          {
            title: 'Components',
            action: 'widgets',
            group: '/components',
            items: [
              { href: '/components/alerts', title: 'Alerts' },
              { href: '/components/breadcrumbs', title: 'Breadcrumbs' },
              { href: '/components/buttons', title: 'Buttons' },
              { href: '/components/cards', title: 'Cards' },
              { href: '/components/carousel', title: 'Carousel' },
              { href: '/components/chips', title: 'Chips' },
              { href: '/components/collapsible', title: 'Collapsible' },
              { href: '/components/dividers', title: 'Dividers', disabled: true },
              { href: '/components/footer', title: 'Footer' },
              { href: '/components/forms', title: 'Forms' },
              { href: '/components/icons', title: 'Icons' },
              { href: '/components/lists', title: 'Lists', action: { icon: 'update', class: 'success--text' } },
              { href: '/components/menus', title: 'Menus' },
              { href: '/components/modals', title: 'Modals' },
              { href: '/components/navbar', title: 'Navbars' },
              { href: '/components/pagination', title: 'Pagination' },
              { href: '/components/parallax', title: 'Parallax' },
              { href: '/components/progress-circular', title: 'Progress Circular' },
              { href: '/components/progress-linear', title: 'Progress Linear', action: { icon: 'fiber_new', class: 'success--text' } },
              { href: '/components/sidebar', title: 'Sidebars', action: { icon: 'update', class: 'success--text' } },
              { href: '/components/tabs', title: 'Tabs' }
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
          {
            title: 'Functions', 
            action: 'functions',
            group: '/functions',
            items: [
              { href: '/functions/toasts', title: 'Toasts' }
            ]
          },
          {
            title: 'CSS', 
            action: 'brush',
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
            action: 'build',
            group: '/helpers',
            items: [
              { href: '/helpers/spacing', title: 'Spacing' },
              { href: '/helpers/alignment', title: 'Alignment' },
              { href: '/helpers/display', title: 'Display' }
            ]
          },
          { divider: true, light: true },
          { header: 'Additional Documentation' },
          { title: 'Optimization', action: 'flash_on', disabled: true },
          { title: 'Deployment', action: 'important_devices', disabled: true },
          { title: 'Examples', action: 'web', disabled: true },
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
    margin-top: 16px
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