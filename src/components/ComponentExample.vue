<template lang="pug">
  div(class="component-example")
    component-header(@source="active = !active") {{ header }}
    slot(name="details")
    v-expansion-panel(ref="source" class="component-example__expansion-panel")
      v-expansion-panel-content(ref="body" v-model="active")
        markup(lang="html" v-if="content")
          div(v-html="content" ref="markup")
    div(class="component-example__container")
      v-fade-transition
        v-progress-circular(
          indeterminate 
          v-bind:size="50"
          v-if="loading"
          class="primary--text" 
        )
      div(v-bind:id="'example-' + _uid")
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'component-example',

    data () {
      return {
        active: false,
        template: null,
        content: null,
        loading: false
      }
    },

    props: {
      header: String,

      file: String,

      data: {
        type: Object,
        default () {
          return {
            example: true
          }
        }
      }
    },

    mounted () {
      this.request(`${this.file}.html`, this.boot)
    },

    methods: {
      boot (res) {
        this.template = res
        this.content = this.template.replace(/</g, '&lt;').replace(/>/g, '&gt;')
        const render = Vue.compile(this.template)
        const vm = this

        new Vue({
          name: 'test',
          data () {
            return vm.data || {}
          },
          render: render.render,
          staticRenderFns: render.staticRenderFns
        }).$mount(`#example-${vm._uid}`)
      },

      toggle () {
        this.active = !this.active
      },

      request (file, cb) {
        const xmlhttp = new XMLHttpRequest()
        const vm = this
        const timeout = setTimeout(() => this.loading = true, 500)
        xmlhttp.open('GET', `/public/examples/${file}`, true)

        xmlhttp.onreadystatechange = function () {
          if(xmlhttp.status == 200 && xmlhttp.readyState == 4) {
            clearTimeout(timeout)
            vm.loading = false
            cb(xmlhttp.responseText)
          }
        }
        xmlhttp.send()
      }
    }
  }
</script>

<style lang="stylus">
  @import '../stylus/settings/_variables'
  
  .component-example
    min-height: 100px
    margin-bottom: 2rem
    
    .component-example__expansion-panel
        box-shadow: none
        background: transparent
        
        li
          border: none
        
      .expansion-panel__body
        border: none
        box-shadow: none
        background: transparent
      
    &-copy
      opacity: 0
      position: absolute
      
    &-copied
      position: absolute
      right: 1rem
      bottom: .5rem
      font-size: 1rem
      font-weight: 700
      color: rgba(#000, 0.3)
      
    &__container
      flex-wrap: wrap
      transition: .3s ease-out
      text-align: center
      
      > *
        text-align: initial
        
      @media screen and (max-width: $grid-breakpoints.sm)
        margin: 0 -1rem 1rem
        padding: 2rem 1rem
</style>