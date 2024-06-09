<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>

  <van-divider content-position="left">已选标签</van-divider>

  <div v-if="activeIds.length === 0">请选择标签</div>

  <van-row gutter="20" style="padding: 3px 10px;">
    <van-col v-for="tag in activeIds">
      <van-tag closeable size="medium" type="primary" @close="doclose(tag)">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>

  <van-divider content-position="left">选择标签</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />


</template>

<script setup lang="ts">
import {ref} from 'vue';
//已选标签列表
const activeIndex = ref(0);
const activeIds = ref([]);
let originTagList = ([
  {
    text: '性别',
    children: [
      {text: '男', id: '男'},
      {text: '女', id: '女'},
    ],
  },
  {
    text: '年纪',
    children: [
      {text: '大一', id: '大一'},
      {text: '大二', id: '大二'},
      {text: '大三', id: '大三'},
    ],
  },
]);

let tagList = ref(originTagList)
//查找
const searchText = ref('');
const onSearch = () => {
  /* 这种方法会直接将所选的标签全部改成搜索的
  activeIds.value = tagList
        // .flatMap(parentTag=>parentTag.children)
        .flatMap(parentTag => parentTag.children.map(childTag => childTag.text))
        // .filter(tag=>tag.text.includes(searchText.value))
        .filter(tag => tag.includes(searchText.value))*/
  tagList.value=originTagList
      .map(parentTag => {
        const tempChildren = [...parentTag.children];
        const tempParentTag = {...parentTag}
          tempParentTag.children=tempChildren.filter(tag => tag.text.includes(searchText.value));
      return tempParentTag}
      )};
const onCancel = () => {
  searchText.value = '';
  tagList.value=originTagList
}
//删除抱歉
const doclose = (tag: string) => {
  activeIds.value = activeIds.value.filter((item) => {
    return item !== tag;
  })
};



</script>

<style scoped>

</style>