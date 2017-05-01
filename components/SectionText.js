export default {
  functional: true,

  render (h, context) {
    return h('div', { 'class': 'section-text' }, [context.children])
  }
}
