<template>
  <div>
    <el-row>
      <big-title :title="bigTitle[this.resData.index]"></big-title>
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
import { getMinTitle, getNewsList, getnew} from '../../Api/api'
export default {
  name: "commonMain",
  components: { BigTitle },
  props:{
      resData:{
          type:Object,
          default:{}
      },
      titleId: {
        type:Number,
        default:''
      }
  },
  data() {
    return {
      menuList: [],
      newsList: [],
      new: {}, //新闻对象
      bigTitle: ['About DSKE 2023', 'Important Dates', 'Keynote Speakers', 'Publication'],
      conferenceData: {
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
          "for future undertakings.",
      }
    }
  },
  created() {
    console.log('this', this.resData,this.titleId)
    this.getTitle()
  },
  methods: {
    //获取小标题id
    getTitle(){
      const data = this.titleId
      getMinTitle(data)
        .then(res => {
          // console.log(res);
          if (res.code == 200) {
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
