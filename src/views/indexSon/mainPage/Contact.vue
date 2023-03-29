<template>
  <div class="contact-box">
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
  name: "Contact",
  components: {BigTitle},
  data() {
    return{
      bigTitle: ['Contact Us'],
      newList: [],
      htmlContent: ''
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
        newsCategoryId:41 , //限定新闻类别
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
  .contact-box {
    margin: 0 auto;
    width: 80%;
  }
</style>
