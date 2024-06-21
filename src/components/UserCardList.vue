<template>
  <van-skeleton title avatar :row="3" :loading="props.loading">
    <van-card
        v-for="u in props.userList"
        :desc="u.profile"
        :title="`${u.username} (${userGenderEnum[u.gender]})`"
        :thumb="u.avatarUrl"
        :num="u.comment"
    >
      <template #tags>
        <van-tag plain type="primary" v-for="tag in u.tags" style="margin-right: 8px">{{ tag }}</van-tag>
      </template>
      <template #footer>
        <van-button size="small">联系我</van-button>
      </template>

    </van-card>

 </van-skeleton>
</template>

<script setup lang="ts">
import {UserType} from "../models/user";
import {userGenderEnum} from "../constants/gender.ts";

//定义属性类型
interface UserCardListProps {
  loading: boolean;
  userList: UserType[];
}

//他可以拿到父组件传递过来的值     wothDefaults用来设置默认值
const props =withDefaults(defineProps<UserCardListProps>(),{
  loading: true,
  // @ts-ignore
  userList: [] as UserType,
})

</script>

<style scoped>

</style>
