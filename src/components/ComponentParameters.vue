<template lang="pug">
  v-table-overflow
    table(class="table--component elevation-0" v-for="(options, type) in params")
      caption <strong>&lt;{{ type }}&gt;</strong>
      colgroup
        col(width="20%")
        col(width="10%")
        col(width="20%")
        col(width="50%")
      thead
        tr
          th(v-for="th in headers") {{ th }}
      tbody
          tr(v-if="options.model")
            td <code>v-model</code>
            td {{ options.model.types.join(', ') }}
            td {{ options.model.default }}
            td {{ options.model.description ? options.model.description : 'Controls visibility'}}
          tr(v-if="options.router")
            td <code>router</code>
            td Boolean
            td False
            td Supported through <code>href</code> or <code>to</code> props. Has access to all <a href="https://router.vuejs.org/en/api/router-link.html" target="_blank">vue-router</a> and <a href="https://nuxtjs.org/api/components-nuxt-link" target="_blank">nuxt</a> router properties.
          tr(v-if="options.default")
            td <code>default</code>
            td Vue default slot
          tr(v-for="tr in options.params")
            td(v-for="(td, index) in tr")
              span(v-if="index === 0") <code>{{ td }}</code>
              span(v-else) {{ td }}
          tr(v-for="tr in options.events")
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
    box-shadow: none

    caption
      background: rgba(#000, 0.05)
      padding: 5px 0

    &:not(:first-child)
      margin-top: 2rem
</style>
