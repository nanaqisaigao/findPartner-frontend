//路由
import Team from "../pages/TeamPage.vue";
import Index from "../pages/Index.vue";
import User from "../pages/UserPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";


const routes = [
    { path: '/', component: Index },
    { path: '/team', component: Team },
    { path: '/user', component: User },
    { path: '/search', component: SearchPage },
    { path: '/user/edit', component: UserEditPage },
]

export default routes;