<template>
  <div class="callForPapers-box">
    <el-row>
      <common-main :resData="resData" :titleId="titleId"></common-main>
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
            <a class="fast" href="https://maifile.cn/est/d2406789732267/pdf" target="_blank">
              <p class="co-title  color-change" id="button1" onmousemove="stopColor('1','button1')"
                 onmouseout="stopColor('3','button1')" style="color: white;">Template Download</p>
            </a>
           </el-col>
        </el-row>
      </el-card>
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
    font-family: PingFangSC-Medium,PingFang SC;
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
