<template lang="pug">
  section
    v-row
      v-col(xs12)
        section-header Basic
      v-col(xs12, lg4, md4)
        v-card
          v-card-text
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
      v-col(xs12, lg4, md4)
        v-card(class="green darken-1 white--text")
          v-card-text
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
      v-col(xs12, lg4, md4)
        v-card(class="blue darken-1 white--text")
          v-card-text
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
    v-row
      v-col(xs12)
        section-header With Title
      v-col(xs12, lg4, md4)
        v-card
          v-card-title(class="red lighten-1")
            v-card-title-text(class="white--text")
              v-icon all_out
              | Update
          v-card-text
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
          v-card-actions
            v-btn(flat) Cancel
            v-col-spacer
            v-btn(class="green white--text") Submit
      v-col(xs12, lg4, md4)
        v-card
          v-card-title(class="green lighten-1")
            v-card-title-text(class="white--text") Title
            v-card-title-actions
              v-btn(small, class="btn--title blue lighten-2 white--text")
                span Upload
                v-icon(right) backup
          v-card-text
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
      v-col(xs12, lg4, md4)
        v-card
          v-card-title(class="grey darken-1")
            v-card-title-text(class="white--text") Title
            v-card-title-actions
              v-btn(icon)
                v-icon(class="white--text") add
              v-btn(icon)
                v-icon(class="white--text") edit
              v-btn(icon)
                v-icon(class="white--text") delete
          v-card-text
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
    v-row
      v-col(xs12)
        section-header With Picture
      v-col(xs12, lg4, md4)
        v-card
          v-card-title(
            img="http://www.titanui.com/wp-content/uploads/2013/04/03/Vector-Cartoon-Nature-Background-03.jpg",
            height="300px"
          )
            v-card-title-text(class="white--text") Update
          v-card-text
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
          v-card-actions
            v-btn(flat, class="primary--text") View Updates
      v-col(xs12, md4, lg4)
        v-card
          v-card-title(
            img="https://s-media-cache-ak0.pinimg.com/564x/e6/f5/27/e6f5279ad0965b9ccdadc3934429d122.jpg",
            height="300px"
          )
            v-card-title-text(class="white--text") Welcome
          v-card-text
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
          v-card-actions
            v-btn(flat, class="primary--text") Get Started
      v-col(xs12, lg4, md4)
        v-card(
          img="https://cdn.fstoppers.com/styles/full/s3/lead/2014/11/fstoppers-natural-light-dani-how-to-retouch-dof-bokeh-sharp-facebook-female-fashion-nyc-model-portrait1.jpg",
          height="300px",
          id="portrait"
        )
          v-card-actions(class="white--text") Picture.png
    v-row
      v-col(xs12)
        section-header Horizontal
      v-col(xs12, lg6, md6)
        v-card(horizontal)
          v-card-title(
            img="http://www.titanui.com/wp-content/uploads/2013/04/03/Vector-Cartoon-Nature-Background-03.jpg"
          )
          v-card-stack
            v-card-text
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
            v-card-actions
              v-btn(flat, class="primary--text") Get Started
      v-col(xs12, lg6, md6)
        v-card(horizontal)
          v-card-stack
            v-card-text
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
            v-card-actions
              v-btn(flat, class="secondary--text") Get Started
          v-card-title(
            img="http://photo.facegfx.com/static/vector/2015/12/28/facegfx-vector-cartoon-sea-and-mountain-views-vector-graphics.jpg"
          )
    v-row
      v-col(xs12, lg4, md4)
        section-header Colored
        v-card(
          class="blue darken-4 white--text",
          id="event"
        )
          v-card-title(height="200px")
            h5
              | Featured Event: <br>
              | May 24, 2016 <br>
              | 7-11pm
          v-card-actions
            v-btn(flat, class="white--text") Add to Calendar
            v-col-spacer
            v-icon event
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', 'Cards')
    }
  }
</script>

<style lang="stylus">
  #portrait
    .card__actions
      background: rgba(0, 0, 0, .2)
      
  #event
    .card__actions
      border-color: rgba(255, 255, 255, .3)
      
  .card__title-actions
    margin-left: auto
</style>