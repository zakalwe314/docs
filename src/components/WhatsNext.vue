<template lang="pug">
  div
    h2(class="section-header primary--after whats-next")
      | What's Next
      v-icon(x-large class="primary--text") help
    v-alert(success)
      v-container(fluid)
        v-row
          v-col(xs6)
            slot
          v-col(xs6, class="text-xs-right")
            v-btn(primary v-on:click.native="$router.push(route)")
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
    display: flex
    align-items: center
</style>