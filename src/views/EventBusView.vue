<template lang="pug">
  div(class="view")
    div
      section-def
        dt(slot="title") Event Bus
        dd(slot="desc") The Vuetify <code>bus</code> is the glue that holds all of your components together. Made for Vue SSR <em>(Server Side Rendering)</em>, the bus system ensures that components are able to work in a variety of setups.
    section
      section-header Components
      section-text Vuetify's components utilize a simple pub/sub Bus in order to communicate throughout an application. This makes your website 100% compatible with server side rendering. It also makes it easy to hook into a components functionality through <code>this.$vuetify.bus</code>.
      markup(lang="js")
        |data () {
        |   return {
        |     popup_data: ['Toast with Callback', 'right', 4000, () =&gt; alert('Callback')],
        |   }
        |}
        |mounted () {
        |   this.$vuetify.bus.sub('modal:close:demo-modal', this.popup)
        |},
        |methods: {
        |   popup () {
        |     this.$vuetify.toast.create(...popup_data)
        |   }
        |}
      section-text
        p In the example above, we hook into the close event of a modal with the id of <code>demo-modal</code>. All of Vuetify's events follow a similar structure:
        code {component name}:{component action}:{component id}(optional)
      
    section
      section-header Events
      section-text When Vue components are broken down, event listeners need to be removed. This is the process for regular <strong>DOM</strong> event listeners, and it is the same for the Vuetify Bus. This can be done by calling the <strong>unsub</strong> method on the bus in the Vue <strong>beforeDestroy</strong> hook.
      markup(lang="js")
        |mounted () {
        |   this.$vuetify.bus.sub('modal:close:demo-modal', this.popup)
        |},
        |beforeDestroy () {
        |   this.$vuetify.bus.unsub('modal:close:demo-modal', this.popup)
        |}
      section-text While this accomplishes binding and unbinding an event, it can become tedious in a larger application. To combat this, Vuetify provides a simple Vue mixin to do this automatically for you. The mixin looks for an event variable on the component. The mixin also assumes event to be an array of arrays. 
      markup(lang="js")
        |import Eventable from '../node_modules/vuetify/src/mixins/eventable'
        |&nbsp;
        |export default {
        |   mixins: [Eventable],
        |   computed: {
        |     events () {
        |       return [
        |         ['modal:open:demo-modal', this.open],
        |         ['modal:close:demo-modal', this.popup]
        |       ]
        |     }
        |   }
        |}
      section-text The above will automatically sub to the Bus upon creation and unsub when removed.
    section
      section-header Extending
      section-text You may want to create your own events in order to support your application, which is just as easy as hooking into existing ones. This allows you to take advantage of the SSR capabilities you get by default.
      markup(lang="js")
        |this.$vuetify.bus.sub('{unique string}', callback)
        |&nbsp;
        |this.$vuetify.bus.pub('{unique string}', arg1, arg2)
      h6 Loading
      section-text Depending on the state of your application, you may need to wait for the <strong>DOM</strong> to be ready or just call immediately. Vuetify provides a simple function that will do this for you.
      markup(lang="js")
        |mounted () {
        |   this.$vuetify.load(this.init)
        |},
        |methods: {
        |   init () {
        |     alert('Component ready!')
        |   }
        |}
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
          h1: 'Event Bus',
          title: 'Event Bus | Vuetify.js',
          description: 'The Vuetify bus powers your application by allowing components to communicate to each other',
          keywords: 'vuetify bus'
        }
      }
    }
  }
</script>