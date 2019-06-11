import Vue from 'vue'
import Router from 'vue-router'

import Default from '@/components/Default'

Vue.use(Router)

const routes = [
  {path: '/', name: 'Default', component: Default}
]

export default new Router({
  routes
})
