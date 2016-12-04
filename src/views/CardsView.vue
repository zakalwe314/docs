<template lang="pug">
  doc-view(v-bind:doc="doc" id="cards")
    component-example(header="Basic")
      div
        v-card
          v-card-text
            div(v-text="card_text")
      div
        v-card(class="blue darken-1 white--text")
          v-card-text
            div(v-text="card_text")

    component-example(header="Title")
      div
        v-card
          v-card-row(class="red darken-1")
            v-card-title(class="white--text") Delta SkyMiles
          v-card-row(height="100px")
            v-icon(class="mr-5") card_membership
            div
              div Frequent Flyer Number
              strong 113241423
          v-card-row(actions)
            v-btn(flat class="red--text darken-1") View Email
      div
        v-card
          v-card-row(class="green darken-1")
            v-card-title(class="white--text") Marriot Rewards
            v-spacer
            div
              v-btn(icon class="white--text" v-dropdown:marriot="")
                v-icon more_vert
              v-dropdown(id="marriot" right)
                v-dropdown-item(v-bind:item="{ href: '#!', text: 'Never show rewards' }")
                v-dropdown-item(v-bind:item="{ href: '#!', text: 'Remove Card' }")
                v-dropdown-item(v-bind:item="{ href: '#!', text: 'Send Feedback' }")
          v-card-row(height="100px")
            v-icon(class="mr-5") card_membership
            div
              div Membership Number
              strong 113241423
          v-card-row(actions)
            v-btn(flat class="green--text darken-1") View Email

    component-example(header="Picture")
      div
        v-card
          v-card-row(
            img="http://www.titanui.com/wp-content/uploads/2013/04/03/Vector-Cartoon-Nature-Background-03.jpg",
            height="300px"
          )
          v-card-text
            div(v-text="card_text")
          v-card-row(actions)
            v-btn(flat, class="primary--text") View Updates
      div
        v-card
          v-card-row(class="blue-grey darken-1 white--text")
            v-card-title Visit Space
            v-spacer
            v-btn(icon class="white--text" v-dropdown:space="")
              v-icon more_vert
            v-dropdown(id="space" right)
              v-dropdown-item(v-bind:item="{ href: '#!', text: 'Remove Card' }")
              v-dropdown-item(v-bind:item="{ href: '#!', text: 'Send Feedback' }")
          v-card-row(
            img="https://s-media-cache-ak0.pinimg.com/564x/e6/f5/27/e6f5279ad0965b9ccdadc3934429d122.jpg",
            height="300px"
          )
          v-card-text(class="blue-grey darken-3 white--text")
            div(v-text="card_text")
          v-card-row(actions class="blue-grey darken-1")
            v-btn(flat class="white--text") Get Started
            v-spacer
            v-icon(class="white--text") explore

    component-example(header="Background")
      div.portrait
        v-card(
          img="https://cdn.fstoppers.com/styles/full/s3/lead/2014/11/fstoppers-natural-light-dani-how-to-retouch-dof-bokeh-sharp-facebook-female-fashion-nyc-model-portrait1.jpg"
          height="300px"
        )
          v-card-row(actions class="white--text pl-3 pt-3 pb-3") Picture.png
      div.portrait
        v-card(
          img="http://images6.fanpop.com/image/photos/38500000/beautiful-wallpaper-1-beautiful-pictures-38538866-500-313.jpg"
          height="300px"
        )
          v-card-row(actions class="white--text pl-3 pt-3 pb-3") Picture.png

    component-example(header="Horizontal")
      div
        v-card(horizontal)
          v-card-row(
            img="http://www.bendut.com/i/2015/12/hotel-room-design-pictures-solid-wood-couch-light-brown-fabric-cushioning-dark-brown-blankets-artistic-wall-painting-twin-wall-lamp-rectangle-oak-wood-coffee-table-black-glass-table-top-brown-motive-c-936x702.jpg"
            height="125px"
          )
          v-card-column
            v-card-row(height="75px" class="brown white--text")
              v-card-text
                strong Reservation at Lazy Bear
                div Feb 23, 7:00pm
            v-card-row(actions class="brown darken-2")
              v-btn(flat class="white--text")
                v-icon(left) directions
                |Directions
      div
        v-card(horizontal)
          v-card-column(class="amber white--text")
            v-card-row
              v-spacer
              v-card-text(class="text-xs-right")
                strong Car Rental with Hertz
                div Mar 5, 8:00pm
          v-card-row(
            img="http://www.frugaa.com/images/about/hertz-store.jpg"
            height="125px"
          )

    component-example(header="Colored")
      div
        v-card(class="blue darken-4 white--text")
          v-card-row(height="200px")
            h5.white--text
              | Featured Event: <br>
              | May 24, 2016 <br>
              | 7-11pm
          v-card-row(actions)
            v-btn(flat, class="white--text") Add to Calendar
            v-spacer
            v-icon event

    markup(slot="markup")
      |&lt;v-card class="green"&gt;
      |   &lt;v-card-text&gt;
      |     ...
      |   &lt;/v-card-text&gt;
      |&lt;/v-card&gt;
      |&nbsp;
      |&lt;v-card&gt;
      |   &lt;v-card-row img="..." height="300px"&gt;
      |     &lt;v-card-title&gt;...&lt;/v-card-title&gt;
      |   &lt;/v-card-row&gt;
      |   &lt;v-card-text&gt;
      |      &lt;p&gt;...&lt;/p&gt;
      |   &lt;/v-card-text&gt;
      |   &lt;v-card-row(actions)&gt;
      |      &lt;v-btn flat class="secondary--text"&gt;...&lt;/v-btn&gt;
      |   &lt;/v-card-row&gt;
      |&lt;/v-card&gt;
      |&nbsp;
      |&lt;v-card horizontal&gt;
      |   &lt;v-card-row img="..."&gt;&lt;/v-card-title&gt;
      |   &lt;v-card-column&gt;
      |       &lt;v-card-text&gt;
      |           &lt;p&gt;...&lt;/p&gt;
      |       &lt;/v-card-text&gt;
      |       &lt;v-card-row(actions)&gt;
      |           &lt;v-btn flat class="secondary--text"&gt;...&lt;/v-btn&gt;
      |       &lt;/v-card-row&gt;
      |   &lt;/v-card-column&gt;
      |&lt;/v-card&gt;
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          stage: 'iter',
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
      .card__row--actions
        background: rgba(0,0,0,.5)
        
    .card
      flex-basis: 500px

    .component-example
      flex-flow: row wrap
      justify-content: space-between
      margin: 0 -2rem

      > div
        flex: 1 0 50%
        display: flex
        justify-content: space-between
        padding: 1rem

        @media screen and (max-width: 768px)
          flex: 1 0 100%

        > *
          margin: 0 auto
          width: 70%
</style>
