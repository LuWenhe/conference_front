<template>
  <div class="callForPapers-box">
    <el-row>
      <common-content :newsCategoryId="newsCategoryId" :titleName="titleName"></common-content>
    </el-row>
    <el-row>
      <el-card>
         <el-row :gutter="100">
           <el-col class="col1">
            <a class="fast" href="https://cmt3.research.microsoft.com/ICDSKE2023" target="_blank">
              <p class="co-title  color-change" id="button2" onmousemove="stopColor('1','button2')"
                 onmouseout="stopColor('3','button2')" style="color: white;">Submission System</p>
            </a>
           </el-col>
           <el-col class="col1">
            <a class="fast" href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" target="_blank">
              <p class="co-title  color-change" id="button1" onmousemove="stopColor('1','button1')"
                 onmouseout="stopColor('3','button1')" style="color: white;"> LNCS Style Template</p>
            </a>
           </el-col>
        </el-row>
      </el-card>
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
  a {
    color: #333;
    text-decoration: none;
  }

  .fast > p {
    width: 248px;
    height: 48px;
    border-radius: 24px;
    justify-content: center;
    padding-left: 0;
    margin-bottom: 15px;
  }

  .color-change {
    background: #157CAB !important;
  }

  .co-title {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    box-sizing: border-box;
    padding-right: 23px;
    min-width: 132px;
  }

  .col1{
    width: 248px;
    height: 48px;
    padding-left: 5px;
  }
</style>
