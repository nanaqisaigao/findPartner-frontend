<template>

  <div
      id="teamCardList"
  >
    <!--  <van-skeleton title avatar :row="3" :loading="props.loading" v-for="user in props.teamList">-->
    <van-card

        v-for="team in props.teamList"
        :desc="team.description"
        :title="team.name"
        :thumb="team.createUser?.avatarUrl"
    >
      <template #tags>
        <van-tag plain type="warning" style="margin-right: 8px">{{ teamStatusEnum[team.status] }}</van-tag>
      </template>

      <template #bottom>
        <div>
          {{ '最大人数' + team.maxnum }}
        </div>
        <div>
          {{ '发布时间' + timestampToTime(team.createTime) }}
        </div>
        <div>
          {{ '过期时间' + timestampToTime(team.expiretime) }}
        </div>
        <div>
          {{ '队长：' + team.createUser?.username }}
        </div>
      </template>
      <template #footer>
        <van-button size="small" type="primary" plain @click="doJoinTeam(team.id)">加入队伍</van-button>
        <!--        <van-button v-if="team.createUser?.id === currentUser?.id" size="small" type="primary" plain
                           @click="doUpdateTeam(team.id)">更新队伍
               </van-button>
              <van-button v-if="team.createUser?.id === currentUser?.id" size="small" type="primary" plain
                           @click="doUpdateTeam(team.id)">退出队伍
               </van-button>
               <van-button v-if="team.createUser?.id === currentUser?.id" size="small" type="primary" plain
                           @click="doUpdateTeam(team.id)">解散队伍
               </van-button>-->
      </template>

    </van-card>
    <!--  </van-skeleton>-->
  </div>

</template>

<script setup lang="ts">

//定义属性类型
import {TeamType} from "../models/team";
import {teamStatusEnum} from "../constants/team.ts";
import timestampToTime from "../simpleMethods/timeStampConvert.ts";
import myAxios from "../plungins/myAxios.ts";
import {showFailToast, showSuccessToast, showToast} from "vant";
import {getCurrentUserState} from "../states/user.ts";
import {onMounted} from "vue";
import {getCurrentUser} from "../services/user.ts";
import {useRouter} from "vue-router";

const currentUser = getCurrentUserState();
const router = useRouter();

onMounted(async () => {
  // const res = await myAxios.get('/user/current');
  const res = await getCurrentUser();
  // debugger
  if (res) {
    showToast("获取用户信息success")
  } else {
    showToast("获取用户信息失败")
  }
})

interface TeamCardListProps {
  // loading: boolean;
  teamList: TeamType[];
}

//他可以拿到父组件传递过来的值     wothDefaults用来设置默认值
const props = withDefaults(defineProps<TeamCardListProps>(), {
  // @ts-ignore
  teamList: [] as TeamType,
})

const doJoinTeam = async (id: number) => {
  const res = await myAxios.post('/team/join', {
    "teamId": id
  });
  if (res?.code === 0) {
    showSuccessToast("加入成功")
  } else {
    showFailToast("加入失败")
  }
}


</script>


<style scoped>
#teamCardList :deep(.van-image__img) {
  height: 128px;
  object-fit: unset;
}
</style>


