<template lang="pug">
  v-app(fixed-toolbar)
    main-navigation
    main-toolbar(v-bind:title="title")
    main
      v-container(fluid)
        transition(name="slide" mode="out-in")
          router-view(@view="meta")
      main-footer
</template>

<script>
  import MainNavigation from '~components/MainNavigation'
  import MainToolbar from '~components/MainToolbar'
  import MainFooter from '~components/MainFooter'

  export default {
    components: {
      MainNavigation,
      MainToolbar,
      MainFooter
    },

    data () {
      return {
        title: ''
      }
    },

    watch: {
      '$route' () {
        this.$store.commit('vuetify/COLOR', this.getColor(this.$route.path))
        this.getPrevNext()
      }
    },

    mounted () {
      this.$store.commit('vuetify/COLOR', this.getColor(this.$route.path))
      this.getPrevNext()
    },

    methods: {
      getColor (path) {
        let color = 'primary'

        if (this.match(path, /components/)) {
          color = 'indigo'
        } else if (this.match(path, /motion/)) {
          color = 'purple'
        } else if (this.match(path, /quick-start/)) {
          color = 'teal'
        } else if (this.match(path, /server-side-rendering/)) {
          color = 'cyan'
        } else if (this.match(path, /directives/)) {
          color = 'orange'
        }

        return color
      },
      getPrevNext () {
        const currentIndex = this.$router.options.routes.findIndex(r => r.path === this.$route.path)
        const previous = currentIndex > 0 ? this.$router.options.routes[currentIndex - 1] : null
        const next = currentIndex < this.$router.options.routes.length - 1
          ? this.$router.options.routes[currentIndex + 1]
          : null

        this.$store.commit('vuetify/NEXT', {
          name: next ? next.meta.name : null,
          color: next ? this.getColor(next.path) : null,
          route: next ? next.path : null
        })

        this.$store.commit('vuetify/PREVIOUS', {
          name: previous ? previous.meta.name : null,
          color: previous ? this.getColor(previous.path) : null,
          route: previous ? previous.path : null
        })
      },
      match (path, regex) {
        return path.match(regex)
      },
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