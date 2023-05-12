<template>
  <div class="paper-submission-box">
    <el-row>
      <common-content :newsCategoryId="newsCategoryId" :titleName="titleName">
        <template v-slot:bottom>
          <el-row class="button-group">
            <a href="https://cmt3.research.microsoft.com/ICDSKE2023" target="_blank">Submission System</a>
          </el-row>
        </template>
      </common-content>
    </el-row>
  </div>
</template>
<script>

import BigTitle from "@/components/common/BigTitle"
import CommonContent from "@/components/common/CommonContent.vue"

export default {
  name: "PaperSubmission",
  components: {CommonContent, BigTitle},
  data() {
    return {
      newsCategoryId: 31,
      titleName: 'Paper Submission'
    }
  }
}
</script>

<style scoped>
  .button-group a {
    display: block;
    width: 270px;
    height: 48px;
    background-color: #157cab;
    color: #fff;
    margin-right: 15px;
    border-radius: 30px;
    font-weight: 500;
    text-align: center;
    line-height: 48px;
  }
</style>
