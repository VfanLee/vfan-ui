import Demo from './demo'
import Button from './button'
import Input from './input'
import Modal from './modal'
import Select from './select'
import Switch from './switch'
import Tree from './tree'

const components = {
  Demo,
  Button,
  Input,
  Modal,
  Select,
  Switch,
  Tree
}

const install = function (Vue) {
  if (install.install) return

  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

const API = {
  install
}

export default API
