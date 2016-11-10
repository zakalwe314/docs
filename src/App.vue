<template lang="pug">
  v-app(left-fixed-sidebar top-navbar)
  
    main-nav(v-bind:title="title")

    main
      main-side

      v-content
        v-container(fluid)
          transition(name="slide" mode="out-in")
            router-view(@view="view")
    main-footer
</template>

<script>
  export default {
    data () {
      return {
        title: ''
      }
    },

    mounted () {
      this.$vuetify.init()
    },

    methods: {
      view (title) {
        this.title = title
      }
    }
  }
</script>