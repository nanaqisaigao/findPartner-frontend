<template>
  <van-cell title="用户名" is-link to="/user/edit" :value="user.username" @click="toEdit('username','用户名',user.username)"/>
  <van-cell title="账号" :value="user.userAccount"/>
  <van-cell title="头像" is-link to="/user/edit">
  <img :src ="user.avatarUrl" alt="" style="width: 50px;height: 50px"/>
  </van-cell>
  <van-cell title="性别" is-link :value="user.gender" @click="toEdit('gender','性别',user.gender)"/>
  <van-cell title="电话" is-link to="/user/edit" :value="user.phone" @click="toEdit('phone','电话',user.phone)"/>
  <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" @click="toEdit('email','邮箱',user.email)"/>
<van-cell title="留言" is-link to="/user/edit" :value="user.comment" @click="toEdit('comment','留言',user.comment)"/>
  <van-cell title="注册时间" :value="user.createTime.toISOString()"/>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";

const user = {
  id: 1,
  username: 'piao',
  userAccount: 'piaopiao',
  avatarUrl: 'https://picsum.photos/id/212/200/300',
  gender: '男',
  phone: '123456489781',
  email: '12345678@qq.com',
  comment:'hello world',
  createTime: new Date(),

}
const router = useRouter();
const toEdit = (editKey: string,editName: string,currentValue: string) => {
  router.push({
    path:"/user/edit",
    query:{
      editKey,
      editName,
      currentValue
    }
  })


}
</script>

<style scoped>

</style>