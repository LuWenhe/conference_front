<template>
  <div class="register-box">
    <el-row>
      <big-title :title=" bigTitle[0]"></big-title>
      <el-card class="box-card">
        <p><span style="color: #000000;"><strong>The conference registration fees for participants are as follows:</strong></span></p>
        <p> &nbsp;</p>
        <el-row>
          <el-table
            :data="tableData"
            border
            style="width: 100%; color: #000000;"
            :header-cell-style="{
             color: '#000000', }">
            <el-table-column
              prop="items"
              label="Items"
              width="480">
            </el-table-column>
            <el-table-column
              prop="fee"
              label="Registration Fee"
              width="480">
            </el-table-column>
          </el-table>
        </el-row>
        <p><br></p>
<!--        <p>-->
<!--          <a href="https://www.aischolar.org/attendees/toSignUp/EYUZNRN" target="_blank" title="参会注册">-->
<!--          <span style="text-decoration: underline; color: #000000;">-->
<!--            <strong><img src="https://static.ais.cn/cms/editor/202003/372200316143632036.png"-->
<!--                         alt="Registration.png" style="width: 208px; height: 80px;" width="208" vspace="0" height="80" border="0">-->
<!--            </strong></span></a>(English)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-->
<!--            <a href="https://www.ais.cn/attendees/toSignUp/REQZI3" target="_blank">-->
<!--              <img src="https://static.ais.cn/cms/editor/202003/372200316143632036.png"-->
<!--                   alt="Registration.png" style="width: 208px; height: 80px;" width="208" vspace="0" height="80" border="0">-->
<!--            </a><strong>&nbsp;</strong>(Chinese)</p>-->
<!--        <p> &nbsp;</p>-->
        <el-row>
          <div v-html="htmlContent" class="ql-editor"></div>
        </el-row>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import BigTitle from "@/components/common/BigTitle.vue"
import {getOneNew, getNewsList} from '@/Api/api'

export default {
  name: "Register",
  components: {BigTitle},
  data() {
    return{
      bigTitle: ['Register'],
      newList: [],
      htmlContent: '',
      tableData: [{
        items: 'Registration Fee',
        fee: '550 USD (3500 RMB)' ,
    }]
  }
  },
  created() {
    this.getnews()
  },
  methods: {
    //获取新闻列表
    getnews() {
      const data = {
        current: 1,
        newsCategoryId:38 , //限定新闻类别
        size: 5
      }
      getNewsList(data).then(res => {
        if (res.code === 200) {
          this.newsList = res.data.records
          this.getalone(this.newsList[0].id)
        }
      }).catch(error => {
        console.log(error)
      })
    },
    //获取新闻内容,得到一个新闻对象
    getalone(id) {
      getOneNew(id).then(res => {
        if (res.code === 200) {
          this.htmlContent = res.data.htmlContent
        }
      }).catch(error => {
        console.log(error)
      })
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
</style>
