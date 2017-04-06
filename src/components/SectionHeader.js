export default {
  functional: true,

  render (h, context) {
    let styles = {}

    if (context.data.attrs && context.data.attrs.first) {
      styles['margin-top'] = 0
    }

    const data = {
      'class': 'section-header secondary--text primary--after display-2',
      style: styles
    }

    return h('h2', data, context.children)
  }
}
