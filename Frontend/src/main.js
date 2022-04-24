import Vue from 'vue'
import vuetify from './plugins/vuetify';
import App from '../src/App.vue'
import router from "./router/router"

import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(vuetify, {
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
})