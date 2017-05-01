export default function(name, meta = {}) {
  return {
    mounted () {
      this.$emit('view', name)
    },

    preFetch () {
      return {
        title: name,
        meta: meta
      }
    }
  }
}