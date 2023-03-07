<template>
  <div class="committee-box">
    <el-row>
      <big-title :title="bigTitle[0]"></big-title>
      <el-card class="box-card">
        <el-col>
          <div v-html="this.new.content" class="ql-editor"></div>
        </el-col>
      </el-card>
    </el-row>

  </div>
</template>
<script>

import BigTitle from "../../components/common/BigTitle"
import {getMinTitle, getnew, getNewsList} from '../../Api/api'
export default {
  name: "Committee",
  components: {BigTitle},
  data() {
    return{
      bigTitle: [],
      newList: [],
      new: {}
    }
  },
  created() {
    this.getTitle()
    // this.getnews()
  },
  methods: {

    //获取小标题id
    getTitle(){
      const data = 2
      getMinTitle(data)
        .then(res => {
          // console.log(res);
          if (res.code == 200) {
            this.menuList = res.data
            this.menuList.map(item => {
              this.bigTitle.push(item.name)
            })
            console.log('comite2', this.menuList,this.bigTitle)
            this.getnews(this.menuList[0])
          }
        })
        .catch(err => {
          console.log(err)
        })
    },

    //获取新闻列表
    getnews(item) {
      const data = {
        current: 1,
        newsCategoryId:item.id , //限定新闻类别
        size: 5
      }
      getNewsList(data)
        .then(res => {
          // console.log(res);
          if (res.code == 200) {
            this.newsList = res.data.records
            this.getalone(this.newsList[0].id)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },

    //获取新闻内容,得到一个新闻对象
    getalone(id) {
      const data = id
      getnew(data)
        .then(res => {
          // console.log(res);
          if (res.code == 200) {
            this.new = res.data
            console.log('content', this.new.content)  //在控制台输出信息
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

}
</script>

<style scoped>
.home-introduction-content {
  background-color: #ffffff;
  line-height: 24px;
  word-wrap: break-word;
  padding: 20px;
  margin: 10px 0;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  text-align: justify;
  font-size: 16px;
}
</style>
