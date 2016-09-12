<template lang="pug">
  section(class="center-align")
    section-header Default
    v-row
      v-col(xs12)
        v-btn(small) Small
        v-btn Normal
        v-btn(large) Large
        v-btn(flat) Flat
        v-btn(flat, disabled) Disabled
        v-btn(disabled) Disabled
    section-header Colored
    v-row
      v-col(xs12)
        v-btn(primary) Primary
        v-btn(flat, class="primary--text") Primary
        v-btn(secondary) Secondary
        v-btn(flat, class="secondary--text") Secondary
    section-header Block
    v-row
      v-col(xs12, md6, lg6)
        v-btn(block) Default
      v-col(xs12, md6, lg6)
        v-btn(block, primary) Primary
      v-col(xs12, md6, lg6)
        v-btn(block, secondary) Secondary
      v-col(xs12, md6, lg6)
        v-btn(block, disabled) Disabled
    section-header Round
    v-row
      v-col(xs12)
        v-btn(round) Default
        v-btn(round, primary) Primary
        v-btn(round, secondary) Large Secondary
        v-btn(round, disabled) Disabled
    section-header Outline
    v-row
      v-col(xs12)
        v-btn(outline) Default
        v-btn(outline, class="primary primary--text") Primary
        v-btn(outline, class="secondary secondary--text") Secondary
        v-btn(outline, disabled) Disabled
    section-header Floating
    v-row
      v-col(xs12)
        v-btn(small, floating)
          v-icon event
        v-btn(floating)
          v-icon add
        v-btn(floating, large)
          v-icon edit
        v-btn(floating, disabled)
          v-icon remove
    v-row
      v-col(xs12)
        section-header Colored Floating
        v-btn(floating, small, class="purple white--text")
          v-icon cloud
        v-btn(floating, primary)
          v-icon attachment
        v-btn(floating, large, secondary)
          v-icon event
        v-btn(floating, large, disabled)
          v-icon room
    v-row
      v-col(xs12)
        section-header Icon
        v-btn(icon)
          v-icon hearing
        v-btn(class="btn--icon")
          v-icon computer
        v-btn(class="btn--icon")
          v-icon headset
</template>

<script>
  export default {
    name: 'buttons-view',

    mounted () {
      this.$emit('view', 'Buttons')
    }
  }
</script>

<style lang="stylus"
       scoped
>
  .btn
    margin: 1rem
</style>