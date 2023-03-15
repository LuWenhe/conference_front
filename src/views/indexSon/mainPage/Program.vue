<template>
  <div class="program-box">
    <el-row>
      <big-title :title=" bigTitle[0]"></big-title>
      <el-card class="box-card">
        <ul class=" list-paddingleft-2" style="width: 1101.05px;"><p><strong>Agenda of</strong><strong>&nbsp;ICDSKE 2023</strong></p></ul>
        <p style="text-align: justify;"><br style="white-space: normal;"></p>
        <p style="text-align: justify;"><span style="color: #000000;">
          <strong>2023 1th International Conference on Data Science and Knowledge Engineering (ICDSKE 2023) will be held on August, 2023 in Xiong’an New Area in Beijing, China. </strong>&nbsp;The following information about the schedule is for your reference.</span></p>
        <p style="text-align: justify;"><span style="color: #000000;"><br></span></p>
<!--        <el-table-->
<!--          :data="tableData"-->
<!--          :span-method="objectSpanMethod"-->
<!--          border-->
<!--          style="width: 100%;color: #000000;"-->
<!--          :header-cell-style="{-->
<!--             color: '#000000', }"-->
<!--        class="protable">-->
<!--          <el-table-column-->
<!--            prop="data"-->
<!--            label="Data"-->
<!--            width="180">-->
<!--          </el-table-column>-->
<!--          <el-table-column-->
<!--            prop="time"-->
<!--            label="Time Slot">-->
<!--          </el-table-column>-->
<!--          <el-table-column-->
<!--            prop="schedule"-->
<!--            sortable-->
<!--            label="Schedule">-->
<!--          </el-table-column>-->
<!--        </el-table>-->
        <table class="UEditorTable" data-sort="sortDisabled" width="1130">
          <tbody>
          <tr class="firstRow"><td rowspan="1" colspan="3" valign="middle" align="center" style="margin: 0px; padding: 3px 5px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-color: rgb(204, 204, 204); overflow-wrap: break-word; white-space: pre-wrap; word-break: break-all;"><span style="font-size: 18px; font-family: arial, helvetica, sans-serif;">
            <strong><strong style="white-space: normal;">
            <strong style="text-align: justify;"></strong></strong>
              <strong style="white-space: normal;">Schedule</strong></strong></span></td></tr>
          <tr><td width="155" valign="middle" align="center" style="margin: 0px; padding: 3px 5px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-color: rgb(204, 204, 204); overflow-wrap: break-word; white-space: pre-wrap; word-break: break-all;"><span style="font-family: arial, helvetica, sans-serif;">August 11</span></td>
            <td width="150" valign="middle" align="center" style="margin: 0px; padding: 3px 5px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-color: rgb(204, 204, 204); overflow-wrap: break-word; white-space: pre-wrap; word-break: break-all;"><span style="font-family: arial, helvetica, sans-serif;">13:00-17:00</span></td>
            <td width="942" valign="top" style="margin: 0px; padding: 3px 5px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-color: rgb(204, 204, 204); overflow-wrap: break-word; white-space: pre-wrap; word-break: break-all;"><span style="font-family: arial, helvetica, sans-serif;">Registration</span></td></tr>
          <tr><td rowspan="4" colspan="1" width="155" valign="middle" align="center" style="margin: 0px; padding: 3px 5px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-color: rgb(204, 204, 204); overflow-wrap: break-word; white-space: pre-wrap; word-break: break-all;">
            <span style="font-family: arial, helvetica, sans-serif;"><span style="font-family: arial, helvetica, sans-serif; text-align: -webkit-center; white-space: pre-wrap;">August 12</span><br></span></td>
            <td width="150" valign="middle" align="center" style="margin: 0px; padding: 3px 5px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-color: rgb(204, 204, 204); overflow-wrap: break-word; white-space: pre-wrap; word-break: break-all;"><span style="font-family: arial, helvetica, sans-serif;">09:00-12:00</span></td>
            <td width="942" valign="top" style="margin: 0px; padding: 3px 5px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-color: rgb(204, 204, 204); overflow-wrap: break-word; white-space: pre-wrap; word-break: break-all;"><span style="font-family: arial, helvetica, sans-serif;">Speeches of Keynote Speakers</span></td></tr>
          <tr><td colspan="1" rowspan="1" width="158" valign="middle" align="center" style="margin: 0px; padding: 3px 5px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-color: rgb(204, 204, 204); overflow-wrap: break-word; white-space: pre-wrap; word-break: break-all;">
            <span style="font-family: arial, helvetica, sans-serif;">12:00-14:00<br></span></td>
            <td colspan="1" rowspan="1" width="628" valign="top" style="margin: 0px; padding: 3px 5px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-color: rgb(204, 204, 204); overflow-wrap: break-word; white-space: pre-wrap; word-break: break-all;">
              <p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); white-space: normal;"><span style="font-family: arial, helvetica, sans-serif;">Lunch</span></p></td></tr>
          <tr><td colspan="1" rowspan="1" width="158" valign="middle" align="center" style="margin: 0px; padding: 3px 5px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-color: rgb(204, 204, 204); overflow-wrap: break-word; white-space: pre-wrap; word-break: break-all;">
            <span style="font-family: arial, helvetica, sans-serif;">14:00-17:30</span></td><td colspan="1" rowspan="1" width="628" valign="top" style="margin: 0px; padding: 3px 5px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-color: rgb(204, 204, 204); overflow-wrap: break-word; white-space: pre-wrap; word-break: break-all;">
            <p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="font-family: arial, helvetica, sans-serif;">Oral Presentations<span style="color: #FF0000; font-family: arial, helvetica, sans-serif;">
            </span>
            </span>
            </p>
          </td>
          </tr>
          <tr><td colspan="1" rowspan="1" width="158" valign="middle" align="center" style="margin: 0px; padding: 3px 5px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-color: rgb(204, 204, 204); overflow-wrap: break-word; white-space: pre-wrap; word-break: break-all;">
            <span style="font-family: arial, helvetica, sans-serif;">17:30-18:00</span></td>
            <td colspan="1" rowspan="1" width="628" valign="top" style="margin: 0px; padding: 3px 5px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-color: rgb(204, 204, 204); overflow-wrap: break-word; white-space: pre-wrap; word-break: break-all;">
              <p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); white-space: normal;"><span style="font-family: arial, helvetica, sans-serif;">Banquet</span></p></td></tr>
          <tr><td width="161" valign="middle" align="center" style="margin: 0px; padding: 3px 5px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-color: rgb(204, 204, 204); overflow-wrap: break-word; white-space: pre-wrap; word-break: break-all;">
            <span style="font-family: arial, helvetica, sans-serif;"><span style="font-family: arial, helvetica, sans-serif; text-align: -webkit-center; white-space: pre-wrap;">August 13</span><br></span></td>
            <td width="150" valign="middle" align="center" style="margin: 0px; padding: 3px 5px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-color: rgb(204, 204, 204); overflow-wrap: break-word; white-space: pre-wrap; word-break: break-all;">
              <span style="font-family: arial, helvetica, sans-serif;">09:00-18:00</span></td>
            <td width="942" valign="top" style="margin: 0px; padding: 3px 5px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-color: rgb(204, 204, 204); overflow-wrap: break-word; white-space: pre-wrap; word-break: break-all;">
              <span style="font-family: arial, helvetica, sans-serif;">Academic Investigation</span></td></tr>
          </tbody>
        </table>
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
      // tableData: [{
      //   data: 'August 11',
      //   time: '13:00-17:00',
      //   schedule: 'Registration',
      //
      // }, {
      //   data: 'August 12',
      //   time: '09:00-12:00',
      //   schedule: 'Speeches of Keynote Speakers',
      // }, {
      //   data: 'August 12',
      //   time: '12:00-14:00',
      //   schedule: 'Lunch',
      //
      // }, {
      //   data: 'August 12',
      //   time: '14:00-18:00',
      //   schedule: 'Lunch',
      // }, {
      //   data: 'October 16',
      //   time: '09:00-18:00',
      //   schedule: 'Academic Investigation',
      // }]
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
  .program-box {
    margin: 0 auto;
    width: 80%;
  }
  .UEditorTable {
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    width: 100%;
    margin-bottom: 10px;
  }
  table {
    display: table;
    box-sizing: border-box;
    text-indent: initial;
    border-color: grey;
    border-collapse: collapse;
    border-spacing: 0;
  }
  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
  table td, table th {
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 3px 18px !important;
  }
</style>
