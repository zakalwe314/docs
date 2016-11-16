<template lang="pug">
  div(class="whats-next")
    h2(class="section-header primary--after")
      | What's Next
      v-icon(x-large class="primary--text") help
    v-alert(info)
      v-container(fluid)
        v-row
          v-col(xs12 sm6)
            slot
          v-col(xs12 sm6 class="text-xs-right")
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
    h2
      display: flex
      align-items: center
    
    @media screen and (max-width: 48rem)
      .btn
        margin: 1rem 0
</style>