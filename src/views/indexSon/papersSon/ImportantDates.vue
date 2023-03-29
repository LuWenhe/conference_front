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
  name: "importanttime",
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
  }
}
</script>

<style scoped>

</style>
