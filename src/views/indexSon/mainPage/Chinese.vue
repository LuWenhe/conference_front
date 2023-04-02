<template>
  <div class="chinese-box">
    <el-row>
      <common-content :newsCategoryId="newsCategoryId" :titleName="titleName"></common-content>
    </el-row>
  </div>
</template>

<script>
import CommonContent from "@/components/common/CommonContent.vue"

export default {
  name: "Chinese",
  components: {CommonContent},
  data() {
    return{
      newsCategoryId: 48,
      titleName: '中文'
    }
  }
}
</script>

<style scoped>
  .chinese-box {
    margin: 0 auto;
    width: 80%;
  }
</style>
