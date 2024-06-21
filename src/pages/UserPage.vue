<template>
  <template v-if="user">
    <van-cell icon="setting-o" title="修改信息" is-link to="/user/update" />
    <van-cell icon="friends-o" title="匹配相似标签用户" is-link to="/user/match" />
    <van-cell icon="friends-o" title="匹配差异性用户" is-link to="/user/match/reverse" />
    <van-cell icon="add-o" title="创建新队伍" is-link to="/team/add" />
    <van-cell icon="smile-o" title="我创建的队伍" is-link to="/user/team/create" />
    <van-cell icon="smile-o" title="我所在的队伍" is-link to="/user/team/join" />

  </template>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";
import {onMounted, ref} from 'vue';
import {showToast} from "vant";
import {UserType} from "../models/user";
import {getCurrentUser} from "../services/user.ts";


const user = ref<UserType>();
//当页面加载好后执行里面的内容
onMounted(async () => {
  // const res = await myAxios.get('/user/current');
  const res = await getCurrentUser();
  // debugger
    if(res){
      user.value = res;
      showToast("获取用户信息success")
    }else{
      showToast("获取用户信息失败")
    }
})

const router = useRouter();


</script>

<style scoped>

</style>