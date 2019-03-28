import Vue from 'vue';
import App from './app/App.vue';

import './index.css';
import VueRouter from 'vue-router';
import store from './app/store.es6';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: App
      }
    }
  ]
});

export default new Vue({
  el: '#root',
  store,
  router,
  render: h => h('router-view')
});
