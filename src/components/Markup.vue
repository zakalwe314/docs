<template lang="pug">
  div(class="markup")
    pre
      code(v-bind:class="lang" ref="code")
        slot
</template>

<script>
  import hljs from 'highlight.js/lib/highlight.js'

	export default {
    props: {
      lang: String
    },

		mounted () {
			hljs.highlightBlock(this.$refs.code)
		}
	}
</script>