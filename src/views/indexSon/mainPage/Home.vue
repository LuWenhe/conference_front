<template>
  <div class="home-box">
    <!-- 首页上半部分 轮播图-->
    <el-row>
      <el-carousel class="home-carousel" :interval="5000" arrow="always" height="100%">
        <el-carousel-item v-for="(item, index) in bannerList" :key="index">
          <img class="carousel-img" :src="'http://localhost:7070/' + item.picturePath" alt="">
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <!-- 首页下半部分 -->
    <el-row class="home-box-bottom">
      <el-row v-for="(fileMsg,index) in fileMsgListCom" :key="fileMsg.id" class="liStylenone liPointer marb10">
        <big-title :title=fileMsg.name></big-title>
        <el-row class="home-introduction-content">
          <el-row>
            <div v-html="fileMsg.content" class="ql-editor"></div>
          </el-row>
        </el-row>
      </el-row>
      <el-row v-for="(fileMsg1,index) in fileMsgListCom1" :key="fileMsg1.id" class="liStylenone liPointer marb10">
        <big-title :title=fileMsg1.name></big-title>
        <el-row class="home-introduction-content">
<!--          <el-row>-->
<!--            <div v-html="fileMsg1.content" class="ql-editor"></div>-->
<!--          </el-row>-->
          <table>
            <tr >
              <th>
                <img src="@/assets/images/sci1.png" width="120" height="180"/>
              </th>
              <th>
                <img src="@/assets/images/sci2.png" width="120" height="180"/>
              </th>
              <th>
                <img src="@/assets/images/sci3.png" width="120" height="180"/>
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
              <th width="120" height="80">
                <ul >
                    <a href="javascript:void(0);" @click="postOpenPlatform('https://www.techscience.com/journal/iasc')"> Intelligent Automation & Soft Computing</a>
                </ul>
              </th>
              <th width="120" height="80">
                <ul >
                    <a href="javascript:void(0);" @click="postOpenPlatform('https://www.springer.com/series/7899')"> Communications
                      in Computer and
                      Information Science</a>
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
                <p style="color: mediumblue">ISSN:1865-0937</p>
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
import {getMinTitle, getNewsList, getnew} from '@/Api/api'
// import sci1 from "@/assets/images/sci1.png"
// import sci2 from "@/assets/images/sci2.png"
// import sci3 from "@/assets/images/sci3.png"
// import sci4 from "@/assets/images/sci4.png"
// import sci5 from "@/assets/images/sci5.png"
export default {
  name: "Home",
  components: {BigTitle},
  data() {
    return {
      bannerList: [],
      menuList: [],
      newsList: [],
      new: {}, //新闻对象
      // bigTitle: ['About DSKE 2023', 'Important Dates', 'Keynote Speakers', 'Publication'],
      // bigTitleid:['42', '43' ,'44','45'],

    }
  },
  computed: {
    fileMsgListCom() {
      return this.menuList.filter((item, index) => {
        return index !==2;
      });
    },
    fileMsgListCom1() {
      return this.menuList.filter((item, index) => {
        return index === 2;
      });
    }
  },
  created() {
    this.getnews()
    this.getTitle()
  },
  methods: {
    postOpenPlatform(url){
      window.open(url,'_blank');
    },
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
        size: 1
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
  table tr{

  }
</style>
