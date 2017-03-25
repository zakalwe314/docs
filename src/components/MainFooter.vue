<template lang="pug">
  div(class="footer grey darken-2 white--text")
    div(class="social")
      div(class="fb-like" data-href="https://vuetifyjs.com/" data-width="30" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="true")
      a(href="https://twitter.com/vuetifyjs" class="twitter-follow-button" data-show-count="false") Follow @vuetifyjs
    div(class="copy") 
      |&copy; 2016 <a class="white--text" href="http://johnleider.com" target="_blank">John Leider</a>
</template>

<style lang="stylus">
  .footer
    position: relative
    
  .copy
    text-align: left
    padding-left: 1rem
      
  .social
    position: absolute !important
    display: flex !important
    align-items: center
    top: 0px
    right: 25px
    height: 100%
    
  .fb-like
    display: flex !important
    align-items: center
    margin: 0 30px
    
  @media screen and (max-width: 768px)
    .copy
      display: none
</style>