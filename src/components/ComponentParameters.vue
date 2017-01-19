<template lang="pug">
  v-table-overflow
    table(class="table--component" v-for="(options, type) in params")
      caption <strong>&lt;{{ type }}&gt;</strong>
      colgroup
        col(width="15%")
        col(width="10%")
        col(width="25%")
        col(width="50%")
      thead
        tr
          th(v-for="th in headers") {{ th }}
      tbody
          tr(v-if="options.model")
            td <code>v-model</code>
            td {{ options.model.types.join(',') }}
            td {{ options.model.default }}
            td Vue v-model support
          tr(v-if="options.default")
            td <code>default</code>
            td Vue default slot
          tr(v-for="tr in options.params")
            td(v-for="(td, index) in tr")
              span(v-if="index === 0") <code>{{ td }}</code>
              span(v-else) {{ td }}
</template>

<script>
  export default {
    props: {
      headers: {
        type: Array,
        default: () => []
      },

      params: {
        type: Object,
        default: () => {}
      },
    }
  }
</script>

<style lang="stylus">
  .table--component
    caption
      background: rgba(#000, 0.05)
      padding: 5px 0
      
    &:not(:first-child)
      margin-top: 2rem
</style>