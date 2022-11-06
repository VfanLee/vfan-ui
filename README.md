# vfan-ui

# 快速开始
## 安装组件库
```
npm i vfan-ui
```
## 引入组件库
```js
import '../packages/css/index.scss'

// 全部引入
import VfanUI from '../packages/lib/index.js'
Vue.use(VfanUI)

// 按需引入
import { Demo, Button } from '../packages/lib/index.js'
Vue.use(Demo)
Vue.use(Button)
```
