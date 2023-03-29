<template>
  <div class="Publication-box">
    <el-row>
      <common-main :resData="resData" :titleId="titleId"></common-main>
    </el-row>
  </div>
</template>


<script>
import BigTitle from "@/components/common/BigTitle";
import CommonMain from "@/components/common/CommonContent";

export default {
  name: "Publication",
  components: {BigTitle,  CommonMain},
  data() {
    return{
      bigTitle: ['publication'],
      newList: [],
      new: {},
      resData: {
        current: 1,
        newsCategoryId:50 , //限定新闻类别
        size: 1,
        index: 3
      },
      titleId: 4
    }
  }
}
</script>

<style scoped>

</style>
