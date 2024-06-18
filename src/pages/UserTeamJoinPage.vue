<template>
  <div id="teamPage">
    <team-card-list-to-self :team-list="teamList" />
    <van-empty v-if = "!teamList||teamList.length<1" description="数据为空"/>
  </div>

</template>


<script setup lang="ts">


import {onMounted, ref} from "vue";
import myAxios from "../plungins/myAxios.ts";
import {showFailToast} from "vant";
import TeamCardListToSelf from "../components/TeamCardListToSelf.vue";

const teamList = ref([]);
onMounted(async ()=>{
  listTeam();
})

const listTeam = async ()=> {
  const res = await myAxios.get("/team/list/myjoin");
  if (res.code === 0) {
    teamList.value = res.data;
  } else {
    showFailToast("加载队伍失败，请刷新重试")
  }
};



</script>


<style scoped>

</style>