<template lang="pug">
  doc-view(:doc="doc", id="motion-view")
    component-example(header="Slide X transitions" file="motion/1")
    component-example(header="Slide Y transitions" file="motion/2")
    blockquote Animations use the applications <code>$primary-transition</code>.
    component-example(header="Scale transition" file="motion/3")
      section-text(slot="details") Many of Vuetify's components contain a <code>transition</code> prop which allows you to specify your own.
    component-example(header="Fade transition" file="motion/4")
      section-text(slot="details") Another example of the fade transition can be found on the <router-link to="/components/carousel">Carousel</router-link> component.
    component-example(header="Custom Origin" file="motion/5")
      section-text(slot="details") Programmatically control the transition origin with a simple prop.
    h6 Create your own
    section-text You can use Vuetify's transition helper function to easily create your own custom transitions. This function will return an object that you can import into Vue. Using Vue's <a href="https://vuejs.org/v2/guide/render-function.html#Functional-Components" target="_blank">functional component</a> option will make sure your transition is as efficient as possible. Simply import the function:
    markup(lang="javascript")
      |import { createSimpleTransition } from '../../node_modules/vuetify/src/util/helpers'
      |&nbsp;
      |const myTransition = createSimpleTransition('my-transition')
      |&nbsp;
      |Vue.component('my-transition', myTransition)
    section-text The <code>createSimpleTransition</code> function accepts 1 argument, name. This will be the name that you can hook into with your style. This is an example of what <code>v-fade-transition</code> looks like:
    markup(lang="stylus")
      |.fade-transition
      |   &-leave-active
      |     position: absolute
      |&nbsp;
      |   &-enter-active, &-leave, &-leave-to
      |     transition: $primary-transition
      |&nbsp;
      |   &-enter, &-leave-to
      |     opacity: 0
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Motion',
          desc: `Smooth animations help make a UI feel great. Using Vue's transition system and re-usable functional components, you can easily control the motion of your application.`,
          functional: {
            'transitions': {
              params: [
                ['v-fade-transition', 'Fade in'],
                ['v-slide-x-transition', 'Slide in from left'],
                ['v-slide-x-reverse-transition', 'Slide in from right'],
                ['v-slide-y-transition', 'Slide in from top'],
                ['v-slide-y-reverse-transition', 'Slide in from bottom'],
                ['v-scale-transition', 'Scale from small to large']
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
          h1: 'Motion',
          title: 'Motion / Transitions | Vuetify',
          description: 'Make an amazing application with smooth built in animations',
          keywords: 'vuetify motion transitions'
        }
      }
    }
  }
</script>