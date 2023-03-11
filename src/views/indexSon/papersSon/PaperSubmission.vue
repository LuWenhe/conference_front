<template>
  <div class="callForPapers-box">
    <el-row>
      <common-main :resData="resData" :titleId="titleId"></common-main>
    </el-row>
    <el-row>
      <el-card>
        <a href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2Ficais2022" target="_blank" title="投稿">
          <span style="text-decoration: underline; color: #0000FF;">
            <strong>Make a submission
            </strong></span></a>
      </el-card>>
    </el-row>
  </div>
</template>
<script>

import BigTitle from "@/components/common/BigTitle"
import CommonMain from "@/components/common/CommonContent"

export default {
  name: "CallForSpecialSessions",
  components: {BigTitle,  CommonMain},
  data() {
    return{
      bigTitle: ['committee'],
      newList: [],
      new: {},
      resData: {
        current: 1,
        newsCategoryId:31 , //限定新闻类别
        size: 1,
        index: 2
      },
      titleId: 4
    }
  },
  created() {
  },
  methods: {
  }

}
</script>

<style scoped>
.home-introduction-content {
  background-color: #ffffff;
  line-height: 24px;
  word-wrap: break-word;
  padding: 20px;
  margin: 10px 0;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  text-align: justify;
  font-size: 16px;
}
</style>
