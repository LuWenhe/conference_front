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
    <el-row class="home-box-bottom">
      <el-row v-for="(item, index) in newsCategoryObjs" :key="index" class="home-introduction-card">
        <!-- 如果存放的不是图片 -->
        <common-content v-if="!item.isImage" :newsCategoryId="item.id" :titleName="item.name"></common-content>
        <!-- 如果存放的是图片 -->
        <common-content v-else :newsCategoryId="item.id" :titleName="item.name">
          <template v-slot:top>
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

import {getMinTitle, getNewsList} from '@/network/news'

export default {
  name: "Home",
  components: {CommonImage, CommonContent, Papers, BigTitle},
  data() {
    return {
      bannerList: [],
      newsCategoryObjs: []
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
    // 获取小标题id
    getTitle() {
      const data = 1

      getMinTitle(data).then(res => {
        if (res.code === 200) {
          res.data.forEach(item => {
            // 如果是Support和Journals则标记为图片
            // todo 后面需要从后端传入
            if (item.name === 'SCI Indexed Journals') {
              item.isImage = true
              item.isOnlyImage = false

              item.imageObjArray = [
                {
                  imageUrl: 'https://icdske.com/image/sci1.png',
                  imageHref: 'https://www.techscience.com/journal/cmc',
                  imageTitle: 'Computers, Materials & Continua',
                  imageComment: 'ISSN:1546-2218'
                },
                {
                  imageUrl: 'https://icdske.com/image/sci2.png',
                  imageHref: 'https://www.techscience.com/journal/iasc',
                  imageTitle: 'Intelligent Automation & Soft Computing',
                  imageComment: 'ISSN:1079-8587'
                },
                {
                  imageUrl: 'https://icdske.com/image/sci3.png',
                  imageHref: 'https://www.techscience.com/journal/cmc',
                  imageTitle: 'Computer Systems Science and Engineering',
                  imageComment: 'ISSN:0267-6192'
                },
                {
                  imageUrl: 'https://icdske.com/image/sci4.png',
                  imageHref: 'https://www.mdpi.com/journal/mathematics',
                  imageTitle: 'Mathematics',
                  imageComment: 'ISSN:2227-7390'
                },
                {
                  imageUrl: 'https://icdske.com/image/sci5.png',
                  imageHref: 'https://www.mdpi.com/journal/atmosphere',
                  imageTitle: 'Atmosphere',
                  imageComment: 'ISSN:2073-4433'
                }
              ]
            } else if (item.name === 'Support') {
              item.isImage = true
              item.isOnlyImage = true

              item.imageObjArray = [
                {
                  imageUrl: 'https://www.icdske.com/image/e2b214e5-8e0a-4c49-9d6c-4dbe33ec8bcb.png'
                },
                {
                  imageUrl: 'https://www.icdske.com/image/c8ce45a0-6f86-43b7-a42f-73b25c6c4c5b.png'
                },
                {
                  imageUrl: 'https://www.icdske.com/image/0ee8e7be-9cbb-4d8d-a2ec-0d6b1362f69f.png'
                },
                {
                  imageUrl: 'https://www.icdske.com/image/xindafangyunlogo.png'
                },
                {
                  imageUrl: 'https://www.icdske.com/image/electronic.png'
                },
                {
                  imageUrl: 'https://www.icdske.com/image/zhenggongcheng.png'
                }
              ]
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
