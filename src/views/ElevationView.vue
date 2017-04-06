<template lang="pug">
  div(class="view" id="elevation-view")
    div
      section-def
        dt(slot="title") Elevation
        dd(slot="desc") The elevation helpers allow you to control relative depth, or distance, between two surfaces along the z-axis.
    section
      h6 Variants
      p There's a total of 25 elevation levels. You can set an element elevation by using the class <code>elevation-N</code>, where N is a integer between 0-24 corresponding to the desired elevation.

      h6 Playground
      v-container(fluid)
        v-row
          v-col(xs4)
            v-select(label="Select elevation" v-bind:items="elevations" v-model="selected" item-text="text" item-value="class")
          v-col(xs1)
          v-col(xs6)
            v-card(v-bind:class="example.classes")
              v-card-text
                p( class="text-xs-center") {{ example.elevation }}
</template>

<script>
  export default {
    name: 'elevation-view',

    data () {
      return {
        example: {
          classes: [],
          elevation: ''
        },
        elevations: Array.from(Array(25).keys()).map(i => ({text: `elevation-${i}`, class: `class="elevation-${i}"`}) ),
        selected: {text: `elevation-1`, class: `class="elevation-1"`}
      }
    },

    watch: {
      selected () {
        this.example = {
          classes: [this.selected.text],
          elevation: this.selected.class
        }
      }
    },

    mounted () {
      this.$emit('view', this.meta())
      this.selected = this.elevations[1]
    },

    preFetch () {
      return this.methods.meta()
    },

    methods: {
      meta () {
        return {
          title: 'Elevation Classes | Vuetify.js',
          h1: 'Elevation',
          description: 'Elevation helper classes allow you to control relative depth, or distance, between two surfaces along the z-axis.',
          keywords: 'vuetify, elevation helper classes'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #display-view
    .toolbar
      height: 64px
</style>
