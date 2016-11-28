<template lang="pug">
  doc-view(v-bind:doc="doc")
    v-parallax(
      src="https://s-media-cache-ak0.pinimg.com/originals/e1/00/ef/e100ef3699fa021506561d41e392a148.jpg"
    )
    markup(slot="markup")
      |&lt;v-parallax src="..."&gt;&lt;/v-parallax&gt;
</template>

<script>
  export default {
    name: 'parallax-view',

    data () {
      return {
        doc: {
          stage: 'comp',
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
    margin: 15rem 0
    
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