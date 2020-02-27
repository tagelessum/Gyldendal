import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import SearchTitle from './components/SearchTitle.vue'

import  BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
const routes = [
  { path: '/', component: SearchTitle }
];

Vue.config.productionTip = false
const router = new VueRouter({ routes });
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
