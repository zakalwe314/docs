<template lang="pug">
  div.component-example
    v-card
      v-card-title.primary
        span.white--text(v-text="header")
        v-spacer
        v-btn(
          icon
          tag="a"
          v-bind:href="'https://github.com/vuetifyjs/docs/tree/master/public/examples/'+file+'.vue'"
          target="_blank"
          v-tooltip:left="{ html: 'Edit this example' }"
        )
          v-icon edit
        v-btn(
          icon
          v-on:click.native.stop="panel = !panel"
          v-tooltip:left="{ html: 'View source' }"
        )
          v-icon code
      v-expansion-panel.elevation-0.component-example__panel
        v-expansion-panel-content(v-model="panel")
          v-tabs
            v-tab-item(
              v-for="tab in tabs"
              v-bind:key="tab"
              slot="activators"
              v-bind:href="'#'+tab"
              v-show="parsed[tab]"
            ) {{ tab }}
            v-tab-content(
              v-for="tab in tabs"
              v-bind:key="tab"
              v-bind:id="tab"
              slot="content"
            )
              markup(:lang="getLang(tab)" v-if="parsed[tab]")
                div(v-html="parsed[tab]")
      v-card-text.subheading
        slot(name="desc")
      v-card-text.pa-3
        div(v-bind:id="'example-'+uid")
    v-divider.my-5
</template>

<script>
  import Vue from 'vue'

  export default {
    data () {
      return {
        tabs: ['template', 'script', 'style'],
        component: null,
        uid: null,
        panel: false,
        parsed: {
          script: null,
          style: null,
          template: null
        }
      }
    },

    props: {
      file: String,
      header: String
    },

    mounted () {
      this.uid = this._uid
      const vm = this
      import('~examples/'+this.file+'.vue').then(comp => {
        new Vue(comp).$mount('#example-'+vm.uid)
      })
      this.request(this.file, this.boot)
    },

    methods: {
      getLang (tab) {
        if (tab === 'script') return 'js'
        if (tab === 'style') return 'css'
        return 'html'
      },
      parseTemplate (target, template) {
        const string = `(<${target}>[\\w\\W]*<\\/${target}>)`
        const regex = new RegExp(string, 'g')
        const parsed = regex.exec(template)

        return parsed
          ? parsed[1].replace(/</g, '&lt;').replace(/>/g, '&gt;')
          : false
      },

      boot (res) {
        this.parsed.template = this.parseTemplate('template', res)
        this.parsed.script = this.parseTemplate('script', res)
        this.parsed.style = this.parseTemplate('style', res)
      },

      toggle () {
        this.active = !this.active
      },

      request (file, cb) {
        const xmlhttp = new XMLHttpRequest()
        const vm = this
        const timeout = setTimeout(() => this.loading = true, 500)
        xmlhttp.open('GET', `/public/examples/${file}.vue`, true)

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
  .component-example    
    .component-example__panel
      .expansion-panel__body
        border: none

      .tabs__item, .markup
        height: 100%

      .tabs__items
        border: none
        max-height: 500px
        overflow-y: auto

      > li
        border: none
</style>