<template>
  <van-nav-bar
      title="找个伙伴，组个队"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18"/>
    </template>
  </van-nav-bar>

  <div id ="content">
    <router-view />
  </div>

  <van-tabbar route @change="onChange">
    <van-tabbar-item  to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item  to="/team" icon="search" name="team">队伍页</van-tabbar-item>
    <van-tabbar-item  to="/user" icon="friends-o" name="user">个人</van-tabbar-item>
    <van-tabbar-item  to="/user/login" icon="setting-o" name="user">登录</van-tabbar-item>
  </van-tabbar>
</template>


<script setup lang="ts">
import {showToast} from 'vant';
import {useRouter} from "vue-router";

const router = useRouter();
const onClickLeft = () =>{
  router.back()
};
const onClickRight = () =>{
  router.push('/search')
} ;

// const active = ref("index");
const onChange = (index:string) => {  if (index !== undefined) {showToast(`标签 ${index}`);}}


</script>

<style scoped>

</style>