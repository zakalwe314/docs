<template lang="pug">
  div(class="markup")
    pre
      code(v-bind:class="code" ref="code")
        slot
</template>

<script>
  import hljs from 'highlight.js/lib/highlight.js'

	export default {
    props: {
      code: String
    },

		mounted () {
			this.highlight()
		},

		methods: {
			highlight () {
				hljs.highlightBlock(this.$refs.code)
			}
		}
	}
</script>