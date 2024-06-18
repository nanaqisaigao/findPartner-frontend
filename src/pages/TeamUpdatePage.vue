<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="addTeamData.name"
          name="name"
          label="队伍名称"
          placeholder="请输入队伍名称"
          :rules="[{ required: true, message: '请填写用户账号' }]"
      />
        <van-field
            v-model="addTeamData.description"
            border:true
            rows="3"
            autosize
            label="队伍描述"
            type="textarea"
            placeholder="请输入队伍描述"
        />
      <van-field
          v-model="addTeamData.expiretime"
          is-link
          readonly
          name="datePicker"
          label="截止时间"
          :placeholder="addTeamData.expiretime"
          @click="showPicker = true"
      />
      <van-popup v-model:show="showPicker" position="bottom">
        <van-date-picker @confirm="onConfirm" @cancel="showPicker = false" />
      </van-popup>

<!--      <van-field name="stepper" label="步进器">
        <template #input>
          <van-stepper v-model="addTeamData.maxnum" />
        </template>
      </van-field>-->

      <van-field name="radio" label="单选框">
        <template #input>
          <van-radio-group v-model="addTeamData.status" direction="horizontal">
            <van-radio name="0">公开</van-radio>
            <van-radio name="1">私密</van-radio>
            <van-radio name="2">加密</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field
          v-if="addTeamData.status === '2'"
          v-model="addTeamData.password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
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
import {onMounted, ref} from 'vue';
import myAxios from "../plungins/myAxios.ts";
import {useRoute, useRouter} from "vue-router";
import {showSuccessToast,showFailToast} from "vant";

const router = useRouter();
const route = useRoute();
//用户要填写的表单数据       对象扩展符，这样addTeamData修改InitFormData不会修改
const addTeamData = ref({});
const id = route.query.id;

onMounted(async() =>{
  if(id <= 0){
    showFailToast("加载队伍失败");
    return;
  }
  const res = await myAxios.get("/team/get",{
    params:{
      id,
    }
  });
      if (res?.code === 0){
        addTeamData.value = res.data;
      }else {
        showFailToast("加载队伍失败")
      }}
);

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;
}




const showPicker = ref(false);
const onConfirm = ({ selectedValues }) => {
  addTeamData.value.expiretime = selectedValues.join('/');
  showPicker.value = false;
};

const onSubmit = async () => {
  const postData = {
    ...addTeamData.value,
    status: Number(addTeamData.value.status),
    expiretime: formatDate(addTeamData.value.expiretime)
  }
const res = await myAxios.post("/team/update",postData)
if(res?.code === 0 && res.data) {
  showSuccessToast("更新成功")
  router.push({
    path: '/team',
    replace: true,
  });
}else {
  showFailToast("更新失败")
}
}

</script>



<style scoped>

</style>