<template lang="pug">
  doc-view(v-bind:doc="doc" id="modals")
    component-example(header="Variants")
      v-btn(v-modal:modal="" class="primary white--text") Regular
      v-modal(id="modal")
        v-card
          v-card-text
            p(class="text-xs-center") What is your age?
            v-select(v-bind:options="[{ text: '10-19', value: 1 }, { text: '20+', value: 2 }]" label="What is your age?")
            p This information is used to improve your experience on our site.
          v-card-actions
            v-btn(v-on:click.native.stop="$vuetify.bus.pub('modal:close:modal', true)") Cancel
            v-spacer
            v-btn(class="green white--text" v-on:click.native.prevent="$vuetify.bus.pub('modal:close:modal', true)") Submit
      v-btn(v-modal:modal2="" class="secondary white--text") Bottom
      v-modal(id="modal2" bottom)
        v-card(class="secondary white--text")
          v-card-actions
            div This is an example of a bottom modal.
            v-spacer
            v-btn(v-on:click.native.prevent="$vuetify.bus.pub('modal:close:modal2', true)" class="primary white--text") Close
    div(slot="markup")
      markup(lang="xml")
        |&lt;v-btn v-modal:modal class="primary white--text"&gt;
        |   ...
        |&lt;/v-btn&gt;
        |&lt;v-modal id="modal"&gt;
        |   &lt;v-card&gt;
        |     &lt;v-card-text&gt;
        |       ...
        |     &lt;/v-card-text&gt;
        |     &lt;v-card-actions&gt;
        |       &lt;v-btn v-on:click.native.stop="$vuetify.bus.pub('modal:close:modal', true)"&gt;
        |         Cancel
        |       &lt;/v-btn&gt;
        |       &lt;v-spacer&gt;
        |       &lt;v-btn class="green white--text" v-on:click.native.prevent="$vuetify.bus.pub('modal:close:modal', true)"&gt;
        |         Submit
        |       &lt;/v-btn&gt;
        |     &lt;/v-card-actions&gt;
        |   &lt;/v-card&gt;
        |&lt;/v-modal&gt;
        |&nbsp;
        |&lt;v-btn v-modal:modal class="primary white--text"&gt;
        |   ...
        |&lt;/v-btn&gt;
        |&lt;v-modal id="modal2"&gt;
        |   &lt;v-card&gt;
        |     &lt;v-card-actions&gt;
        |       &lt;div&gt;This is an example of a bottom modal&lt;/div&gt;
        |       &lt;v-spacer&gt;
        |       &lt;v-btn v-on:click.native.prevent="$vuetify.bus.pub('modal:close:modal2', true)" class="primary white--text"&gt;
        |         Close
        |       &lt;/v-btn&gt;
        |     &lt;/v-card-actions&gt;
        |   &lt;/v-card&gt;
        |&lt;/v-modal&gt;
</template>

<script>
  export default {
    name: 'modals-view',

    data () {
      return {
        doc: {
          stage: 'dev',
          title: 'Modal',
          desc: 'Soon',
          params: [
            [
              '<code>&lt;v-modal&gt;</code>',
              '',
              'Base component'
            ],
            [
              '<code>id</code>',
              'The id to bind the directive',
              'Required: true'
            ],
            [
              '<code>bottom</code>',
              'Applies the modal--bottom class',
              'Default: false'
            ]
          ]
        }
      }
    },

    mounted () {
      this.$emit('view', this.meta())
    },

    preFetch () {
      return this.methods.meta()
    },

    methods: {
      meta () {
        return {
          title: 'Modal Component | Vuetify',
          h1: 'Modals',
          description: 'Modal component for Vuetify Framework',
          keywords: 'vuetify, modals, components'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #modals
    .btn
      margin: 1rem
</style>