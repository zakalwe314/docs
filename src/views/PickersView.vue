<template lang="pug">
  doc-view(v-bind:doc="doc" id="pickers-view")
    component-example(header="Date pickers" file="pickers/1" v-bind:data="$data")
      section-text(slot="details") Date pickers come in two orientation variations, portrait <strong>(default)</strong> and landscape.
    component-example(file="pickers/2" v-bind:data="$data")
      span(class="title" slot="details") Dark Theme
      section-text(slot="details") Date pickers come in a dark variant which utilizes the applications primary accent color.
    component-example(header="In dialog and menu" file="pickers/3" v-bind:data="$data")
      section-text(slot="details") When integrating a picker into a <code>v-text-field</code>, it is recommended to use the <strong>readonly</strong> prop. This will prevent mobile keyboards from triggering. To save vertical space, you can also hide the picker title.
      section-text(slot="details") Pickers expose a scoped slot that allow you to hook into save and cancel functionality. This will maintain an old value which can be replaced if the user cancels.
    blockquote While the <code>format</code> of the picker can be modified using a prop, this should be used carefully. The <code>date-picker</code> uses the javascript Date object, which can be very particular. 
    component-example(header="Time pickers" file="pickers/4" v-bind:data="$data")
      section-text(slot="details") Time pickers share the same portrait and landscape functionality.
    component-example(file="pickers/5" v-bind:data="$data")
      span(class="title" slot="details") Dark Theme
      section-text(slot="details") Time pickers also have a dark theme which utilizes the applications primary accent color.
    component-example(header="In dialog and menu" file="pickers/6" v-bind:data="$data")
      section-text(slot="details") Due to the flexibility of pickers, you can really dial in the experience exactly how you want it.
    component-example(header="24hr time" file="pickers/7" v-bind:data="$data")
      section-text(slot="details") A time picker can be switched to 24hr format.
</template>

<script>
  export default {
    data () {
      return {
        e1: null,
        e2: null,
        e3: null,
        e4: null,
        e5: null,
        e6: null,
        e7: null,
        menu: false,
        modal: false,
        menu2: false,
        modal2: false,
        doc: {
          title: 'Pickers',
          desc: 'The <code>v-date-picker</code> and <code>v-time-picker</code> are stand-alone components that can be utilized in many existing Vuetify components. They offer the user a visual reprensetation for selecting date and time.',
          props: {
            'v-date-picker': {
              params: [

              ]
            },
            'v-time-picker': {
              params: [
              ]
            }
          }
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
          title: 'Pickers | Vuetify.js',
          h1: 'Pickers',
          description: 'Pickers directive for Vuetify Framework',
          keywords: 'vuetify, pickers, directives'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #pickers-view
    min-height: 150vh
    
    .component-example .col
      margin: 1rem auto
</style>