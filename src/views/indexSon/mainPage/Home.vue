<template>
  <div class="home-box">
    <!-- 首页上半部分 轮播图-->
    <el-row>
      <el-carousel class="home-carousel" :interval="5000" arrow="always">
        <el-carousel-item v-for="(item, index) in bannerList" :key="index">
          <img class="carousel-img" :src="'http://localhost:7070/' + item.picturePath" alt="">
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <!-- 首页下半部分 -->
    <el-row>
      <!-- 会议介绍 -->
      <el-row v-for="(item, index) in menuList" :key="index" class="liStylenone liPointer marb10">
        <big-title :title=item.name></big-title>
        <el-card class="home-introduction-content">
          <el-row>
            <div v-html="item.content" class="ql-editor"></div>
          </el-row>
        </el-card>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import BigTitle from "@/components/common/BigTitle.vue"
import {getMinTitle, getNewsList, getnew} from '@/Api/api'

export default {
  name: "Home",
  components: {BigTitle},
  data() {
    return {
      bannerList: [],
      menuList: [],
      newsList: [],
      new: {}, //新闻对象
      bigTitle: ['About DSKE 2023', 'Important Dates', 'Keynote Speakers', 'Publication'],
      // bigTitleid:['42', '43' ,'44','45'],
    }
  },
  created() {
    this.getnews()
    this.getTitle()
  },
  methods: {
//获取后端轮播图
    getnews() {
      const data = {
        current: 1,
        newsCategoryId: 45,
        size: 3
      }
      getNewsList(data)
        .then(res => {
          if (res.code === 200) {
            this.bannerList = res.data.records

          }
        })
        .catch(err => {

        })
    },
    //获取小标题id
    getTitle() {
      const data = 1

      getMinTitle(data)
        .then(res => {
          if (res.code === 200) {
            this.menuList = res.data
            for (let i = 0; i < this.menuList.length; i++) {
              this.getnews1(this.menuList[i])
            }
            // this.getnews1(this.menuList[0])
            // this.getnews1(this.menuList[1])
            // this.getnews1(this.menuList[2])
            // this.getnews1(this.menuList[3])
          }
        })
        .catch(err => {

        })
    },

    //根据小标题id获取新闻
    getnews1(item) {
      const data = {
        current: 1,
        newsCategoryId: item.id,
        size: 5
      }
      getNewsList(data)
        .then(res => {
          // console.log(res);
          if (res.code === 200) {
            this.newsList = res.data.records
            this.getalone(this.newsList[0].id, item)
          }
        })
        .catch(error => {

        })
    },

    //获取新闻内容,得到一个新闻对象
    getalone(id, item) {
      const data = id
      getnew(data)
        .then(res => {
          if (res.code === 200) {
            this.new = res.data
            this.$set(item, 'content', this.new.content)
          }
        })
        .catch(error => {

        })

    }
  }
}


</script>

<style scoped>
.home-carousel {
  width: 100%;
}

.carousel-img {
  width: 100%;
  height: 100%;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.home-title span {
  font-size: 24px;
  font-weight: 500;
  margin-left: 20px;
  color: rgba(51, 51, 51, 1);
}

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
