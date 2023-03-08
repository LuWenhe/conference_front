<template>
  <div class="contact-box">
    <el-row>
      <big-title :title=" bigTitle[0]"></big-title>
      <el-card class="box-card">
        <el-col>
          <div v-html="this.new.content" class="ql-editor"></div>
        </el-col>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import BigTitle from "@/components/common/BigTitle.vue"
import {getnew, getNewsList} from '@/Api/api'

export default {
  name: "Contact",
  components: {BigTitle},
  data() {
    return{
      bigTitle: ['Contact Us'],
      newList: [],
      new: {}
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
      getNewsList(data)
        .then(res => {
          if (res.code === 200) {
            this.newsList = res.data.records
            this.getalone(this.newsList[0].id)
          }
        })
        .catch(error => {

        })
    },

    //获取新闻内容,得到一个新闻对象
    getalone(id) {
      getnew(id)
        .then(res => {
          // console.log(res);
          if (res.code === 200) {
            this.new = res.data
            console.log(this.new.content)  //在控制台输出信息
          }
        })
        .catch(error => {

        })
    }
  }

}
</script>

<style scoped>

</style>
