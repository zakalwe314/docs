import Vue from 'vue'
import Router from 'vue-router'

import AboutView from '../views/AboutView.vue'
import QuickStartView from '../views/QuickStartView.vue'
import OverviewView from '../views/OverviewView.vue'
import AlertsView from '../views/AlertsView.vue'
import BadgesView from '../views/BadgesView.vue'
import BreadcrumbsView from '../views/BreadcrumbsView.vue'
import ButtonsView from '../views/ButtonsView.vue'
import CardsView from '../views/CardsView.vue'
import ChipsView from '../views/ChipsView.vue'
import CollapsibleView from '../views/CollapsibleView.vue'
import ColorsView from '../views/ColorsView.vue'
import DropdownsView from '../views/DropdownsView.vue'
import GridView from '../views/GridView.vue'
import FaqView from '../views/FaqView.vue'
import FormsView from '../views/FormsView.vue'
import ListsView from '../views/ListsView.vue'
import ModalsView from '../views/ModalsView.vue'
import NavbarView from '../views/NavbarView.vue'
import ParallaxView from '../views/ParallaxView.vue'
import PaginationView from '../views/PaginationView.vue'
import ProgressView from '../views/ProgressView.vue'
import SliderView from '../views/SliderView.vue'
import SidebarView from '../views/SidebarView.vue'
import TabsView from '../views/TabsView.vue'
import ToastsView from '../views/ToastsView.vue'
import TooltipsView from '../views/TooltipsView.vue'
import TypographyView from '../views/TypographyView.vue'
import LayoutsView from '../views/LayoutsView.vue'
import BusView from '../views/BusView.vue'

Vue.use(Router)

export default new Router({
  base: __dirname,
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: AboutView },
    { path: '/quick-start', component: QuickStartView },
    { path: '/overview', component: OverviewView },
    { path: '/components/alerts', component: AlertsView },
    { path: '/components/breadcrumbs', component: BreadcrumbsView },
    { path: '/components/buttons', component: ButtonsView },
    { path: '/components/cards', component: CardsView },
    { path: '/components/chips', component: ChipsView },
    { path: '/components/collapsible', component: CollapsibleView },
    { path: '/components/dropdowns', component: DropdownsView },
    { path: '/components/forms', component: FormsView },
    { path: '/components/lists', component: ListsView },
    { path: '/components/modals', component: ModalsView },
    { path: '/components/navbar', component: NavbarView },
    { path: '/components/pagination', component: PaginationView },
    { path: '/components/parallax', component: ParallaxView },
    { path: '/components/progress', component: ProgressView },
    { path: '/components/sidebar', component: SidebarView },
    { path: '/components/slider', component: SliderView },
    { path: '/components/tabs', component: TabsView },
    { path: '/functions/toasts', component: ToastsView },
    { path: '/directives/badges', component: BadgesView },
    { path: '/directives/tooltips', component: TooltipsView },
    { path: '/css/typography', component: TypographyView },
    { path: '/css/grid', component: GridView },
    { path: '/css/colors', component: ColorsView },
    { path: '/layouts', component: LayoutsView },
    { path: '/bus', component: BusView },
    { path: '*', redirect: '/' }
  ]
})