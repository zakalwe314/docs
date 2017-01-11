import Vue from 'vue'
import Router from 'vue-router'

function route (path, view) {
  return {
    path: path,
    component: require(`../views/${view}View.vue`)
  }
}

Vue.use(Router)

const router = new Router({
  base: __dirname,
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    route('/', 'About'),
    route('/quick-start', 'QuickStart'),
    route('/server-side-rendering', 'SSR'),
    route('/components/alerts', 'Alerts'),
    route('/components/breadcrumbs', 'Breadcrumbs'),
    route('/components/buttons', 'Buttons'),
    route('/components/cards', 'Cards'),
    route('/components/chips', 'Chips'),
    route('/components/collapsible', 'Collapsible'),
    route('/components/dropdowns', 'Dropdowns'),
    route('/components/footer', 'Footer'),
    route('/components/forms', 'Forms'),
    route('/components/lists', 'Lists'),
    route('/components/icons', 'Icon'),
    route('/components/modals', 'Modals'),
    route('/components/navbar', 'Navbar'),
    route('/components/pagination', 'Pagination'),
    route('/components/parallax', 'Parallax'),
    route('/components/progress-circular', 'ProgressCircular'),
    route('/components/sidebar', 'Sidebar'),
    route('/components/slider', 'Slider'),
    route('/components/tabs', 'Tabs'),
    route('/functions/toasts', 'Toasts'),
    route('/directives/badges', 'Badges'),
    route('/directives/ripples', 'Ripples'),
    route('/directives/tooltips', 'Tooltips'),
    route('/css/typography', 'Typography'),
    route('/css/content', 'Content'),
    route('/css/grid', 'Grid'),
    route('/css/colors', 'Colors'),
    route('/css/tables', 'Table'),
    route('/helpers/spacing', 'Spacing'),
    route('/helpers/alignment', 'Alignment'),
    route('/helpers/display', 'Display'),
    route('/layouts', 'Layouts'),
    route('/event-bus', 'EventBus'),
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

export default router