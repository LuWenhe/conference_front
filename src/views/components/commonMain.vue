<template>
  <div>
    <!-- 主页会议记录 -->
    <el-row>
      <!-- 会议介绍 -->
      <el-row v-for="(item, index) in menuList" :key="index" class="liStylenone liPointer marb10" >
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
import BigTitle from "../../components/common/BigTitle"
import { getMinTitle, getNewsList, getnew} from '../../Api/api'
export default {
  name: "commonMain",
  components: { BigTitle },
  props:{
      resData:{
          type:Object,
          default:{}
      }
  },
  data() {
    return {
      menuList: [
        {
          name:'清华大学',
          content:'请问你们想做什么呢？'
        }
      ],
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
    console.log('this', this.resData)
    this.getnews()
    this.getTitle()
  },
  methods: {
//获取后端轮播图
    getnews() {
      const data = this.resData
      console.log('data',data)
      getNewsList(data)
        .then(res => {
          console.log(res)
          if (res.code == 200) {
            this.bannerList = res.data.records

          }
        })
        .catch(err => {
          console.log(err)
        })
    },
        //获取小标题id
        getTitle(){
        const data = 1
        getMinTitle(data)
          .then(res => {
            if (res.code == 200) {
              this.menuList = res.data
              console.log('123', this.menuList)
              for(let i = 0 ; i < this.menuList.length; i++){
                  this.getnews1(this.menuList[i])
              }
            }
          })
          .catch(err => {
            console.log(err)
          })
      },

      //根据小标题id获取新闻
      getnews1(item) {
       console.log('item1',item)
        const data = {
          current: 1,
          newsCategoryId: item.id,
          size: 5
        }
        getNewsList(data)
          .then(res => {
            // console.log(res);
            if (res.code == 200) {
              this.newsList = res.data.records
              console.log('newsList',this.newsList)
              this.getalone(this.newsList[0].id, item)
            }
          })
          .catch(error => {
            console.log(error)
          })
      },

     //获取新闻内容,得到一个新闻对象
        getalone(id,item) {
          const data = id
          console.log('id',id)
          getnew(data)
            .then(res => {
              // console.log(res);
              if (res.code == 200) {
                this.new = res.data
                console.log('new', res.data)
                console.log('CONTENT',this.new.content)  //在控制台输出信息
                this.$set(item, 'content', this.new.content)
                console.log('item3', this.menuList)
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