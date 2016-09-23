<template lang="pug">
  p(
    data-height="265" 
    data-theme-id="dark" 
    data-default-tab="html" 
    data-user="johnjleider" 
    data-embed-version="2" 
    class="codepen"
    v-bind:data-slug-hash="slug" 
  )
</template>

<script>
    export default {
        props: ['slug']
    }
</script>

<style lang="stylus"
       scoped
>
  pre
    border: solid 1px rgba(51,51,51,0.12)
    margin: 2rem 0

    &:before
        content: "language-markup"
        background: #cecece
        padding: .2rem
        border: solid 1px rgba(51,51,51,0.12)
        position: relative
        left: -9px
        top: -7px
</style>