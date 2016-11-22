<template lang="pug">
  div(class="doc")
    section
      section-text
        dt(slot="title")
          strong Colors
        dd(slot="desc")
          div Soon
    section(id="colors")
      section-header Material Design
      component-example(header="Classes")
        v-container(fluid)
          v-row
            v-col(xs6 sm6 md4 lg3 v-for="color in colors")
              v-card(v-bind:class="[color]" height="100px")
                v-card-text
                  h3 {{ color }}
              v-card(
                v-for="n in [4,3,2,1]"
                v-bind:class="[color, 'lighten-' + n]"
                class="black--text"
              )
                v-card-text {{ color }} Lighten-{{ n }}
              v-card(
                v-for="n in 4"
                v-bind:class="[color, 'darken-' + n]"
              )
                v-card-text {{ color }} Darken-{{ n }}
              v-card(
                v-for="n in 4"
                v-bind:class="[color, 'accent-' + n]"
                v-if="!['grey', 'blue-grey', 'brown'].includes(color)"
                class="black--text"
              )
                v-card-text {{ color }} Accent-{{ n }}
</template>

<script>
  export default {
    data () {
      return {
        colors: [
          'red', 'pink', 'purple', 'deep-purple',
          'indigo', 'blue', 'light-blue', 'cyan',
          'teal', 'green', 'light-green', 'lime',
          'yellow', 'amber', 'orange', 'deep-orange',
          'brown', 'blue-grey', 'grey'
        ],
        types: [
          'darken', 'lighten', 'accent'
        ]
      }
    },
    mounted () {
      this.$emit('view', 'Colors')
    },

    preFetch () {
      return {
        title: 'Colors',
        meta: {}
      }
    }
  }
</script>

<style lang="stylus">
  #colors
    .col
      margin: .5rem 0
      
    .card
      color: #fff
      font-weight: 500
      letter-spacing: .5px
      text-transform: uppercase
      padding: 1rem
        
      .card__text
        h3
          color: #fff
          align-self: flex-start
          font-size: 1.5rem
          margin: 0
      
    .card__text
      padding: 0
</style>