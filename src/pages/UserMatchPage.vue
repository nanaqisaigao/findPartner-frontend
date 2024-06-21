<template>

<!--  使用组件-->
  <user-card-list :user-list="userList" :loading="loading"/>

  <van-empty v-if = "!userList||userList.length<1" description="数据为空"/>
</template>


<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref} from 'vue';
import myAxios from "../plungins/myAxios.ts";
import {showToast} from "vant";
import qs from 'qs'
import {UserType} from "../models/user";
import UserCardList from "../components/UserCardList.vue";

const route = useRoute();


const userList = ref<UserType[]>([]);
const loading =ref(true);
//当页面加载好后执行里面的内容
onMounted(async () => {
  loading.value = true;
  const num = 15;
  const userListResponse :UserType[]= await myAxios.get('/user/match', {
    params: {
      num,
    },
   /* paramsSerializer: {
      serialize: params => qs.stringify(params, {indices: false}),
    },*/
  })
      .then(function (response) {
        console.log('/user/match succeed', response);
        showToast('success')
        return response?.data;
      })
      .catch(function (error) {
        console.log('/user/match error', error);
        showToast('fail');
      })
  console.log('userListResponse', userListResponse)
  if(userListResponse){
    userListResponse.forEach(user=>{
      if(user.tags)
        user.tags=JSON.parse(user.tags);
    })
    userList.value = userListResponse;
  }
  loading.value = false;
})


</script>


<style scoped>

</style>