<template lang="pug">
  .view
    div
      section-def
        dt(slot="title") Transitions
        dd(slot="desc") Smooth animations help make a UI feel great. Using Vue's transition system and re-usable functional components, you can easily control the motion of your application.
    section
      section-header Examples
      h6 Slide X
      h6 Slide Y
      h6 Scale
      h6 Fade
      whats-next(text="Layouts") What's happening next?
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
          h1: 'Motion',
          title: 'Motion / Transitions | Vuetify',
          description: 'Make an amazing application with smooth built in animations',
          keywords: 'vuetify motion transitions'
        }
      }
    }
  }
</script>