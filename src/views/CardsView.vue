<template lang="pug">
  doc-view(v-bind:doc="doc" id="cards")
    component-example(header="Basic")
      div
        v-card
          v-card-text
            p(v-text="card_text")
      div
        v-card(class="green darken-1 white--text")
          v-card-text
            p(v-text="card_text")

    component-example(header="Title")
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

    component-example(header="Picture")
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

    component-example(header="Background")
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

    component-example(header="Horizontal")
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
          
    component-example(header="Colored")
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

    markup(slot="markup")
      |&lt;v-card class="green"&gt;
      |   ...
      |&lt;/v-card&gt;
      |&nbsp;
      |&lt;v-card horizontal&gt;
      |   &lt;v-card-title img="..."&gt;&lt;/&gt;
      |   &lt;v-card-stack&gt;
      |       &lt;v-card-text&gt;
      |           &lt;p&gt;...&lt;/p&gt;
      |       &lt;/v-card-text&gt;
      |       &lt;v-card-actions&gt;
      |           &lt;v-btn flat class="secondary--text"&gt;...&lt;/v-btn&gt;
      |       &lt;/v-card-actions&gt;
      |   &lt;/v-card-stack&gt;
      |&lt;/v-card&gt;
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Card',
          desc: `
            <p>
              The <code>v-card</code> component is a versatile component that can be used for anything from a panel to a static image. The <strong>card</strong> component has numerous helper components to make markup as easy as possible. Components that have no listed options use <strong class="green--text">Vue's</strong> functional component option for faster rendering and serve as markup sugar to make building easier.
            </p>
          `,
          types: [
            'comp', 'slot'
          ],
          params: [
            [
              '<code>&lt;v-card&gt;</code>',
              '',
              'Base Component'
            ],
            [
              '<code>height</code>',
              'Manually define the height of the Card',
              'Type: String'
            ],
            [
              '<code>horizontal</code>',
              'Applies the card--horizontal class',
              'Default: false'
            ],
            [
              '<code>img</code>',
              'Specifies an image background',
              'Type: String'
            ],
            [
              '<code>height</code>',
              'Manually define the height of the Card Title',
              'Type: String'
            ],
            [
              '<code>img</code>',
              'Specifies an image background',
              'Type: String'
            ],
            [
              '<code>&lt;v-card-menu&gt;</code>',
              '',
              'Functional Component'
            ],
            [
              '<code>&lt;v-card-stack&gt;</code>',
              '',
              'Functional Component'
            ],
            [
              '<code>&lt;v-card-actions&gt;</code>',
              '',
              'Functional Component'
            ],
            [
              '<code>&lt;v-card-text&gt;</code>',
              '',
              'Functional Component'
            ],
            [
              '<code>&lt;v-card-title-actions&gt;</code>',
              '',
              'Functional Component'
            ],
            [
              '<code>&lt;v-card-title-text&gt;</code>',
              '',
              'Functional Component'
            ]
          ]
        },
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
        title_text: `
          <p>Card Title</p>
        `
      }
    },

    mounted () {
      this.$emit('view', 'Cards')
    }
  }
</script>

<style lang="stylus">
  #cards
    .portrait
      margin: 1rem 0
      
      .card
        flex-basis: 300px
      
      .card__actions
        background: rgba(0, 0, 0, .2)
        
    .event
      .card
        flex-basis: 300px
      
      .card__actions
        border-color: rgba(255, 255, 255, .3)
        
    .card__title-actions
      margin-left: auto
      
    .component-example
      flex-flow: row wrap
      justify-content: space-between
      
      > div
        flex: 1 0 50%
        display: flex
        justify-content: space-between
        padding: 1rem
        
        @media screen and (max-width: 768px)
          flex: 1 0 100%
        
        > *
          margin: 0 auto
</style>