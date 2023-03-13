<template>
  <el-row>
    <big-title :title="bigTitle[this.resData.index]"></big-title>
    <el-card class="box-card">
      <el-col>
        <div v-html="this.new.content" class="ql-editor"></div>
      </el-col>
    </el-card>
  </el-row>
</template>

<script>
import BigTitle from "./BigTitle.vue"
import {getMinTitle, getnew, getNewsList} from '@/Api/api'

export default {
  name: "commonMain",
  components: {BigTitle},
  props: {
    resData: {
      type: Object,
      default: {}
    },
    titleId: {
      type: Number,
      default: ''
    }
  },
  data() {
    return {
      menuList: [],
      newsList: [],
      new: {}, //新闻对象
      bigTitle: [],
    }
  },
  created() {
    console.log('this', this.resData, this.titleId)
    this.getTitle()
  },
  methods: {
    //获取小标题id
    getTitle() {
      const data = this.titleId
      getMinTitle(data)
        .then(res => {
          if (res.code === 200) {
            this.menuList = res.data
            this.menuList.map(item => {
              this.bigTitle.push(item.name)
            })
            this.getnews(this.menuList[this.resData.index])
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
        newsCategoryId: item.id, //限定新闻类别
        size: 5
      }
      getNewsList(data).then(res => {
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
      getnew(id).then(res => {
        if (res.code === 200) {
          this.new = res.data
        }
      })
        .catch(error => {

        })
    }
  }
}


</script>

<style scoped>
.home-title span {
  font-size: 24px;
  font-weight: 500;
  margin-left: 20px;
  color: rgba(51, 51, 51, 1);
}
</style>
