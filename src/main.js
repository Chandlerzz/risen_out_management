import Vue from 'vue'
import App from './App.vue'
import  {Dialog, Button,CellGroup,Cell,Field } from 'vant'
import {ActionSheet,Col,Row, Icon, Tab, Tabs} from 'vant'
import {Calendar, Radio,RadioGroup,Picker,Popup} from "vant";
import { Checkbox, CheckboxGroup } from 'vant';
import { Uploader } from 'vant';
import { Collapse, CollapseItem } from 'vant';
import router from './router'
import './assets/styles/index.scss'

import 'vant/lib/index.css';

Vue.config.productionTip = false
Vue.use(Dialog)
Vue.use(Button)
Vue.use(CellGroup)
Vue.use(Cell)
Vue.use(Field)
Vue.use(ActionSheet)
Vue.use(Row)
Vue.use(Col) 
Vue.use(Icon)
Vue.use(Tabs)
Vue.use(Tab)
Vue.use(Calendar)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Picker)
Vue.use(Popup)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Uploader)
Vue.use(Collapse)
Vue.use(CollapseItem)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
