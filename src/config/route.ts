//路由
import Team from "../pages/TeamPage.vue";
import Index from "../pages/Index.vue";
import SearchPage from "../pages/SearchPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import UserLoginPage from "../pages/UserLoginPage.vue";
import TeamAddPage from "../pages/TeamAddPage.vue";
import TeamUpdatePage from "../pages/TeamUpdatePage.vue";
import UserUpdatePage from "../pages/UserUpdatePage.vue";
import UserPage from "../pages/UserPage.vue";
import UserTeamJoinPage from "../pages/UserTeamJoinPage.vue";
import UserTeamCreatePage from "../pages/UserTeamCreatePage.vue";
import UserMatchPage from "../pages/UserMatchPage.vue";
import UserMatchReversePage from "../pages/UserMatchReversePage.vue";


const routes = [
    { path: '/', component: Index },
    { path: '/team', component: Team },
    { path: '/team/add', title:'创建队伍',component: TeamAddPage },
    { path: '/team/update', title:'更新队伍',component: TeamUpdatePage },
    { path: '/user', component: UserPage },
    { path: '/search', component: SearchPage },
    { path: '/user/edit', component: UserEditPage },
    { path: '/user/list', component: SearchResultPage },
    { path: '/user/login', component: UserLoginPage },
    { path: '/user/update', component: UserUpdatePage },
    { path: '/user/match', component: UserMatchPage },
    { path: '/user/match/reverse', component: UserMatchReversePage },
    { path: '/user/team/create', component: UserTeamCreatePage },
    { path: '/user/team/join', component: UserTeamJoinPage },

]

export default routes;