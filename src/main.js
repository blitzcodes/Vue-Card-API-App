import Vue from 'vue';
import App from './components/App.vue';
import store from './store/store';
import './registerServiceWorker';

/**
 * Include required Vueify components and styling, and bind it to Vue.
 */
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
// Include locales.
import en from './locale/en';
import frCA from './locale/fr-ca';
// Bind with locale options.
Vue.use(Vuetify, {
  iconfont: 'mdi',
  lang: {
    locales: { en, frCA },
    current: 'en',
  },
});
// =------------------------------

Vue.config.productionTip = false;

/**
 * Initialize store and mount the root app.
 */
new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
