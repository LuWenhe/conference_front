<template>
  <el-container class="home-container">
    <!-- 主页头部 -->
    <el-header class="home-header">
      <div class="head-img">
        <img src="" alt="">
      </div>
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
    </el-header>
    <!-- 主页内容 -->
    <el-main class="home-main">
      <router-view/>
    </el-main>

    <!-- 主页尾部 -->
    <el-footer class="home-footer">

    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Home",
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
  .home-container {
    width: 60%;
    margin: 0 auto;
  }

  .home-header {
    height: 100% !important;
    padding: 0;
  }

  .head-img {
    height: 160px;
    background-color: aqua;
  }

  .home-main {
    height: 600px;
    background-color: aquamarine;
  }

  .home-footer {
    height: 200px;
    background-color: antiquewhite;
  }
</style>
