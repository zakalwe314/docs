import Vue from 'vue'
import Router from 'vue-router'

import AlertsView from '../views/AlertsView.vue'
import BadgesView from '../views/BadgesView.vue'
import BreadcrumbsView from '../views/BreadcrumbsView.vue'
import ButtonsView from '../views/ButtonsView.vue'
import CardsView from '../views/CardsView.vue'
import ChipsView from '../views/ChipsView.vue'
import CollapsibleView from '../views/CollapsibleView.vue'
import DropdownsView from '../views/DropdownsView.vue'
import FormsView from '../views/FormsView.vue'
import HomeView from '../views/HomeView.vue'
import LayoutsView from '../views/LayoutsView.vue'
import ListsView from '../views/ListsView.vue'
import ParallaxView from '../views/ParallaxView.vue'
import PaginationView from '../views/PaginationView.vue'
import ProgressView from '../views/ProgressView.vue'
import ModalsView from '../views/ModalsView.vue'
import SliderView from '../views/SliderView.vue'
import TabsView from '../views/TabsView.vue'
import ToastsView from '../views/ToastsView.vue'
import TooltipsView from '../views/TooltipsView.vue'
import TypographyView from '../views/TypographyView.vue'

Vue.use(Router)

export default new Router({
  base: __dirname,
  mode: 'history',
  routes: [
    { path: '/', component: HomeView },
    { path: '/alerts', component: AlertsView },
    { path: '/badges', component: BadgesView },
    { path: '/breadcrumbs', component: BreadcrumbsView },
    { path: '/buttons', component: ButtonsView },
    { path: '/cards', component: CardsView },
    { path: '/chips', component: ChipsView },
    { path: '/collapsible', component: CollapsibleView },
    { path: '/dropdowns', component: DropdownsView },
    { path: '/forms', component: FormsView },
    { path: '/layouts', component: LayoutsView },
    { path: '/lists', component: ListsView },
    { path: '/pagination', component: PaginationView },
    { path: '/parallax', component: ParallaxView },
    { path: '/progress', component: ProgressView },
    { path: '/modals', component: ModalsView },
    { path: '/slider', component: SliderView },
    { path: '/tabs', component: TabsView },
    { path: '/toasts', component: ToastsView },
    { path: '/tooltips', component: TooltipsView },
    { path: '/typography', component: TypographyView },
    { path: '*', redirect: '/'}
  ]
})