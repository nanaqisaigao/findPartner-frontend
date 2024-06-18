<template>

  <template v-if="user">
  <van-cell title="用户名" is-link to="/user/edit" :value="user.username" @click="toEdit(user.id,'username','用户名',user.username)"/>
  <van-cell title="账号" :value="user.userAccount"/>
  <van-cell title="头像">
  <img :src ="user.avatarUrl" alt="" style="width: 50px;height: 50px"/>
  </van-cell>
  <van-cell title="性别" is-link :value="user.gender" @click="toEdit(user.id,'gender','性别',user.gender)"/>
  <van-cell title="电话" is-link to="/user/edit" :value="user.phone" @click="toEdit('phone','电话',user.phone)"/>
  <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" @click="toEdit('email','邮箱',user.email)"/>
<van-cell title="留言" is-link to="/user/edit" :value="user.comment" @click="toEdit('comment','留言',user.comment)"/>
  <van-cell title="注册时间" :value="formatDate(user.createTime)"/>
  </template>

</template>

<script setup lang="ts">

import {useRouter} from "vue-router";
import {onMounted, ref} from 'vue';
import myAxios from "../plungins/myAxios.ts";
import {showToast} from "vant";
import {UserType} from "../models/user";
import {getCurrentUser} from "../services/user.ts";

/*const user = {
  id: 1,
  username: 'piao',
  userAccount: 'piaopiao',
  avatarUrl: 'https://picsum.photos/id/212/200/300',
  gender: '男',
  phone: '123456489781',
  email: '12345678@qq.com',
  comment:'hello world',
  createTime: new Date(),

}*/
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
const toEdit = (editKey: string,editName: string,currentValue: string) => {
  router.push({
    path:"/user/edit",
    query:{
      editKey,
      editName,
      currentValue,
    }
  })
}

  function formatDate(time) {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}年${month}月${day}日`;
  }


</script>

<style scoped>

</style>