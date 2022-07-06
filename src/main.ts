import { createApp } from 'vue'
import App from './App.vue'
import vant, { Toast } from "vant"
import router from './router'
import {store,key} from './store'
import "@/assets/styles/index.scss"
// import store from "./store/index"

createApp(App).mount('#app')


const app = createApp(App)

app.config.globalProperties.$toast = (msg: string) => {
    return Toast(msg)
}
app.config.globalProperties.$msg = (msg: string) => {
    return ElMessage(msg)
}
app
  .use(store,key)
  .use(router)
  .use(vant)
  .mount("#app")
