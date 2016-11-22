<template lang="pug">
  div(class="whats-next")
    h2(class="section-header primary--after")
      | What's Next
      v-icon(x-large class="primary--text") help_outline
    v-alert(info)
      v-container(fluid)
        v-row
          v-col(xs12 sm8)
            slot
          v-col(xs12 sm4 class="text-sm-right text-xs-center")
            v-btn(v-on:click.native="$router.push(route)")
              | {{ text }}
              v-icon(right) chevron_right
</template>

<script>
  export default {
    props: {
      route: String,
      text: String
    }
  }
</script>

<style lang="stylus">
  .whats-next
    p
      margin: 0
      
    h2
      display: flex
      align-items: center
    
    @media screen and (max-width: 48rem)
      .btn
        margin: 2rem 0 0
        width: 100%
</style>