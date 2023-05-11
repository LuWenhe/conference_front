<template>
  <el-menu
    :default-active="this.$route.path"
    class="el-menu"
    mode="horizontal"
    @select="handleSelect"
    background-color="#0768AC"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <!-- todo 目录需要从后端传入 -->
    <el-menu-item index="/home">Home</el-menu-item>
    <el-menu-item index="/committee">Committee</el-menu-item>
    <el-submenu index="3">
      <template slot="title">Speakers</template>
      <el-menu-item index="/speakers/ks">Keynote Speakers</el-menu-item>
      <el-menu-item index="/speakers/is">Invited Speakers</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">Papers</template>
      <el-menu-item index="/papers/cpf">Call For Papers</el-menu-item>
      <el-menu-item index="/submission">Paper Submission</el-menu-item>
      <el-menu-item index="/publication">Publication</el-menu-item>
      <el-menu-item index="/papers/imd">Important Dates</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">Attendees</template>
      <el-menu-item index="/attendees/ad">Accommodation</el-menu-item>
      <el-menu-item index="/attendees/ln">Latest News</el-menu-item>
    </el-submenu>
    <el-menu-item index="/program">Program</el-menu-item>
    <el-menu-item index="/register">Register</el-menu-item>
    <el-menu-item index="/Venue">Venue</el-menu-item>

    <el-menu-item index="/contact">Contact</el-menu-item>
    <el-menu-item index="/chinese">中文</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "CommonMenu",
  data() {
    return {
      // menuData: [
      //   {
      //     path: "/home",
      //     name: "home",
      //     label: "Home",
      //   },
      //   {
      //     path: "/committee",
      //     name: "committee",
      //     label: "Committee",
      //   },
      //   {
      //     label: "Speakers",
      //     children: [
      //       {
      //         path: "/Speakers/ks",
      //         name: "ks",
      //         label: "Keynote Speakers",
      //       },
      //       {
      //         path: "/Speakers/Is",
      //         name: "Is",
      //         label: "Invited Speakers",
      //       },
      //     ],
      //   },
      //   {
      //     label: "Papers",
      //     children: [
      //       {
      //         path: "/papers/cpf",
      //         name: "cpf",
      //         label: "Call For Papers",
      //       },
      //       {
      //         path: "/papers/cfss",
      //         name: "cfss",
      //         label: "Call For Special Sessions",
      //       },
      //       {
      //         path: "/papers/PS",
      //         name: "PS",
      //         label: "Paper Submission",
      //       },
      //       {
      //         path: "/papers/ID",
      //         name: "ID",
      //         label: "Important Dates",
      //       },
      //     ],
      //   },
      //   {
      //     label: "Attendees",
      //     children: [
      //       {
      //         path: "/Attendees/accommodation",
      //         name: "Accommodation",
      //         label: "Accommodation",
      //       },
      //       {
      //         path: "/Attendees/schedule",
      //         name: "Schedule",
      //         label: "Schedule",
      //       },
      //       {
      //         path: "/Attendees/news",
      //         name: "News",
      //         label: "News",
      //       },
      //     ],
      //   },
      //    {
      //     path: "/program",
      //     name: "program",
      //     label: "Program",
      //   },
      //    {
      //     path: "/register",
      //     name: "register",
      //     label: "Register",
      //   },
      //    {
      //     path: "/Venue",
      //     name: "Venue",
      //     label: "Venue",
      //   },
      //    {
      //     path: "/contact",
      //     name: "contact",
      //     label: "Contact",
      //   },
      //    {
      //     path: "/chinese",
      //     name: "chinese",
      //     label: "中文",
      //   },
      // ],
    };
  },
  computed :{
    // noChildren() {
    //     return this.menuData.filter(item => !item.children)
    // },
    // //有子菜单
    // hasChildren() {
    //     return this.menuData.filter(item => item.children)
    // }
  },
  created(){
    // console.log('this',this.noChildren, this.hasChildren)
  },
  methods: {
    handleSelect(key, keyPath) {

    },
  },
};
</script>

<style scoped>
  .el-menu {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
