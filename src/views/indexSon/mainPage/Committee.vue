<template>
  <div class="committee-box">
    <el-row>
      <big-title :title=" bigTitle[0]"></big-title>
      <el-card class="box-card">
        <el-col>
          <div v-html="this.content" class="ql-editor"></div>
        </el-col>
      </el-card>
    </el-row>
  </div>
</template>
<script>

import BigTitle from "@/components/common/BigTitle.vue"
import {getnew, getNewsList} from '@/Api/api'

export default {
  name: "Committee",
  components: {BigTitle},
  data() {
    return {
      bigTitle: ['committee'],
      newList: [],
      content: {}
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
        newsCategoryId: 47, //限定新闻类别
        size: 5
      }

      // 得到新闻集合
      getNewsList(data).then(res => {
        if (res.code === 200) {
          let newId = res.data.records[0].id
          this.getalone(newId)
        }
      }).catch(error => {
        console.log(error)
      })
    },
    //获取新闻内容,得到一个新闻对象
    getalone(newId) {
      getnew(newId).then(res => {
        if (res.code === 200) {
          this.content = res.data.htmlContent
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
