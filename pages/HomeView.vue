<template lang="pug">
  div#home-view
    header
      img(src="/static/v.png")
      #menu
        router-link(
          class="white--text"
          to="/quick-start"
        ) Docs
        a(
          class="white--text"
          href="https://github.com/vuetifyjs/vuetify/releases"
          target="_blank"
        ) Updates
    
    
    section(id="hero-wrap")
      img(src="http://androidmag.de/wp-content/uploads/2014/11/14-77.jpg")
      section(id="hero" class="blue")
        v-container(fluid)
          v-layout(row)
            v-col(xs8 class="text-xs-right")
              h1(class="grey--text text--lighten-4") Vuetify.js
              h4(class="grey--text text--lighten-4") Clean and semantic Vue framework

            v-col(xs4 class="text-xs-left")
              .btn-wrap
                v-btn(dark outline large router href="/quick-start") Get Started
                v-btn(dark outline large tag="a" href="https://github.com/vuetifyjs/vuetify") Github

    section(class="highlights")
      .highlights-leftcol
        .highlights--tile
          h6 Datatables
        .highlights--tile
          v-card(class="elevation-6" img="https://rco.cc/vuetify/input-valid.png")
        .highlights--tile
          h6 Fancy selects
        .highlights--tile
          v-card(class="elevation-6" img="https://rco.cc/vuetify/theme.png")
      
      .highlights-divider
      
      .highlights-rightcol
        .highlights--tile
          v-card(class="elevation-6" img="https://rco.cc/vuetify/datatable.png")
        .highlights--tile
          h6 Built-in input validation
        .highlights--tile
          v-card(class="elevation-6" img="https://rco.cc/vuetify/selects.png")
        .highlights--tile
          h6 Configurable themes


    section(id="features" class="grey lighten-4")
      v-container( fluid)
        v-layout(row)
          v-col( xs3)
            v-btn( :ripple="false" floating large class="grey--text text--darken-1 white" )
              v-icon(light) devices
            p Ready for any screen size, from desktop to mobile.
          
          v-col(xs3)
            v-btn( :ripple="false" floating large class="grey--text text--darken-1 white" )
              v-icon(light) storage
            p Reusable components to make app development a breeze.
          
          v-col(xs3)
            v-btn( :ripple="false" floating large class="grey--text text--darken-1 white" ) SSR
            p SSR support for SEO friendly apps.
          
          v-col(xs3)
            v-btn( :ripple="false" floating large class="grey--text text--darken-1 white" )
              v-icon(light) photo_size_select_small
            p Small footprint <br/> Under 100KB
    
    
    section(id="sponsor")
      v-container( fluid)
        v-layout(row)
          v-col( xs10 offset-xs1)
            h6.text-xs-center Vuetify.js is proudly sponsored by
            a( href="http://www.thedifferenceengine.io/")
              img( width="300px" src="https://vuetifyjs.com/public/doc-images/browser-stack.svg")

    
    v-footer(class="grey lighten-4 grey--text text--darken-4")
      span © 2016-2017 John Leider
      span MIT License
</template>

<style lang="stylus">
  #home-view
    $reg-font = 16px
    p, span
      font-size $reg-font

    header
      height 80px
      display flex
      align-items center
      justify-content space-between
      padding 0 10%
      position: absolute
      z-index: 10
      
      img
        height 60%
        
      #menu
        transition opacity .8s cubic-bezier(0, 1.24, 1, 1)
        &:hover
          // color: rgba(100,100,100,.6)
          a
            opacity .7
        
        a
          transition opacity .8s cubic-bezier(0, 1.24, 1, 1)
          min-width 80px
          padding 8px
          text-decoration none
          text-transform uppercase
          font-weight 500
          display: inline-block
          text-align: center
          
          &:hover
            opacity 1


    section
      padding 0 10%
      height 500px
      display flex
      align-items center
      text-align center

    #hero-wrap
      height 400px
      padding 0
      overflow: hidden
      position: relative
      
      img
        z-index: 1
        width: 100%

    #hero
      position: absolute
      z-index: 2
      opacity: .96
      width: 100%
      height: 100%
      padding 40px 0 0 0
      background: rgb(32,150,243)
      background: -moz-linear-gradient(45deg, rgba(32,150,243,1) 0%, rgba(24,147,242,1) 6%, rgba(29,103,189,1) 82%, rgba(29,103,189,1) 82%, rgba(29,103,189,1) 100%)
      background: -webkit-linear-gradient(45deg, rgba(32,150,243,1) 0%,rgba(24,147,242,1) 6%,rgba(29,103,189,1) 82%,rgba(29,103,189,1) 82%,rgba(29,103,189,1) 100%)
      background: linear-gradient(45deg, rgba(32,150,243,1) 0%,rgba(24,147,242,1) 6%,rgba(29,103,189,1) 82%,rgba(29,103,189,1) 82%,rgba(29,103,189,1) 100%)

      .container
        display: flex
        justify-content: center
      
      h1
        font-weight: 400
        letter-spacing: 4px
        margin-right: -9px
        
      h4
        width 550px
        align-self flex-end
      
      .col
        display: flex
        justify-content: center
        flex-direction: column
        
        .btn-wrap
          display: flex
          flex-direction: column
          margin-left 50px
        
        .btn
          min-width 132px

    .highlights
      height 1100px
      
      padding 0
      margin 0 auto
      
      &--tile
        height 250px
        justify-content: center
        display: flex
        flex-direction: column
        
      .card
        min-width 300px
        width 80%
        height 90% !important
        background-position-y: top !important
        
      &-divider
        width: 3px
        height: 90%
        margin: 0 30px
        padding 0 1px
        background-color: rgba(0,0,0,0.1)
        
      &-leftcol
        width 50%
        text-align: right
        text-align: -webkit-right
        
      &-rightcol
        width 50%
        text-align left
          
          
    #features
      height 400px
      
      .btn__content
        font-size: 22px
        
      p, h6
        // width 100px
        margin 0 auto

    #sponsor
      height 250px

    .footer
      height 50px
      display flex
      flex-direction row
      align-items: center
      justify-content: space-between
      padding 0 10%
      
      span
        font-size 13px
</style>