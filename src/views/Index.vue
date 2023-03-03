<template>
  <el-container class="index-container">
    <!-- 主页头部 -->
    <el-header class="index-header">
      <el-row class="index-top">
        <el-row class="index-top-img">
          <img src="https://fhk.ais.cn/cms/website/common/202207/350220701145230648.png" alt="">
        </el-row>
        <el-row class="index-top-title">
          <span>2023 International Conference on Data Science and Knowledge Engineering (DSKE 2023)</span>
        </el-row>
      </el-row>
    </el-header>
    <!-- 导航栏 -->
    <el-row>
      <el-menu
        :default-active="activeIndex"
        class="el-menu"
        mode="horizontal"
        @select="handleSelect"
        background-color="#0768AC"
        text-color="#fff"
        active-text-color="#ffd04b"
        router>
        <el-menu-item index="/home">Home</el-menu-item>
        <el-menu-item index="/committee">Committee</el-menu-item>
        <el-menu-item index="/speakers">Speakers</el-menu-item>
        <el-submenu index="4">
          <template slot="title">Papers</template>
          <el-menu-item index="/papers/cpf">Call For Papers</el-menu-item>
          <el-menu-item index="/papers/cfss">Call For Special Sessions</el-menu-item>
          <el-menu-item index="4-3">Paper Submission</el-menu-item>
          <el-menu-item index="4-3">Important Dates</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">Attendees</template>
          <el-menu-item index="5-1">VISA</el-menu-item>
          <el-menu-item index="5-2">Accommodation</el-menu-item>
          <el-menu-item index="5-3">Schedule</el-menu-item>
          <el-menu-item index="5-3">News</el-menu-item>
        </el-submenu>
        <el-menu-item index="6">Register</el-menu-item>
        <el-menu-item index="7">Venue</el-menu-item>
        <el-menu-item index="8">History</el-menu-item>
        <el-menu-item index="9">中文</el-menu-item>
        <el-menu-item index="10">Contact</el-menu-item>
      </el-menu>
    </el-row>
    <!-- 主页内容 -->
    <el-main class="index-main">
      <router-view class="box"/>
    </el-main>
    <!-- 主页尾部 -->
    <el-footer class="index-footer">
      <span>Copyright © 2023 | 2023 International Conference on Data Science and Knowledge Engineering (DSKE 2023)</span>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
  .index-container {
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .index-header {
    height: 80px !important;
    padding: 0;
  }

  .index-main {
    height: 100% !important;
    padding: 0;
    margin-top: -1px;
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
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .index-top-img img {
    height: 60px;
  }

  .index-top-title{
    font-size: 20px;
    font-weight: 600;
    margin-left: 30px;
  }
</style>
