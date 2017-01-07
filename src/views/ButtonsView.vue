<template lang="pug">
  doc-view(v-bind:doc="doc" id="buttons-view")
    component-example(header="Normal" file="buttons/1")
      v-btn Default
      v-btn(success) Success
      v-btn(info) Info
      v-btn(warning) Warning
      v-btn(error) Error
      v-btn(disabled) Default Disabled
      v-btn(success disabled) Success Disabled
      v-btn(info disabled) Info Disabled
      v-btn(warning disabled) Warning Disabled
      v-btn(error disabled) Error Disabled
    component-example(header="Flat" file="buttons/2")
      v-btn(flat) Default Flat
      v-btn(success flat) Success Flat
      v-btn(info flat) Info Flat
      v-btn(warning flat) Warning Flat
      v-btn(error flat) Error Flat
    component-example(header="Sizes" file="buttons/3")
      v-btn(small) Default Small
      v-btn(success small) Success Small
      v-btn(info small) Info Small
      v-btn(warning small) Warning Small
      v-btn(error small) Error Small
      v-btn(large) Default Large
      v-btn(success large) Success Large
      v-btn(info large) Info Large
      v-btn(warning large) Warning Large
      v-btn(error large) Error Large
    component-example(header="Block" file="buttons/4")
      div.btn--block-example
        v-btn(block) Default Block
        v-btn(success block) Success Block
        v-btn(info block) Info Block
        v-btn(warning block) Warning Block
        v-btn(error block) Error Block
    component-example(header="Rounded" file="buttons/5")
      v-btn(round) Default Rounded
      v-btn(success round) Success Rounded
      v-btn(info round) Info Rounded
      v-btn(warning round) Warning Rounded
      v-btn(error round) Error Rounded
    component-example(header="Outline" file="buttons/6")
      v-btn(outline) Default Outline
      v-btn(success outline) Success Outline
      v-btn(info outline) Info Outline
      v-btn(warning outline) Warning Outline
      v-btn(error outline) Error Outline
    component-example(header="Floating" file="buttons/7")
      v-btn(floating success small)
        v-icon check
      v-btn(floating info small)
        v-icon info
      v-btn(floating warning small)
        v-icon warning
      v-btn(floating error small)
        v-icon priority_high
      v-btn(floating success)
        v-icon check
      v-btn(floating info)
        v-icon info
      v-btn(floating warning)
        v-icon warning
      v-btn(floating error)
        v-icon priority_high
      v-btn(floating large success)
        v-icon check
      v-btn(floating large info)
        v-icon info
      v-btn(floating large warning)
        v-icon warning
      v-btn(floating large error)
        v-icon priority_high
    component-example(header="Icon" file="buttons/8")
      v-btn(icon)
        v-icon hearing
      v-btn(icon)
        v-icon computer
      v-btn(icon)
        v-icon headset
      v-btn(icon)
        v-icon(medium) check
      v-btn(icon)
        v-icon(large) warning
      v-btn(icon)
        v-icon(x-large) language
    component-example(header="With Icons" file="buttons/9")
      v-btn(class="purple white--text")
        v-icon(left) event
        | Icon Left
      v-btn(
        flat
        class="teal--text"
      ) Icon Right
        v-icon(right) account_circle
      v-btn(class="deep-orange white--text")
        v-icon(left) build
        | Left Icon
    component-example(header="Ripples" file="buttons/10")
      p(slot="details") Ripple colors can be altered by passing a class through the ripple prop, <code>v-ripple="{ class: 'red--text' }"</code> Defined class should define the desired color using the <code>color</code> css attribute.
      v-btn(ripple success)
        v-icon(left) check
        | Accept
      v-btn(ripple error)
        v-icon(left) delete
        | Delete
      v-btn(flat ripple warning) Warning
      v-btn(floating large info ripple)
        v-icon info_outline
      v-btn(v-bind:ripple="{ class: 'red--text' }") Colored
    component-example(header="Loaders" file="buttons/11")
      v-btn(
        secondary
        v-bind:loading="loading" 
        v-on:click.native="loader('loading')"
        v-bind:disabled="loading"
      ) Accept Terms
      v-btn(
        class="blue-grey white--text"
        v-bind:loading="loading3" 
        v-on:click.native="loader('loading3')"
        v-bind:disabled="loading3"
      ) Upload
        v-icon(right) cloud_upload
      v-btn(
        success 
        v-bind:loading="loading2" 
        v-on:click.native="loader('loading2')"
        v-bind:disabled="loading2"
      ) Custom Loader
        span(slot="loader") Loading...
      v-btn(
        info
        v-bind:loading="loading4" 
        v-on:click.native="loader('loading4')"
        v-bind:disabled="loading4"
      ) Icon Loader
        span(slot="loader" class="loader")
          v-icon cached
    div(slot="markup")
      markup(lang="js")
        |data () {
        |   return {
        |     loading: false
        |   }
        |}
      markup(lang="scss")
        |@keyframes loader {
        |   from {
        |     transform: rotate(0);
        |   }
        |&nbsp;
        |   to {
        |     transform: rotate(360deg);
        |   }
        |}
        |&nbsp;
        |.loader {
        |   animation: loader 1s infinite
        |}
</template>

<script>
  export default {
    data () {
      return {
        loading: false,
        loading2: false,
        loading3: false,
        loading4: false,
        doc: {
          title: 'Button',
          desc: `
            <p>
              The <code>v-btn</code> component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color. Remember that all event captures must be done using the <strong>.native</strong> modifier.
            </p>
          `,
          props: {
            'v-btn': {
              params: [
                [
                  'block',
                  'Boolean',
                  'False',
                  'Applies the btn--block class'
                ],
                [
                  'flat',
                  'Boolean',
                  'False',
                  'Applies the btn--flat class'
                ],
                [
                  'floating',
                  'Boolean',
                  'False',
                  'Applies the btn--floating class'
                ],
                [
                  'icon',
                  'Boolean',
                  'False',
                  'Applies the btn--icon class'
                ],
                [
                  'large',
                  'Boolean',
                  'False',
                  'Applies the btn--large class'
                ],
                [
                  'loading',
                  'Boolean',
                  'False',
                  'Applies the btn--loading class'
                ],
                [
                  'outline',
                  'Boolean',
                  'False',
                  'Applies the btn--outline class'
                ],
                [
                  'round',
                  'Boolean',
                  'False',
                  'Applies the btn--round class'
                ],
                [
                  'raised',
                  'Boolean',
                  'True',
                  'Applies the btn--raised class'
                ],
                [
                  'ripple',
                  'Boolean',
                  'False',
                  'Applies the ripple directive',
                ],
                [
                  'small',
                  'Boolean',
                  'False',
                  'Applies the btn--small class',
                ],
                [
                  'type',
                  'String',
                  'button',
                  'Sets the buttons type attribute',
                ]
              ]
            }
          },
          slots: {
            'v-btn': {
              default: true,
              params: [
                [
                  'loader',
                  'Used for specifying custom loader'
                ]
              ]
            }
          }
        }
      }
    },

    mounted () {
      this.$emit('view', this.meta())
    },

    preFetch () {
      return this.methods.meta()
    },

    methods: {
      loader (load) {
        this[load] = !this[load]
        // setTimeout(() => this[load] = false, 3000)
      },

      meta () {
        return {
          title: 'Button Component | Vuetify.js',
          h1: 'Buttons',
          description: 'Button component for Vuetify Framework',
          keywords: 'vuetify, buttons, components'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #buttons-view
    .btn
      margin: 1rem
      
    .btn--block-example
      flex-wrap: wrap !important
      flex-basis: 100% !important
      
      .btn
        margin: 1rem 0
        
    .loader
      // animation: loader 1s infinite
        
    @keyframes loader
      from
        transform: rotate(0)
      
      to
        transform: rotate(360deg)
</style>