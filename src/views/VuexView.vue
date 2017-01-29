<template lang="pug">
  div(class="view")
    div
      section-def
        dt(slot="title") Vuex
        dd(slot="desc") Vuetify integrates directly with the official <a href="#!" target="_blank">Vuex</a> library. This makes it even easier to build your application with reactivity and easier debugging with Vue dev tools.
    section
      section-header Components
      section-text Vuetify's components automatically integrate into your Vuex store making it easy to scaffold your application with the ability to use features that you are already using for your Vue application.
      markup(lang="js")
        |data () {
        |   return {
        |     popup_data: ['Toast with Callback', 'right', 4000, () =&gt; alert('Callback')],
        |   }
        |}
        |mounted () {
        |   this.$store.watch(state => state.vuetify.modal['demo-modal'].active, active => this.popup)
        |},
        |methods: {
        |   popup (active) {
        |     if (active) {
        |       this.$vuetify().toast.create(...popup_data)
        |     }
        |   }
        |}
      section-text
        p In the example above, we hook into the close event of a modal with the id of <code>demo-modal</code>. This may seem scary at first if you are not currently using Vuex, but it will help better shape your application as it grows in size and complexity.
        p If you do not currently have Vue dev tools installed, please do so <a href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd" target="_blank">here</a>. This chrome extension is provides detailed information about your application, including the currently created components, Vuex mutations and much more.
      
    section
      section-header Events
      section-text When you instantiate or break down components when changing views or injecting new components into your view, Vuetify will automatically bind and unbind from the DOM and Vuex store. With this integration, you can setup your application to observe data changes within the Vuetify framework.
      markup(lang="js")
        |data () {
        |   return {
        |     watchers: []
        |   }
        |},
        |&nbsp;
        |created () {
        |   this.watchers.push(
        |     this.$store.watch(state => state.vuetify.modal['demo-modal'].active, active => this.myAction),
        |     this.$store.watch(state => state.vuetify.modal['main-sidebar'].active, active => this.myEvent)
        |   )
        |},
        |&nbsp;
        |beforeDestroy () {
        |   this.watchers.forEach(w => w())
        |}
      section-text The example above would bind watchers when created, and remove them when the component is destroyed. While this accomplishes binding and unbinding an event, it can become tedious in a larger application. To combat this, Vuetify provides a simple Vue mixin to do this automatically for you. The mixin requires an event variable on the component data function.
      markup(lang="js")
        |import Eventable from '../node_modules/vuetify/src/mixins/eventable'
        |&nbsp;
        |export default {
        |   mixins: [Eventable],
        |&nbsp;
        |   computed: {
        |     events () {
        |       return [
        |         ['modal', 'modal-id.active', this.open],
        |         ['collapsible', 'demo-collapsible', this.popup, { deep: true }]
        |       ]
        |     }
        |   }
        |}
      section-text The <strong>Eventable</strong> mixin will iterate the event array and automatically bind and unbind your watchers to the store. The array consts of 4 indexes.
      ul(class="mb-3")
        li The name of the component
        li The id or uid of the component, whichever is available
          ul
            li This index can be <kbd>.</kbd> delimited to access deeper properties
        li The callback
        li Optional params to pass to the Vuex watcher
      section-text This functionality is still under development and is subject to change. Please be aware of this when setting up your application.
    section
      whats-next(route="/layouts" text="Layouts") Now that you have all the tools needed to build your next awesome application, head over to the layouts section to choose a ui.
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', this.meta())
    },

    preFetch () {
      return this.methods.meta()
    },

    methods: {
      meta () {
        return {
          h1: 'Vuex',
          title: 'Vuex | Vuetify.js',
          description: 'The Vuetify integrates with the official Vuex library for reactivity in your application.',
          keywords: 'vuetify, vuex, vuex integration, vuex framework'
        }
      }
    }
  }
</script>