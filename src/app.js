import Vue from 'vue'
import AppLayout from './theme/Layout.vue'
import store from './vuex/index.js'
import router from './router'

Vue.component('app', {
  template: `
  `
})

const app = new Vue({
  router, store,
  ...AppLayout
})

export { app, router, store }
