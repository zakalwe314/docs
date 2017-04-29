<template lang="pug">
  v-footer.white.pa-0.main-footer
    v-layout(row)
      v-col(
        v-if="previous.route"
        xs12
        v-bind:class="[previous.color, { 'xs6': next.route }]").primary.pa-0
        v-list.py-0
          v-list-item
            v-list-tile(router :to="previous.route" ripple).pl-5
              v-icon.mr-5 arrow_back
              v-list-tile-content
                v-list-tile-sub-title Previous
                v-list-tile-title(v-text="previous.name")
      v-col(
        v-if="next.route"
        xs12
        v-bind:class="[next.color, { 'xs6': previous.route }]").pa-0
        v-list.py-0
          v-list-item
            v-list-tile(router :to="next.route" ripple).pr-5
              v-list-tile-content
                v-list-tile-sub-title.text-xs-right Next
                v-list-tile-title.text-xs-right(v-text="next.name")
              v-icon.ml-5 arrow_forward
</template>

<script>
  export default {
    computed: {
      previous () {
        return this.$store.state.previous
      },
      next () {
        return this.$store.state.next
      }
    }
  }
</script>

<style lang="stylus">
  .main-footer
    height: initial

    .col
      transition: .3s ease-in-out

    .list__tile
      height: 100px

      &__title
        color: #fff

      &__sub-title
        color: rgba(#fff, .3)
</style>
