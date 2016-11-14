<template lang="pug">
  doc-view(v-bind:doc="doc")
    v-parallax(
      src="http://www.storywarren.com/wp-content/uploads/2016/09/space-1.jpg"
      v-bind:height="300"
    )
    v-parallax(
      src="http://marshall.org/wp-content/themes/marshall/img/featured-space-policy.jpg"
    )
      v-parallax-content
        h1.white--text Explore Space
        p Duo te error albucius. Nam dicunt timeam probatus at, vix ei harum soleat instructior. Mei partiendo adipiscing scripserit eu, cu minimum placerat instructior est, ius ne latine pertinax salutatus. 
        div
          v-btn(large primary)
            | Buy a Ship
            v-icon(right) keyboard_arrow_right
          v-btn(large secondary)
            | Explore
            v-icon(right) search
    markup(slot="markup")
      |&lt;v-parallax src="..."&gt;
      |   &lt;v-parallax-content&gt;
      |     ...
      |   &lt;/v-parallax-content&gt;
      |&lt;/v-parallax&gt;
</template>

<script>
  export default {
    name: 'parallax-view',

    data () {
      return {
        doc: {
          title: 'Parallax',
          desc: 'Coming Soon',
          types: [
            'comp', 'slot'
          ],
          params: [
            [
              '<code>&lt;v-parallax&gt;</code>',
              '',
              'Base component'
            ],
            [
              '<code>src</code>',
              'The image to parallax',
              'Required: true'
            ],
            [
              '<code>height</code>',
              'The height of the parallax container',
              'Default: 500'
            ],
            [
              '<code>&lt;v-parallax-content&gt;</code>',
              '',
              'Functional component'
            ],
            [
              '<code>opacity-offset</code>',
              'Sets offset fade for content. Set 0 for none',
              'Default: .7'
            ]
          ]
        }
      }
    },

    mounted () {
      this.$emit('view', 'Parallax')
    }
  }
</script>

<style lang="stylus" scoped>
  .parallax
    margin: 1rem 0
    
  .parallax__content    
    h1
      font-weight: 300
      white-space: nowrap
      
    p
      font-weight: 100
    h1
      margin: 2rem 0
      
    p
      font-size: 1.2rem      
      
    .btn
      border-radius: 0
      margin: 4rem 2rem 0 0
</style>