<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="editUser.currentValue"
          :name="editUser.editKey"
          :label="editUser.editName"
          :placeholder="'请输入'+editUser.editName"
          :rules="[{ required: true}]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>

<script setup lang="ts">
import {useRoute,useRouter} from "vue-router";
import {ref} from "vue"
import myAxios from "../plungins/myAxios.ts";
import {showToast} from "vant";
import {getCurrentUserState} from "../states/user.ts";
const route = useRoute();
const router = useRouter();
const editUser = ref({
  editKey:route.query.editKey,
  editName:route.query.editName,
  currentValue:route.query.currentValue,
})
console.log(route.query)

const currentUser = getCurrentUserState();
if (!currentUser) {
  showToast('请先登录');
}

const onSubmit = async()  => {
  const res = await myAxios.post('/user/update', {
    // 'id': editUser.value.editId,
    'id': currentUser.id,
    //中括号括起来可以生成一个对象
    [editUser.value.editKey as string]: editUser.value.currentValue
  })
  if(res.code === 0 && res.data>0){
    showToast("修改成功");
    router.back();
  }else {
    showToast("修改错误");
  }

};
</script>

<style scoped>

</style>