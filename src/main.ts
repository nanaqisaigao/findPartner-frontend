import {createApp} from 'vue'
import 'vant/lib/index.css';
import App from './App.vue'
import * as VueRouter from 'vue-router';
import Vant from 'vant';
import routes from "./config/route.ts";
import 'vant/es/toast/style';

const app = createApp(App)
app.use(Vant);

//路由
const router = VueRouter.createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHistory(),
    routes, // `routes: routes` 的缩写
})

app.use(router);
//挂载，把一个组件挂到DOM上
app.mount('#app')