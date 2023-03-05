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
        :default-active="$route.path"
        class="el-menu"
        mode="horizontal"
        @select="handleSelect"
        background-color="#0768AC"
        text-color="#fff"
        active-text-color="#ffd04b"
        router>
        <el-menu-item index="/home">Home</el-menu-item>
        <el-menu-item index="/committee">Committee</el-menu-item>
        <el-submenu index="/">
          <template slot="title">Speakers</template>
          <el-menu-item index="3-1">Keynote Speakers</el-menu-item>
          <el-menu-item index="3-2">Invited Speakers</el-menu-item>
        </el-submenu>
        <el-submenu index="/papers">
          <template slot="title">Papers</template>
          <el-menu-item index="/papers/cpf">Call For Papers</el-menu-item>
          <el-menu-item index="/papers/cfss">Call For Special Sessions</el-menu-item>
          <el-menu-item index="4-3">Paper Submission</el-menu-item>
          <el-menu-item index="4-3">Important Dates</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">Attendees</template>
          <el-menu-item index="5-1">Accommodation</el-menu-item>
<!--          <el-menu-item index="5-2">Schedule</el-menu-item>-->
          <el-menu-item index="5-3">News</el-menu-item>
        </el-submenu>
        <el-menu-item index="/program">Program</el-menu-item>
        <el-menu-item index="/register">Register</el-menu-item>
        <el-menu-item index="/Venue">Venue</el-menu-item>

        <el-menu-item index="/contact">Contact</el-menu-item>
        <el-menu-item index="/chinese">中文</el-menu-item>
      </el-menu>
    </el-row>
    <!-- 主页内容 -->
    <el-main class="index-main">
      <router-view/>
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
    // formatterTitle(t) {
    //   switch (t) {
    //     case '1':
    //       return 'Home'
    //     case '2':
    //       return 'Committee'
    //     case '3':
    //       return 'Speakers'
    //     case '4':
    //       return 'Papers'
    //     case '5':
    //       return 'Attendees'
    //     case '6':
    //       return 'Register'
    //     case '7':
    //       return 'Venue'
    //     case '8':
    //       return 'Program'
    //     case '9':
    //       return 'Contact'
    //     case '10':
    //       return '中文'
    //     case '11':
    //       return '轮播图'
    //     case'12':
    //       return 'papers/cpf'
    //   }
    // },
    handleSelect(key, keyPath) {
      console.log('12', key, keyPath);
      // console.log('23',this.formatterTitle(key))
      // this.$router.push({     //跳转到指定页面并在目标页面获取到参数
      //   path: '/home/' + this.formatterTitle(key),
      //   query: {
      //     title: this.formatterTitle(key),
      //     id: key
      //   }
      // })
    }
  }
}
</script>

<style scoped>
  .index-container {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  el-menu-item {
    width: 150px;
  }
  .index-header {
    height: 85% !important;
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
