import Vue from 'vue'
import App from './App.vue'
import vuetify from '../src/plugins/vuetify'
import { store } from './store/store'
import router from './router/index'

Vue.config.productionTip = false
Vue.use(require('vue-faker'));

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
