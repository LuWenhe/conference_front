<template>
  <div class="program-box">
    <el-row>
      <big-title :title="titleName"></big-title>

      <common-content :isNeed="false" :newsCategoryId="newsCategoryId" :titleName="titleName">
        <template v-slot:top>
          <div class="program-box-top">
            <p class="program-title"><strong>{{topTitle}}</strong></p>
            <p v-html="topContent">{{topContent}}</p>
            <table>
              <tbody>
              <tr class="firstRow">
                <td colspan="3">Schedule</td>
              </tr>
              <tr>
                <td>August 11</td>
                <td>13:00-17:00</td>
                <td>Registration</td>
              </tr>
              <tr>
                <td rowspan="4">August 12</td>
                <td>09:00-12:00</td>
                <td>Speeches of Keynote Speakers</td>
              </tr>
              <tr>
                <td>12:00-14:00</td>
                <td>Lunch</td>
              </tr>
              <tr>
                <td>14:00-17:30</td>
                <td>Oral Presentations</td>
              </tr>
              <tr>
                <td>17:30-18:00</td>
                <td>Banquet</td>
              </tr>
              <tr>
                <td>August 13</td>
                <td>09:00-18:00</td>
                <td>Academic Investigation</td>
              </tr>
              </tbody>
            </table>
          </div>
        </template>
      </common-content>
    </el-row>
  </div>
</template>

<script>
import BigTitle from "@/components/common/BigTitle.vue"
import CommonContent from "@/components/common/CommonContent.vue";

export default {
  name: "Program",
  components: {CommonContent, BigTitle},
  data() {
    return {
      topTitle: 'Agenda of ICDSKE 2023',
      topContent: '<strong>2023 International Conference on Data Science and Knowledge Engineering (ICDSKE 2023)</strong>' +
        'will be held on <strong>August, 2023</strong> in <strong>Zhengzhou city, Henan province, China</strong>. ' +
        'The following information about the schedule is for your reference.',
      newsCategoryId: 40,
      titleName: 'Program'
    }
  }
}
</script>

<style scoped>
  .program-box {
    margin: 0 auto;
    width: 80%;
  }

  .program-title {
    margin-bottom: 20px;
  }

  table {
    width: 100%;
    margin: 20px 0;
    text-indent: initial;
    border-color: grey;
    border-collapse: collapse;
    border-spacing: 0;
  }

  .firstRow {
    text-align: center;
    font-weight: bold;
  }

  table td, table th {
    border: 1px solid #ccc;
    padding: 3px 18px !important;
  }
</style>
