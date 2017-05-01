<template lang="pug">
  div.view(v-bind:id="doc.id")
    v-card.mb-5
      v-card-title.red.lighten-2.white--text
        span(v-text="doc.title")
        v-spacer
        v-btn(
          icon
          dark
          v-tooltip:left="{ html: 'Edit this page' }"
          tag="a"
          v-bind:href="'https://github.com/vuetifyjs/docs/tree/master/src/views/'+doc.edit+'.vue'"
          target="_blank"
          v-if="doc.edit"
        )
          v-icon edit
        v-btn(
          icon
          dark
          v-tooltip:left="{ html: 'Component link' }"
          tag="a"
          v-bind:href="'https://github.com/vuetifyjs/vuetify/tree/master/src/components/'+doc.component"
          target="_blank"
          v-if="doc.component"
        )
          v-icon widgets
        v-btn(
          icon
          dark
          v-tooltip:left="{ html: 'Material design spec' }"
          tag="a"
          v-bind:href="doc.spec"
          target="_blank"
          v-if="doc.spec"
        )
          v-icon folder_special
      v-card-text(v-html="doc.desc")
      v-card-row(actions)
        v-btn(flat primary tag="a" href="#api") Go to api
          v-icon.primary--text navigate_next
    h2#examples.display-1 Examples
    slot
    h2#api.display-1.mt-5 API
    v-tabs.elevation-1
      v-tab-item(
        href="#props"
        slot="activators"
      ) Props
      v-tab-content(
        slot="content"
        id="props"
      )
        v-card
          v-card-title
            v-spacer
            v-spacer
            v-text-field(
              append-icon="search"
              label="Search..."
              single-line
              hide-details
              v-model="props"
            )
          v-data-table(
            v-bind:headers="headers"
            v-model="doc.props"
            v-bind:search="props"
            hide-actions
          )
            template(slot="items" scope="props")
              template(v-for="prop in props")
                td(v-for="opt in prop" v-bind:key="opt") {{ opt }}
</template>

<script>
  export default {
    data () {
      return {
        props: '',
        slots: '',
        events: '',
        headers: [
          { text: 'Option', value: 'option', left: true },
          { text: 'Type(s)', value: 'type', left: true },
          { text: 'Default', value: 'default', left: true },
          { text: 'Description', value: 'description', left: true }
        ]
      }
    },

    props: {
      doc: Object
    }
  }
</script>

<style lang="stylus">
  .view
    max-width: 1024px
    margin: 0 auto
    padding-bottom: 75px
</style>