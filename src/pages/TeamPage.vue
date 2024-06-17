<template>
<div id="teamPage">
  <van-button type="primary" to="/team/add" >添加队伍</van-button>
  <team-card-list :team-list="teamList" />
</div>

</template>


<script setup lang="ts">

import {useRouter} from "vue-router";
import TeamCardList from "../components/TeamCardList.vue";
import {onMounted, ref} from "vue";
import myAxios from "../plungins/myAxios.ts";
import {showFailToast} from "vant";

const router = useRouter();

const teamList = ref([]);

onMounted(async ()=>{
  const res = await myAxios.get("/team/list");
  if(res.code === 0){
      teamList.value = res.data;
  }else {
    showFailToast("加载队伍失败，请刷新重试")
  }
})



</script>


<style scoped>

</style>