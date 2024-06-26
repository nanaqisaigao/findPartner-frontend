import {createApp} from 'vue'
import 'vant/lib/index.css';
import App from './App.vue'
import {createMemoryHistory, createRouter} from "vue-router";
import routes from "./config/route.ts";

const app = createApp(App)
//路由

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
app.use(router);
//挂载，把一个组件挂到DOM上
app.mount('#app')