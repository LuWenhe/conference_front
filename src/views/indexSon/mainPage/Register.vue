<template>
  <div class="register-box">
    <el-row>
      <big-title :title="titleName"></big-title>

      <common-content :isNeed="false" :newsCategoryId="newsCategoryId" :titleName="titleName">
        <template v-slot:top>
          <p><strong>The conference registration fees for participants are as follows:</strong></p>
          <el-table class="register-table" :data="tableData" border :header-cell-style="{color: '#000000'}">
            <el-table-column prop="item" label="Items"></el-table-column>
            <el-table-column prop="fee" label="Registration Fee"></el-table-column>
          </el-table>
          <p style="color:red"><strong>Note:  </strong></p>
          &nbsp;
          <p><strong>Please fill in the online registration form after remittance  </strong></p>
          <p><strong>请您在汇款过后如实填写在线注册表单。 </strong></p>
          &nbsp;
          <el-row :gutter="300" >
            <el-col class="col1">
              <a class="fast" href="https://jinshuju.net/f/z1Ii06" target="_blank">
                <p class="co-title  color-change" id="button2" onmousemove="stopColor('1','button2')"
                   onmouseout="stopColor('3','button2')" style="color: white;">在线中文注册表</p>
              </a>
            </el-col>
            <el-col class="col1">
              <a class="fast" href="https://jinshuju.net/f/DVV5iI" target="_blank">
                <p class="co-title  color-change" id="button1" onmousemove="stopColor('1','button1')"
                   onmouseout="stopColor('3','button1')" style="color: white;">English Registration Form</p>
              </a>
            </el-col>
          </el-row>
          &nbsp;
          &nbsp;
        </template>
      </common-content>
    </el-row>
  </div>
</template>

<script>
import BigTitle from "@/components/common/BigTitle.vue"
import CommonContent from "@/components/common/CommonContent.vue";

export default {
  name: "Register",
  components: {CommonContent, BigTitle},
  data() {
    return{
      newsCategoryId: 38,
      titleName: 'Register',
      tableData: [{
        item: 'Registration Fee',
        fee: '550 USD (3500 RMB)'
    }]
  }
  }
}
</script>

<style scoped>
  .register-box {
    margin: 0 auto;
    width: 80%;
  }

  el-table-column {
    color: #000000
  }

  .register-table {
    margin: 20px 0;
  }
  a {
    color: #333;
    text-decoration: none;
  }

  .fast > p {
    width: 270px;
    height: 48px;
    border-radius: 24px;
    justify-content: center;
    padding-left: 27px;
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
    width: 260px;
    height: 48px;
    padding-left: 5px;
  }
</style>
