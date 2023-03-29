<template>
  <div class="committee-box">
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
import {getOneNew, getNewsList} from '@/Api/api'

export default {
  name: "Committee",
  components: {BigTitle},
  data() {
    return {
      bigTitle: ['committee'],
      newList: [],
      htmlContent: ""
    }
  },
  created() {
    this.getNews()
  },
  methods: {
    //获取新闻列表
    getNews() {
      let data = {
        current: 1,
        newsCategoryId: 47, //限定新闻类别
        size: 5
      }
      // 得到新闻集合
      getNewsList(data).then(res => {
        if (res.code === 200) {
          let newId = res.data.records[0].id
          this.getOneNewById(newId)
        }
      }).catch(error => {
        console.log(error)
      })
    },
    // 根据信息id获取信息内容
    getOneNewById(newId) {
      getOneNew(newId).then(res => {
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
  .committee-box {
    margin: 0 auto;
    width: 80%;
  }
</style>
