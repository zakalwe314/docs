<template lang="pug">
  div(class="view")
    section
      section-text
        dt(slot="title") Bus
        dd(slot="desc") The Vuetify <code>bus</code> is the glue that holds all of your components together. Made for Vue SSR <em>(Server Side Rendering)</em>, the bus system ensures that components are able to work in a variety of setups.

    section
      section-header Meta
      p(class="section-text") Updating your page meta details can be done by publishing an event to the Vuetify <code>bus</code>. This is the same functionality that is hooked into by the <strong>Vuetify SSR template</strong> when the pages are being initially rendered. Here is an example of a view:
      markup(lang="js")
        |// App.vue
        |export default {
        |   mounted () {
        |     this.$vuetify.init()
        |   },
        |   methods: {
        |     view (meta) {
        |       this.$vuetify.bus.pub(meta:title, obj.title)
        |       this.$vuetify.bus.pub(meta:description, obj.description)
        |       this.$vuetify.bus.pub(meta:keywords, obj.keywords)
        |     }
        |   }
        |}
        |&nbsp;
        |// View.vue
        |export default {
        |   mounted () {
        |     this.$emit('view', this.meta())
        |   },
        |   preFetch () {
        |     return this.methods.meta()
        |   },
        |   methods: {
        |     meta () {
        |       return {
        |         title: 'Vuetify',
        |         description: 'A Vue JS Framework',
        |         keywords: 'vue, vuetify'
        |       }
        |     }
        |   }
        |}
      p(class="section-text") In the example above, we emit an event that is captured on <code>&lt;router-view v-on:view="view"&gt;</code>. In our view, we have a meta method that is used by the router on view change, and the server for preFetching data. This allows pages to have proper meta information for Bots, but also change when the user is navigating to a different page.
    section
      section-header Components
      p(class="section-text") Vuetify's components utilize a simple pub/sub Bus in order to communicate throughout an application. This makes your website 100% compatible with server side rendering. It also makes it easy to hook into a components functionality through <code>this</code>.
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
      p(class="section-text") In the example above, we hook into the close event of a modal with the id of <code>demo-modal</code>. All of Vuetify's events follow a similar structure:
      v-list
        v-list-item
          v-list-item-title Component name
        v-list-item
          v-list-item-title Component action
        v-list-item
          v-list-item-title Component id (optional)
    section
      section-header Events
      p(class="section-text") When Vue components are broken down, event listeners need to be removed. This is the process for regular <strong>DOM</strong> event listeners, and it is the same for the Vuetify Bus. This can be done by calling the <strong>unsub</strong> method on the bus in the Vue <strong>beforeDestroy</strong> hook.
      markup(lang="js")
        |mounted () {
        |   this.$vuetify.bus.sub('modal:close:demo-modal', this.popup)
        |},
        |beforeDestroy () {
        |   this.$vuetify.bus.unsub('modal:close:demo-modal', this.popup)
        |}
      p(class="section-text") While this accomplishes binding and unbinding an event, it can become tedious in a larger application. To combat this, Vuetify provides a Vue mixin to do this automatically for you. As well, the Bus accepts an array, which allows for a smoother process.
      markup(lang="js")
        |import Eventable from '../node_modules/vuetify/src/mixins/eventable'
        |&nbsp;
        |export default {
        |   mixins: [Eventable],
        |   computed: {
        |     events () {
        |       return [
        |         'modal:open:demo-modal', this.open,
        |         'modal:close:demo-modal', this.popup
        |       ]
        |     }
        |   }
        |}
      p(class="section-text") The above will automatically sub to the Bus upon creation and unsub when removed.
    section
      section-header Extending
      p(class="section-text") You may want to create your own events in order to support your application, which is just as easy as hooking into existing ones. This allows you to take advantage of the SSR capabilities you get by default.
      markup(lang="js")
        |this.$vuetify.bus.sub('{unique string}', callback)
        |&nbsp;
        |this.$vuetify.bus.pub('{unique string}', arg1, arg2)
      h6 Loading
      p(class="text-text") Depending on the state of your application, you may need to wait for the <strong>DOM</strong> to be ready or just call immediately. Vuetify provides a simple function that will do this for you.
      markup(lang="js")
        |mounted () {
        |   this.$vuetify.load(this.init)
        |},
        |methods: {
        |   init () {
        |     alert('Component ready!')
        |   }
        |}
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
          h1: 'Bus',
          title: 'Bus System | Vuetify',
          description: 'The Vuetify bus powers your application by allowing components to communicate to each other',
          keywords: 'vuetify bus'
        }
      }
    }
  }
</script>