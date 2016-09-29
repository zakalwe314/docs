<template lang="pug">
  div.view
    section
      section-header Introduction
      component-chip(type="comp")
      component-chip(type="slot")
      section-text(v-html="text")
    section
      section-header Examples
      component-header Basic
      component-example
        v-card
          v-card-text
            p(v-text="card_text")
        v-card(class="green darken-1 white--text")
          v-card-text
            p(v-text="card_text")
      component-header Title
      component-example
        div
          v-card
            v-card-title(class="red lighten-1")
              v-card-title-text(class="white--text")
                v-icon all_out
                | Update
            v-card-text
              p(v-text="card_text")
            v-card-actions
              v-btn(flat) Cancel
              v-col-spacer
              v-btn(class="green white--text") Submit
        div
          v-card
            v-card-title(class="green lighten-1")
              v-card-title-text(class="white--text") Title
              v-card-title-actions
                v-btn(small, class="btn--title blue lighten-2 white--text")
                  span Upload
                  v-icon(right) backup
            v-card-text
              p(v-text="card_text")
      component-header Picture
      component-example
        div
          v-card
            v-card-title(
              img="http://www.titanui.com/wp-content/uploads/2013/04/03/Vector-Cartoon-Nature-Background-03.jpg",
              height="300px"
            )
              v-card-title-text(class="white--text") Update
            v-card-text
              p(v-text="card_text")
            v-card-actions
              v-btn(flat, class="primary--text") View Updates
        div
          v-card
            v-card-title(
              img="https://s-media-cache-ak0.pinimg.com/564x/e6/f5/27/e6f5279ad0965b9ccdadc3934429d122.jpg",
              height="300px"
            )
              v-card-title-text(class="white--text") Welcome
            v-card-text
              p(v-text="card_text")
            v-card-actions
              v-btn(flat, class="primary--text") Get Started
      component-header Background
      component-example
        div.portrait
          v-card(
            img="https://cdn.fstoppers.com/styles/full/s3/lead/2014/11/fstoppers-natural-light-dani-how-to-retouch-dof-bokeh-sharp-facebook-female-fashion-nyc-model-portrait1.jpg"
            height="300px"
          )
            v-card-actions(class="white--text") Picture.png
        div.portrait
          v-card(
            img="http://images6.fanpop.com/image/photos/38500000/beautiful-wallpaper-1-beautiful-pictures-38538866-500-313.jpg"
            height="300px"
          )
            v-card-actions(class="white--text") Picture.png
      component-header Horizontal
      component-example
        div
          v-card(horizontal)
            v-card-title(
              img="http://www.titanui.com/wp-content/uploads/2013/04/03/Vector-Cartoon-Nature-Background-03.jpg"
            )
            v-card-stack
              v-card-text
                p(v-text="card_text")
              v-card-actions
                v-btn(flat, class="primary--text") Get Started
        div
          v-card(horizontal)
            v-card-stack
              v-card-text
                p(v-text="card_text")
              v-card-actions
                v-btn(flat, class="secondary--text") Get Started
            v-card-title(
              img="http://photo.facegfx.com/static/vector/2015/12/28/facegfx-vector-cartoon-sea-and-mountain-views-vector-graphics.jpg"
            )
      component-header Colored
      component-example
        div.event
          v-card(
            class="blue darken-4 white--text"
          )
            v-card-title(height="200px")
              h5.white--text
                | Featured Event: <br>
                | May 24, 2016 <br>
                | 7-11pm
            v-card-actions
              v-btn(flat, class="white--text") Add to Calendar
              v-col-spacer
              v-icon event
      component-options(v-bind:items="options")
</template>

<script>
  export default {
    data () {
      return {
        text: `
          The <code>v-card</code> component is a versatile component that can be used for anything from a panel to a static image. The <strong>card</strong> component has numerous helper components to make markup as easy as possible. Components that have no listed options use <strong class="green--text">Vue's</strong> functional component option for faster rendering and serve as markup sugar to make building easier.
        `,
        title_text: `
          <p>Card Title</p>
        `,
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
        options: [
          [
            '<code>&lt;v-card v-bind:height="500px"&gt;</code>',
            '<code>height</code>',
            'Manually define the height of the Card',
            'Type: String'
          ],
          [
            '<code>&lt;v-card horizontal&gt;</code>',
            '<code>horizontal</code>',
            'Applies the card--horizontal class',
            'Default: false'
          ],
          [
            '<code>&lt;v-card img="img.png"&gt;</code>',
            '<code>img</code>',
            'Specifies an image background',
            'Type: String'
          ],
          [
            '<code>&lt;v-card-title height="50px"&gt;</code>',
            '<code>height</code>',
            'Manually define the height of the Card Title',
            'Type: String'
          ],
          [
            '<code>&lt;v-card-title img="img.png"&gt;</code>',
            '<code>img</code>',
            'Specifies an image background',
            'Type: String'
          ],
          [
            '<code>&lt;v-card-menu&gt;</code>',
            '',
            'Helper component with the card__menu class',
            'Functional Component'
          ],
          [
            '<code>&lt;v-card-stack&gt;</code>',
            '',
            'Helper component with the card__stack class',
            'Functional Component'
          ],
          [
            '<code>&lt;v-card-actions&gt;</code>',
            '',
            'Helper component with the card__actions class',
            'Functional Component'
          ],
          [
            '<code>&lt;v-card-text&gt;</code>',
            '',
            'Helper component with the card__text class',
            'Functional Component'
          ],
          [
            '<code>&lt;v-card-title-actions&gt;</code>',
            '',
            'Helper component with the card__title-actions class',
            'Functional Component'
          ],
          [
            '<code>&lt;v-card-title-text&gt;</code>',
            '',
            'Helper component with the card__title-text class',
            'Functional Component'
          ]
        ]
      }
    },

    mounted () {
      this.$emit('view', 'Cards')
    }
  }
</script>

<style lang="stylus">
  .card
    margin: 1rem
    
  .portrait    
    flex-basis: 300px !important
    
    .card__actions
      background: rgba(0, 0, 0, .2)
      
  .event
    flex-basis: 300px !important
    
    .card__actions
      border-color: rgba(255, 255, 255, .3)
      
  .card__title-actions
    margin-left: auto
</style>