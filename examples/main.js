import Vue from 'vue'
import App from './App.vue'

import '../packages/css/index.scss'
import VfanUI from '../packages/lib/index.js'

Vue.config.productionTip = false

Vue.use(VfanUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
