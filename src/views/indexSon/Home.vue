<template>
  <div class="home-box">
    <!-- 首页上半部分 -->
    <el-row>
      <el-carousel class="home-carousel" :interval="5000" arrow="always">
        <el-carousel-item v-for="(item, index) in bannerList" :key="index">
          <img class="carousel-img" :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <!-- 首页下半部分 -->
    <el-row>
      <!-- 会议介绍 -->
      <el-row>
        <big-title :title="bigTitle[0]"></big-title>
        <el-row class="home-introduction-content">
          {{this.conferenceData.introduction}}
        </el-row>
      </el-row>
      <!-- 会议时间 -->
      <el-row>
        <big-title :title="bigTitle[0]"></big-title>
        <el-row class="home-introduction-content">
          {{this.conferenceData.introduction}}
        </el-row>
      </el-row>
      <!-- 关键人员 -->
      <el-row>
        <big-title :title="bigTitle[0]"></big-title>
        <el-row class="home-introduction-content">
          {{this.conferenceData.introduction}}
        </el-row>
      </el-row>
      <!-- 关键人员 -->
      <el-row>
        <big-title :title="bigTitle[0]"></big-title>
        <el-row class="home-introduction-content">
          {{this.conferenceData.introduction}}
        </el-row>
      </el-row>
    </el-row>
    <!-- -->
    <el-row>

    </el-row>
  </div>
</template>

<script>
import BigTitle from "../../components/common/BigTitle"
export default {
  name: "Home",
  components: {BigTitle},
  data() {
    return {
      bannerList: [
        'https://fhk.ais.cn/cms/website/functional/pic/202208/328220809111845208.png',
        'https://fhk.ais.cn/cms/website/functional/pic/202208/328220809111658199.png'
      ],
      bigTitle: ['About DSKE 2023'],
      conferenceData:{
        title: "About DSKE 2023",
        introduction: "2022 International Conference on Informatics, " +
          "Networking and Computing (ICINC 2022)  will be held in Nanjing, " +
          "China on October 14-16, 2022. The meeting will be on  Informatics, " +
          "Networking and Computing, etc. The latest research achievements " +
          "in the field of communication, from domestic and foreign institutions " +
          "of higher learning, scientific research institutes, enterprises and " +
          "institutions of experts, professors, scholars, engineers and other " +
          "provide a share professional experience, expand the professional network, " +
          "face to face to new ideas and show the research results of the international " +
          "platform, To discuss key challenges and research directions in this field, " +
          "with a view to promoting the development and application of theories and " +
          "technologies in this field in universities and enterprises, as well as " +
          "establishing business or research contacts and seeking global partners " +
          "for future undertakings."
      }
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

  .home-title {
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgba(7, 104, 172, 0.1);
  }

  .color-line {
    width: 10px;
    height: 50px;
    background-color: rgba(31, 104, 172, 1);
    border-radius: 2px;
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
<script setup>
import BigTitle from "../../components/common/BigTitle.vue";
</script>
