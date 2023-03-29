<template>
  <div class="home-box">
    <!-- 首页上半部分 轮播图-->
    <el-row>
      <el-carousel class="home-carousel" :interval="5000" arrow="always" height="100%">
        <el-carousel-item v-for="(item, index) in bannerList" :key="index">
          <img class="carousel-img" :src="item.picturePath" alt="">
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <!-- 首页下半部分 -->
    <el-row class="home-box-bottom">
      <el-row v-for="(fileMsg, index) in supportList" :key="fileMsg.id">
        <big-title :title=fileMsg.name></big-title>
        <el-row class="home-introduction-content">
          <el-row>
            <div v-html="fileMsg.content" class="ql-editor"></div>
          </el-row>
        </el-row>
      </el-row>
      <el-row v-for="(fileMsg1, index) in journalList" :key="fileMsg1.id">
        <big-title :title=fileMsg1.name></big-title>
        <el-row class="home-introduction-content">
          <table>
            <tr >
              <th>
                <img src="@/assets/images/sci1.png" width="120" height="180"/>
              </th>
              <th>
                <img src="@/assets/images/sci2.png" width="120" height="180"/>
              </th>
              <th>
                <img src="@/assets/images/CSSE.png" width="120" height="180"/>
              </th>
              <th>
                <img src="@/assets/images/sci4.png" width="120" height="180"/>
              </th>
              <th>
                <img src="@/assets/images/sci5.png" width="120" height="180"/>
              </th>
            </tr>
            <tr>
              <th width="120" height="80">
                <ul >
                    <a href="javascript:void(0);" @click="postOpenPlatform('https://www.techscience.com/journal/cmc')"> Computers,Materials & Continua</a>
                </ul>
              </th>
              <th width="125" height="80">
                <ul >
                    <a href="javascript:void(0);" @click="postOpenPlatform('https://www.techscience.com/journal/iasc')"> Intelligent Automation & Soft Computing</a>
                </ul>
              </th>
              <th width="140" height="80">
                <ul >
                    <a href="javascript:void(0);" @click="postOpenPlatform('https://www.techscience.com/journal/csse')"> Computer Systems
                      Science and Engineering</a>
                </ul>
              </th>
              <th width="120" height="80">
                <ul >
                    <a href="javascript:void(0);" @click="postOpenPlatform('https://www.mdpi.com/journal/mathematics')">&nbsp;&nbsp;&nbsp;Mathematics</a>
                </ul>
              </th>
              <th width="120" height="80">
                <ul >
                    <a href="javascript:void(0);" @click="postOpenPlatform('https://www.mdpi.com/journal/atmosphere')">&nbsp;&nbsp;&nbsp; Atmosphere</a>
                </ul>
              </th>
            </tr>
            <tr>
              <th>
                <p style="color: mediumblue">ISSN:1546-2218</p>
              </th>
              <th>
                <p style="color: mediumblue">ISSN:1079-8587</p>
              </th>
              <th>
                <p style="color: mediumblue">ISSN:0267-6192</p>
              </th>
              <th width="130" height="60">
                <p style="color: mediumblue">&nbsp;ISSN:2227-7390</p>
              </th>
              <th width="130" height="60">
                <p style="color: mediumblue">&nbsp;ISSN:2073-4433</p>
              </th>
            </tr>
          </table>
          </el-row>
        </el-row>
      </el-row>
  </div>
</template>

<script>
import BigTitle from "@/components/common/BigTitle.vue"
import {getMinTitle, getNewsList, getOneNew} from '@/Api/api'

export default {
  name: "Home",
  components: {BigTitle},
  data() {
    return {
      bannerList: [],
      menuList: []
    }
  },
  computed: {
    supportList() {
      return this.menuList.filter((item, index) => {
        return index !==2;
      });
    },
    journalList() {
      return this.menuList.filter((item, index) => {
        return index === 2;
      });
    }
  },
  created() {
    this.getNews()
    this.getTitle()
  },
  methods: {
    postOpenPlatform(url){
      window.open(url,'_blank');
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
          this.menuList = res.data
          // 遍历小标题
          for (let i = 0; i < this.menuList.length; i++) {
            this.getNewByTitle(this.menuList[i])
          }
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 根据小标题id获取新闻内容
    getNewByTitle(newObj) {
      const data = {
        current: 1,
        newsCategoryId: newObj.id,
        size: 1
      }

      getNewsList(data).then(res => {
        if (res.code === 200) {
          let newsList = res.data.records
          this.getOneNewById(newsList[0].id, newObj)
        }
      }).catch(error => {
        console.log(error)
      })
    },
    // 根据新闻id获取新闻内容
    getOneNewById(id, item) {
      getOneNew(id).then(res => {
        if (res.code === 200) {
          // 给item对象中的content对象赋值
          this.$set(item, 'content', res.data.htmlContent)
        }
      }).catch(error => {
        console.log(error)
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

  .home-introduction-content {
    background-color: #ffffff;
    line-height: 24px;
    word-wrap: break-word;
    padding: 15px;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    text-align: justify;
    font-size: 16px;
    margin-bottom: 20px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  }
  table {
    display: table;
    box-sizing: border-box;
    text-indent: initial;
    border-color: grey;
    border-collapse: separate;
    border-spacing: 50px 0px;
  }
</style>
