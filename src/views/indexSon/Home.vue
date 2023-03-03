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
      <el-row class="home-introduction">
        <el-row class="home-introduction-title">
          <span>About ICINC 2022</span>
        </el-row>
        <el-row class="home-introduction-content">
          <p>
            2022 International Conference on Informatics, Networking and Computing (ICINC 2022)  will be held in Nanjing, China on October 14-16, 2022. The meeting will be on  Informatics, Networking and Computing, etc. The latest research achievements in the field of communication, from domestic and foreign institutions of higher learning, scientific research institutes, enterprises and institutions of experts, professors, scholars, engineers and other  provide a share professional experience, expand the professional network, face to face to new ideas and show the research results of the international platform, To discuss key challenges and research directions in this field, with a view to promoting the development and application of theories and technologies in this field in universities and enterprises, as well as establishing business or research contacts and seeking global partners for future undertakings.
          </p>
          <br>
          <p>
            The purpose of this conference is to provide an authoritative international exchange platform for researchers in related fields, so as to promote good academic exchanges among scholars in related fields. It also provides global partners to establish business and scientific cooperation around the world.
          </p>
        </el-row>
      </el-row>
    </el-row>
    <!-- -->
    <el-row>

    </el-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      bannerList: [
        'https://fhk.ais.cn/cms/website/functional/pic/202208/328220809111845208.png',
        'https://fhk.ais.cn/cms/website/functional/pic/202208/328220809111658199.png'
      ]
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

  .home-introduction-title {
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgba(7, 104, 172, 0.1);
  }

  .home-introduction-title span {
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
    margin-top: 20px;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  }

  .home-introduction-content p {
    text-align: justify;
    font-size: 16px;
  }
</style>
