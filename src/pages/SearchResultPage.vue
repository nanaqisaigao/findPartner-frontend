<template>

  <user-card-list :user-list="userList" />

  <van-empty v-if = "!userList||userList.length<1" description="没有这样的用户"/>
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
const {tags} = route.query;


const userList = ref<UserType[]>([]);

//当页面加载好后执行里面的内容
onMounted(async () => {
  const userListResponse :UserType[]= await myAxios.get('/user/search/tags', {
    params: {
      tagNameList: tags
    },
    paramsSerializer: {
      serialize: params => qs.stringify(params, {indices: false}),
    },
  })
      .then(function (response) {
        console.log('/user/search/tags succeed', response);
        showToast('success')
        return response?.data;
      })
      .catch(function (error) {
        console.log('/user/search/tags error', error);
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
})


</script>


<style scoped>

</style>