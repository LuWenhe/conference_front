<template>
  <div class="chinese-box">
    <el-row>
      <big-title :title=" bigTitle[0]"></big-title>
      <el-card class="box-card">
        <el-col>
          <div v-html="htmlContent" class="ql-editor"></div>
        </el-col>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import BigTitle from "@/components/common/BigTitle.vue"
import {getNewsList, getOneNew} from '@/Api/api'

export default {
  name: "Chinese",
  components: {BigTitle},
  data() {
    return{
      bigTitle: ['中文'],
      newList: [],
      htmlContent: ''
    }
  },
  created() {
    this.getNews()
  },
  methods: {
    //获取新闻列表
    getNews() {
      const data = {
        current: 1,
        newsCategoryId:48 , //限定新闻类别
        size: 5
      }
      getNewsList(data).then(res => {
        if (res.code === 200) {
          this.newsList = res.data.records
          this.getOneNewById(this.newsList[0].id)
        }
      }).catch(error => {
        console.log(error)
      })
    },
    // 根据新闻id获取新闻内容
    getOneNewById(id) {
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
  .chinese-box {
    margin: 0 auto;
    width: 80%;
  }
</style>
