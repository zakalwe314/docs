<template lang="pug">
  section
    section-header Default
    v-row
      v-col(xs2)
        v-chip Chip
    section-header Colored
    v-row
      v-col(xs2)
        v-chip(class="primary white--text") Primary
      v-col(xs2)
        v-chip(class="secondary grey--text") Secondary
      v-col(xs2)
        v-chip(class="red white--text") Colored Chip
      v-col(xs2)
        v-chip(class="green white--text") Colored Chip
    section-header Icon
    v-row
      v-col(xs2)
        v-chip
          v-icon(left) account_circle
          | Ranee
      v-col(xs2)
        v-chip(class="orange white--text")
          | Premium
          v-icon(right) star
      v-col(xs2)
        v-chip(class="primary white--text")
          | 1 Year
          v-icon(right) cake
      v-col(xs2)
        v-chip(class="green white--text")
          v-icon done_all
      v-col(xs2)
        v-chip(close, class="teal white--text")
          v-icon(left) check_circle
          | Confirmed
    section-header Outline
    v-row
      v-col(xs2)
        v-chip(outline, class="secondary secondary--text") Outline
      v-col(xs2)
        v-chip(outline, class="primary primary--text") Colored
      v-col(xs2)
        v-chip(outline, class="red red--text")
          v-icon(left) build
          | Icon
    section-header Label
    v-row
      v-col(xs2)
        v-chip(label) Label
      v-col(xs2)
        v-chip(label, class="pink white--text")
          v-icon(left) label
          | Tags
      v-col(xs2)
        v-chip(label, outline, class="red red--text") Outline
    section-header Closable
    v-row
      v-col(xs2)
        v-chip(close) Closable
      v-col(xs2)
        v-chip(close, class="red white--text") Remove
      v-col(xs2)
        v-chip(close, outline, class="green green--text") Success
      v-col(xs2)
        v-chip(close, outline, label, class="orange orange--text") Complete
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', 'Chips')
    }
  }
</script>