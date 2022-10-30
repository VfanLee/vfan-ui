import Vue from 'vue'

import './style/index.scss'
import VfButton from './components/Button'
import VfModal from './components/Modal'
import VfInput from './components/Input'
import VfSelect from './components/Select'
import VfTree from './components/Tree'

import App from './App.vue'

Vue.config.productionTip = false

Vue.component(VfButton.name, VfButton)
Vue.component(VfModal.name, VfModal)
Vue.component(VfInput.name, VfInput)
Vue.component(VfSelect.name, VfSelect)
Vue.component(VfTree.name, VfTree)

new Vue({
  render: h => h(App)
}).$mount('#app')
