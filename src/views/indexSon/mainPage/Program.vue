<template>
  <div class="program-box">
    <el-row>
      <big-title :title=" bigTitle[0]"></big-title>
      <el-card class="box-card">
        <ul class=" list-paddingleft-2" style="width: 1101.05px;"><li><p><strong>Agenda of</strong><strong>&nbsp;DSKE 2023</strong></p></li></ul>
        <p style="text-align: justify;"><br style="white-space: normal;"></p>
        <p style="text-align: justify;"><span style="color: #000000;">
          <strong>2023 1th International Conference on Data Science and Knowledge Engineering (ICDSKE 2023) will be held on August, 2023 in Xiong’an New Area in Beijing, China. </strong>&nbsp;The following information about the schedule is for your reference.</span></p>
        <p style="text-align: justify;"><span style="color: #000000;"><br></span></p>
        <el-table
          :data="tableData"
          :span-method="objectSpanMethod"
          border
          style="width: 100%">
          <el-table-column
            prop="data"
            label="Data"
            width="180">
          </el-table-column>
          <el-table-column
            prop="time"
            label="Time Slot">
          </el-table-column>
          <el-table-column
            prop="schedule"
            sortable
            label="Schedule">
          </el-table-column>
        </el-table>
        <el-col>
          <div v-html="this.new.content" class="ql-editor"></div>
        </el-col>
      </el-card>
    </el-row>

  </div>
</template>

<script>
import BigTitle from "@/components/common/BigTitle.vue"
import {getnew, getNewsList} from '@/Api/api'

export default {
  name: "Program",
  components: {BigTitle},
  data() {
    return {
      bigTitle: ['Program'],
      newList: [],
      new: {},
      tableData: [{
        data: 'October 14',
        time: '13:00-17:00',
        schedule: 'Registration',

      }, {
        data: 'October 15',
        time: '09:00-12:00',
        schedule: 'Speeches of Keynote Speakers',
      }, {
        data: 'October 15',
        time: '12:00-14:00',
        schedule: 'Lunch',

      }, {
        data: 'October 16',
        time: '12:00-14:00',
        schedule: 'Lunch',
      }, {
        data: 'October 16',
        time: '09:00-18:00',
        schedule: 'Academic Investigation',
      }]
    }
  },
  created() {
    this.getnews()
  },
  methods: {
    //获取新闻列表
    getnews() {
      const data = {
        current: 1,
        newsCategoryId: 40, //限定新闻类别
        size: 5
      }
      getNewsList(data)
        .then(res => {
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
      getnew(id)
        .then(res => {
          // console.log(res);
          if (res.code === 200) {
            this.new = res.data
          }
        })
        .catch(error => {

        })
    },
    arraySpanMethod({row, column, rowIndex, columnIndex}) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    },
    objectSpanMethod({row, column, rowIndex, columnIndex}) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  }
}

</script>

<style scoped>

</style>
