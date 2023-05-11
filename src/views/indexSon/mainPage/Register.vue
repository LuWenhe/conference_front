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
          <p style="color:red"><strong>Note: </strong></p>
          &nbsp;
          <p><strong>Please fill in the online registration form after remittance  </strong></p>
          <p><strong>请您在汇款过后如实填写在线注册表单。 </strong></p>
          &nbsp;
          <el-row class="button-group">
            <a href="https://jinshuju.net/f/z1Ii06">在线中文注册表</a>
            <a href="https://jinshuju.net/f/DVV5iI">English Registration Form</a>
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
import CommonContent from "@/components/common/CommonContent.vue"

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

  .button-group {
    display: flex;
  }

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
