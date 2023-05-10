<template>
  <div class="home-box">
    <!-- 首页上半部分轮播图-->
    <el-row>
      <el-carousel class="home-carousel" :interval="5000" arrow="always" height="100%">
        <el-carousel-item v-for="(item, index) in bannerList" :key="index">
          <img class="carousel-img" :src="item.picturePath" alt="">
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <!-- 首页下半部分 -->
    <el-row class="home-box-bottom" v-if="isDataLoaded1 && isDataLoaded2">
      <el-row v-for="(item, index) in newsCategoryObjs" :key="index" class="home-introduction-card">
        <!-- 如果存放的不是图片 -->
        <common-content v-if="!item.isImage" :newsCategoryId="item.id" :titleName="item.name"></common-content>
        <!-- 如果存放的是图片 -->
        <common-content v-else :newsCategoryId="item.id" :titleName="item.name">
          <template v-slot:bottom>
            <el-row class="image-box">
              <el-row v-for="(imageObj, index) in item.imageObjArray" :key="index">
                <common-image :imageObj="imageObj" :isOnlyImage="item.isOnlyImage"></common-image>
              </el-row>
            </el-row>
          </template>
        </common-content>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import BigTitle from "@/components/common/BigTitle.vue"
import Papers from "@/views/indexSon/mainPage/Papers.vue"
import CommonContent from "@/components/common/CommonContent.vue"
import CommonImage from "@/components/common/CommonImage.vue"

import {getMinTitle, getNewsList, getImagesByNewCategoryId} from '@/network/news'

export default {
  name: "Home",
  components: {CommonImage, CommonContent, Papers, BigTitle},
  data() {
    return {
      bannerList: [],
      newsCategoryObjs: [],
      isDataLoaded1: false,
      isDataLoaded2: false,
      count: 0
    }
  },
  created() {
    this.getNews()
    this.getTitle()
  },
  methods: {
    postOpenPlatform(url) {
      window.open(url, '_blank');
    },
    //获取后端轮播图
    getNews() {
      const data = {
        current: 1,
        newsCategoryId: 45,
        size: 3
      }

      getNewsList(data).then(res => {
        if (res.code === 200) {
          this.bannerList = res.data.records
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 获取首页小标题以及下面的内容
    getTitle() {
      let data = 1

      getMinTitle(data).then(res => {
        if (res.code === 200) {
          res.data.forEach(item => {
            let newsCategoryId = item.id

            // 如果是SCI Indexed Journals和Support需要获取图片
            // 防止数据没加载完就渲染页面, 需要用两个isDataLoaded来解决页面渲染不完整的问题
            if (newsCategoryId === 44) {
              item.isImage = true         // 子标题下只包含图片内容
              item.isOnlyImage = false    // 图片包含标题和介绍

              getImagesByNewCategoryId(newsCategoryId).then(res => {
                if (res.code === 200) {
                  item.imageObjArray = res.data
                  this.isDataLoaded1 = true
                }
              })
            } else if (newsCategoryId === 46) {
              item.isImage = true
              item.isOnlyImage = true     // 图片不包含标题和介绍

              getImagesByNewCategoryId(newsCategoryId).then(res => {
                if (res.code === 200) {
                  item.imageObjArray = res.data
                  this.isDataLoaded2 = true
                }
              })
            }

            this.newsCategoryObjs.push(item)
          })
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
  .home-carousel {
    width: 100%;
    height: 480px;
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

  .home-box-bottom {
    margin: 0 auto;
    width: 80%;
  }

  .home-title span {
    font-size: 24px;
    font-weight: 500;
    margin-left: 20px;
    color: rgba(51, 51, 51, 1);
  }

  .home-introduction-card {
    margin-bottom: 20px;
  }

  table {
    display: table;
    box-sizing: border-box;
    text-indent: initial;
    border-color: grey;
    border-collapse: separate;
    border-spacing: 50px 0;
  }

  .image-box {
    display: flex;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    font-size: 16px;
  }
</style>
