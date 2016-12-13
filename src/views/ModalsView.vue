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
          v-card-row(actions)
            v-btn(v-on:click.native="modal('modal')") Cancel
            v-spacer
            v-btn( v-on:click.native="modal('modal')" class="green white--text") Submit
      v-btn(v-modal:modal2="" class="secondary white--text") Bottom
      v-modal(id="modal2" bottom)
        v-card(class="secondary white--text")
          v-card-row(actions)
            div This is an example of a bottom modal.
            v-spacer
            v-btn(v-on:click.native="modal('modal2')" class="primary white--text") Close
    div(slot="markup")
      markup(lang="html")
        |&lt;v-btn v-modal:modal class="primary white--text"&gt;
        |   ...
        |&lt;/v-btn&gt;
        |&lt;v-modal id="modal"&gt;
        |   &lt;v-card&gt;
        |     &lt;v-card-text&gt;
        |       ...
        |     &lt;/v-card-text&gt;
        |     &lt;v-card-actions&gt;
        |       &lt;v-btn v-on:click.native="modal('modal')"&gt;
        |         Cancel
        |       &lt;/v-btn&gt;
        |       &lt;v-spacer&gt;
        |       &lt;v-btn v-on:click.native="modal('modal')" class="green white--text"&gt;
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
        |       &lt;v-btn v-on:click="modal('modal2')" class="primary white--text"&gt;
        |         Close
        |       &lt;/v-btn&gt;
        |     &lt;/v-card-actions&gt;
        |   &lt;/v-card&gt;
        |&lt;/v-modal&gt;
      markup(lang="js")
        |export default {
        |   methods: {
        |     modal (id) {
        |       this.$vuetify.bus.pub(`modal:close${id}`)  
        |     }
        |   }
        |}
</template>

<script>
  export default {
    name: 'modals-view',

    data () {
      return {
        doc: {
          stage: 'dev',
          title: 'Modal',
          desc: 'The <code>v-modal</code> component is useful for calling a users attention to information or a particular action. It is merely a wrapper for whatever component you choose to place in it. In the examples below, a <code>v-card</code> is used. To close a modal, you must manually publish and event to the Vuetify bus, or click outside of the modal. This is helpful for when you want to capture information by callback after a native click.',
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
      },

      modal (id) {
        this.$vuetify.bus.pub(`modal:close:${id}`)
      }
    }
  }
</script>

<style lang="stylus">
  #modals
    .btn
      margin: 1rem
</style>