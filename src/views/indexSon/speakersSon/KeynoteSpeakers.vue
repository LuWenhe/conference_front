<template>
  <div class="callForPapers-box">
    <el-row>
      <common-main :resData="resData" :titleId="titleId"></common-main>
    </el-row>
  </div>
</template>
<script>

import BigTitle from "@/components/common/BigTitle"
import CommonMain from "@/components/common/CommonContent"
export default {
  name: "KeynoteSpeakers",
  components: {BigTitle,  CommonMain},
  data() {
    return{
      bigTitle: [],
      newList: [],
      new: {},
      resData: {
        current: 1,
        newsCategoryId:27, //限定新闻类别
        size: 1,
        index: 0
      },
      titleId: 3
    }
  },
  created() {
  },
  methods: {
  }

}
</script>

<style scoped>

</style>
