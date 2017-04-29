import Vue from 'vue'
import Router from 'vue-router'

function route (path, view, meta) {
  return {
    path: path,
    meta: { name: view },
    component: resolve => import(`../views/${view}View.vue`).then(resolve)
  }
}

Vue.use(Router)

export function createRouter () {
    const router = new Router({
      base: __dirname,
      mode: 'history',
      scrollBehavior: () => {
        document.querySelector('.content').scrollTop = 0
      },
      routes: [
        route('/', 'About'),
        route('/quick-start', 'QuickStart'),
        route('/server-side-rendering', 'SSR'),
        route('/motion', 'Motion'),
        route('/components/alerts', 'Alerts'),
        route('/components/breadcrumbs', 'Breadcrumbs'),
        route('/components/bottom-navigation', 'BottomNavigation'),
        route('/components/buttons', 'Buttons'),
        route('/components/cards', 'Cards'),
        route('/components/carousel', 'Carousel'),
        route('/components/chips', 'Chips'),
        route('/components/datatables', 'Datatables'),
        route('/components/dialogs', 'Dialogs'),
        route('/components/dividers', 'Divider'),
        route('/components/expansion-panel', 'ExpansionPanel'),
        route('/components/footer', 'Footer'),
        route('/components/text-fields', 'TextFields'),
        route('/components/lists', 'Lists'),
        route('/components/icons', 'Icon'),
        route('/components/menus', 'Menus'),
        route('/components/toolbar', 'Toolbar'),
        route('/components/pagination', 'Pagination'),
        route('/components/parallax', 'Parallax'),
        route('/components/pickers', 'Pickers'),
        route('/components/progress', 'Progress'),
        route('/components/select', 'Select'),
        route('/components/selection-controls', 'SelectionControls'),
        route('/components/selects', 'Select'),
        route('/components/sidebar', 'Sidebar'),
        route('/components/sliders', 'Slider'),
        route('/components/snackbars', 'Snackbar'),
        route('/components/subheaders', 'Subheader'),
        route('/components/steppers', 'Steppers'),
        route('/components/tabs', 'Tabs'),
        route('/directives/badges', 'Badges'),
        route('/directives/ripples', 'Ripples'),
        route('/directives/tooltips', 'Tooltips'),
        route('/style/typography', 'Typography'),
        route('/style/content', 'Content'),
        route('/style/colors', 'Colors'),
        route('/style/theme', 'Theme'),
        route('/layout/grid', 'Grid'),
        route('/layout/pre-defined', 'Layouts'),
        route('/layout/spacing', 'Spacing'),
        route('/layout/alignment', 'Alignment'),
        route('/layout/display', 'Display'),
        route('/layout/elevation', 'Elevation'),
        // 301 redirects
        { path: '/overview', redirect: '/server-side-rendering' },
        { path: '/event-bus', redirect: '/' },
        { path: '/components/dropdowns', redirect: '/components/menus' },
        { path: '/components/collapsible', redirect: '/components/expansion-panel' },
        { path: '/components/navbars', redirect: '/components/toolbars' },
        { path: '/components/forms', redirect: '/components/text-fields' },
        { path: '/functions/toasts', redirect: '/components/snackbars' },
        // Global redirect for 404
        { path: '*', redirect: '/' }
      ]
    })

    router.beforeEach((to, from, next) => {
        if (typeof ga !== 'undefined') {
            ga('set', 'page', to.path)
            ga('send', 'pageview')
        }
        next()
    })

    return router
}
