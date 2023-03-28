<template>
  <el-container class="index-container">
    <!-- 主页头部 -->
    <el-header class="index-header">
      <el-row class="index-top">
        <el-row class="index-top-img">
          <img :src="this.url + '/image/home.png'"  alt="">
        </el-row>
      </el-row>
    </el-header>
    <!-- 导航栏 -->
    <el-row class="index-menu">
      <common-menu/>
    </el-row>
    <!-- 主页内容 -->
    <el-main class="index-main">
      <router-view/>
    </el-main>
    <!-- 主页尾部 -->
    <el-footer class="index-footer">
      <span>Copyright © 2023 | 2023 International Conference on Data Science and Knowledge Engineering (ICDSKE 2023)</span>
    </el-footer>
  </el-container>
</template>

<script>
import CommonMenu from '../components/common/CommonMenu.vue'
export default {
  name: "Index",
  components: {
    CommonMenu
  },
  data() {
    return {
      activeIndex: '1',
      url: 'http://124.71.143.3:80'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log('12', key, keyPath);
    }
  }
}
</script>

<style scoped>
  .index-container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  el-menu-item {
    width: 150px;
  }

  .index-header {
    height: 140px !important;
    padding: 0;
  }

  .index-main {
    height: 100% !important;
    padding: 0;
  }

  .index-footer {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333333;
    color: #989898;
    font-size: 12px;
  }

  .index-top {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .index-top-img img {
    width: 1519px;
    height: 193px !important;
  }

  .index-top-title{
    font-size: 20px;
    font-weight: 600;
    margin-left: 30px;
  }
</style>
