<template lang="pug">
  doc-view(v-bind:doc="doc" id="modals")
    component-example
      v-btn(
        primary,
        v-modal:modal=""
      ) Regular
      v-modal(id="modal")
        v-card
          v-card-text
            p(class="text-xs-center") What is your age?
            v-select(v-bind:options="[{ text: '10-19', value: 1 }, { text: '20+', value: 2 }]" label="What is your age?")
            p This information is used to improve your experience on our site.
          v-card-actions
            v-btn(v-close:modal="") Cancel
            v-col-spacer
            v-btn(class="green white--text" v-on:click="submit" v-close:modal="") Submit
      v-btn(
        secondary, 
        v-modal:modal2=""
      ) Bottom
      v-modal(
        id="modal2",
        bottom
      )
        v-card(class="secondary white--text")
          v-card-actions
            div This is an example of a bottom modal.
            v-col-spacer
            v-btn(v-close:modal2="" class="primary white--text") Close
</template>

<script>
  export default {
    name: 'modals-view',

    data () {
      return {
        doc: {
          title: 'Modal',
          desc: 'Soon',
          types: [
            'comp', 'slot', 'directive'
          ],
          params: []
        }
      }
    },

    mounted () {
      this.$emit('view', 'Modals')
    },

    methods: {
      submit () {
        //
      }
    }
  }
</script>

<style lang="stylus">
  #modals
    .btn
      margin: 1rem
</style>