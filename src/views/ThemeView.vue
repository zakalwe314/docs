<template lang="pug">
  .view
    div
      section-def
        dt(slot="title") Theme
        dd(slot="desc") Soon
    section
      section-header Customizing
      section-text Changing your theme is as easy as updating a few variables in your <code>main.styl</code> file. Navigate to this file, <kbd>src/App.vue</kbd> for webpack and <kbd>src/stylus/main.styl</kbd> for webpack-ssr. The available theme array looks like this:
      markup(lang="stylus")
        |$theme := {
        |   primary: $blue.darken-2
        |   accent: $blue.accent-2
        |   secondary: $grey.darken-3
        |   info: $blue.base
        |   warning: $amber.base
        |   error: $red.base
        |   success: $green.base
        |}
      section-text You can modify any of these properties by typing <code>$theme.attribute</code>. If you want to use a built in color, pick a color from the <router-link to="/css/colors">Colors</router-link> section and update the variable.
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
          h1: 'Theme',
          title: 'Theme | Vuetify',
          description: '',
          keywords: 'vuetify themes'
        }
      }
    }
  }
</script>