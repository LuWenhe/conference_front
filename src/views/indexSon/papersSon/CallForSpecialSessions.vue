<template>
  <div class="callForPapers-box">
    <el-row>
      <common-main :resData="resData" :titleId="titleId"></common-main>
    </el-row>

  </div>
</template>
<script>

import BigTitle from "../../../components/common/BigTitle.vue"
import CommonMain from "../../components/commonMain.vue"
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
        newsCategoryId:30 , //限定新闻类别
        size: 1,
        index: 1
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
