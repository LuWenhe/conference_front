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
</style>
