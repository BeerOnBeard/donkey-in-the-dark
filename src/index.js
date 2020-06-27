import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routing/routes.js';

Vue.use(VueRouter);

const router = new VueRouter({ routes });

new Vue({
  el: '#root',
  router: router,
  render: h => h(App)
});
