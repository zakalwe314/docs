<template lang="pug">
  section
    v-row
      v-col(xs12)
        section-header Navbars

      v-col(xs12)
        v-card(class="z-depth-0")
          v-navbar
            v-navbar-logo Logo
            v-navbar-items(v-bind:items="items")

      v-col(xs12)
        v-card(class="z-depth-0")
          v-navbar(class="red")
            v-navbar-items(v-bind:items="items")
            v-navbar-logo(class="right-align") Logo
        
      v-col(xs12)
        v-card(class="z-depth-0")
          v-navbar(class="purple")
            v-navbar-logo(class="center-align") Logo
            v-navbar-items
              li
                a(
                  class="navbar__item"
                  href="#!"
                )
                  v-icon link
              li
                a(
                  class="navbar__item"
                  href="#!"
                )
                  v-icon check
              li
                a(
                  class="navbar__item"
                  href="#!",
                  v-dropdown:icon-dropdown=""
                )
                  v-icon list
                v-dropdown(id="icon-dropdown", v-bind:items="items", right)
    v-row
      v-col(xs12)
        section-header Layouts
      v-col(xs12)
        v-card(
          class="with navbar-and-footer",
          id="layout-1"
        )
          v-sidebar(
            id="side-demo-1",
            height="500px"
          )
            v-sidebar-items(v-bind:items="items")
          div(class="main")
            v-navbar
              v-col-spacer
              v-navbar-items(v-bind:items="items")
                v-navbar-item(
                  v-bind:item="{ href: '#!', text: 'Dropdown' }",
                  v-dropdown:dropdown6=""
                )
                v-dropdown(
                  id="dropdown6",
                  v-bind:items="items",
                  right
                )
            v-container
              v-row
                v-col(xs12)
                  h4 Content
            v-footer Footer

    v-row
      v-col(xs12)
        v-card(
          class="with navbar-and-footer",
          id="layout-2"
        )
          v-sidebar(
            id="side-demo-2",
            height="500px",
            close-on-click,
            drawer
          )
            v-sidebar-items(v-bind:items="items")
          div(class="main")
            v-navbar
              div(class="navbar__side-icon")
                a(
                  href="#!",
                  v-side-bar:side-demo-2=""
                )
                  v-icon view_list
              v-col-spacer
              v-navbar-items(v-bind:items="items")
            v-container
              v-row
                v-col(xs12)
                  h4 Content
            v-footer Footer

    v-row
      v-col(xs12)
        v-card(
          class="with navbar-and-footer",
          id="layout-3"
        )
          v-navbar
            v-col-spacer
            v-navbar-items(v-bind:items="items")
              v-navbar-item(
                v-bind:item="{ href: '#!', text: 'RightBar' }"
                v-side-bar:right-bar=""
              )
          v-sidebar(
            id="right-bar",
            right,
            drawer,
            close-on-click
          )
            v-sidebar-items(v-bind:items="items")

          div(class="main")
            v-sidebar(
              id="side-demo-3",
              height="500px"
            )
              v-sidebar-items(v-bind:items="items")
            v-container
              v-row
                v-col(xs12)
                  h4 Content
          v-footer Footer
    v-row
      v-col(xs12)
        v-card(
          img="http://adventureswithandrea.com/wp-content/uploads/2013/06/Grey-City.jpg",
          height="400px"
        )
          v-navbar(class="transparent z-depth-0")
            v-navbar-logo Logo
            v-col-spacer
            v-navbar-items(v-bind:items="items")
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            href: '#!',
            text: 'Link 1'
          },
          {
            href: '#!',
            text: 'Link 2'
          },
          {
            href: '#!',
            text: 'Link 3'
          },
          {
            href: '#!',
            text: 'Link 4'
          },
        ]
      }
    },

    mounted () {
      this.$emit('view', 'Layouts')
    }
  }
</script>

<style lang="stylus">
  .main
    flex: 1
    
  #layout-1
    flex-direction: row
    margin-bottom: 5rem
    overflow: hidden
    
    .container
      min-height: 404px
    
    footer
      padding-left: 1rem
      
  #layout-2
    @extend #layout-1
    overflow: hidden
    
    .sidebar
      position: absolute
      
  #layout-3
    overflow: hidden
    
    .main
      display: flex
      flex-direction: row
    
    footer
      padding-left: 1rem
      
    #right-bar
      position: absolute
</style>