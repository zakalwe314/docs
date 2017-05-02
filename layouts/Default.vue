<template lang="pug">
  v-app
    main-navigation
    main-toolbar
    main
      v-container(fluid)
        v-slide-x-transition(mode="out-in")
          router-view
    main-footer
</template>

<script>
  import MainNavigation from 'components/MainNavigation'
  import MainToolbar from 'components/MainToolbar'
  import MainFooter from 'components/MainFooter'

  export default {
    components: {
      MainNavigation,
      MainToolbar,
      MainFooter
    }
  }
</script>