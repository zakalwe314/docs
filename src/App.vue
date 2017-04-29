<template lang="pug">
  v-app(row)
    main-sidebar

    main
      main-toolbar(v-bind:title="title")

      v-content
        v-container(fluid)
          transition(name="slide" mode="out-in")
            router-view(@view="meta")
        main-footer
</template>

<script>
  import MainSidebar from '~components/MainSidebar'
  import MainToolbar from '~components/MainToolbar'
  import MainFooter from '~components/MainFooter'

  export default {
    components: {
      MainSidebar,
      MainToolbar,
      MainFooter
    },

    data () {
      return {
        title: ''
      }
    },

    computed: {
      isHome () {
        return this.$route.path === '/'
      },
      sidebar () {
        return this.$store.state.sidebar
      }
    },

    methods: {
      meta (obj) {
        this.title = obj.h1
        this.$store.commit('vuetify/TITLE', obj.title)
        this.$store.commit('vuetify/DESCRIPTION', obj.description)
        this.$store.commit('vuetify/KEYWORDS', obj.keywords)
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>