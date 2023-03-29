<template>
  <div class="callForPapers-box">
    <el-row>
      <common-main :resData="resData" :titleId="titleId"></common-main>
    </el-row>
    <el-card>
      <p>1.Metaverse</p>
      <p>&nbsp </p>
    <table class="UEditorTable">
      <tbody>
      <tr class="firstRow">
        <td  style="word-break: break-all;" width="368" valign="top">
          <ul v-for="item in arrData1[0]" class=" list-paddingleft-2" style="list-style-type: disc;" >
            <p><span  style="color: #000000;"><li>{{item}}</li></span></p>
           </ul></td>
        <td style="word-break: break-all;" width="368" valign="top">
          <ul v-for="item in arrData1[1]" class=" list-paddingleft-2" style="list-style-type: disc;" >
            <li><p><span  style="color: #000000;">{{item}}</span></p></li>
          </ul></td>
        <td style="word-break: break-all;" width="368" valign="top">
          <ul v-for="item in arrData1[2]" class=" list-paddingleft-2" style="list-style-type: disc;" >
            <li><p><span  style="color: #000000;">{{item}}</span></p></li>
          </ul>
        </td>
      </tr>
      </tbody>
    </table>
      <p>2.Data Science</p>
      <p>&nbsp </p>
      <table class="UEditorTable">
        <tbody>
        <tr class="firstRow">
          <td  style="word-break: break-all;" width="368" valign="top">
            <ul v-for="item in arrData2[0]" class=" list-paddingleft-2" style="list-style-type: disc;" >
              <li><p><span  style="color: #000000;">{{item}}</span></p></li>
            </ul></td>
          <td style="word-break: break-all;" width="368" valign="top">
            <ul v-for="item in arrData2[1]" class=" list-paddingleft-2" style="list-style-type: disc;" >
              <li><p><span  style="color: #000000;">{{item}}</span></p></li>
            </ul></td>
          <td style="word-break: break-all;" width="368" valign="top">
            <ul v-for="item in arrData2[2]" class=" list-paddingleft-2" style="list-style-type: disc;" >
              <li><p><span  style="color: #000000;">{{item}}</span></p></li>
            </ul>
          </td>
        </tr>
        </tbody>
      </table>
      <p>3.Digital Economy</p>
      <p>&nbsp </p>
      <table class="UEditorTable">
        <tbody>
        <tr class="firstRow">
          <td  style="word-break: break-all;" width="368" valign="top">
            <ul v-for="item in arrData3[0]" class=" list-paddingleft-2" style="list-style-type: disc;" >
              <li><p><span  style="color: #000000;">{{item}}</span></p></li>
            </ul></td>
          <td style="word-break: break-all;" width="368" valign="top">
            <ul v-for="item in arrData3[1]" class=" list-paddingleft-2" style="list-style-type: disc;" >
              <li><p><span  style="color: #000000;">{{item}}</span></p></li>
            </ul></td>
          <td style="word-break: break-all;" width="368" valign="top">
            <ul v-for="item in arrData3[2]" class=" list-paddingleft-2" style="list-style-type: disc;" >
              <li><p><span  style="color: #000000;">{{item}}</span></p></li>
            </ul>
          </td>
        </tr>
        </tbody>
      </table>
      <p>4.Atmospheric Science</p>
      <p>&nbsp </p>
      <table class="UEditorTable">
        <tbody>
        <tr class="firstRow">
          <td  style="word-break: break-all;" width="368" valign="top">
            <ul v-for="item in arrData4[0]" class=" list-paddingleft-2" style="list-style-type: disc;" >
              <li><span  style="color: #000000;">{{item}}</span></li>
            </ul></td>
          <td style="word-break: break-all;" width="368" valign="top">
            <ul v-for="item in arrData4[1]" class=" list-paddingleft-2" style="list-style-type: disc;" >
              <li><p><span  style="color: #000000;">{{item}}</span></p></li>
            </ul></td>
          <td style="word-break: break-all;" width="368" valign="top">
            <ul v-for="item in arrData4[2]" class=" list-paddingleft-2" style="list-style-type: disc;" >
              <li><p><span  style="color: #000000;">{{item}}</span></p></li>
            </ul>
          </td>
        </tr>
        </tbody>
      </table>
    </el-card>
  </div>
</template>
<script>

import BigTitle from "@/components/common/BigTitle.vue"
import CommonMain from "@/components/common/CommonContent.vue"
import Papers from "@/views/indexSon/mainPage/Papers";

export default {
  name: "CallForPapers",
  components: {Papers, BigTitle,  CommonMain},
  data() {
    return{
      arrData1:[['Network computing technology','Edge Computing','Cloud Computing' ,'Internet of Things'],
        ['Human-Computer Interaction','Virtual Reality','Augmented Reality','Mixed Reality'],
        ['Electronic Games','Artificial Intelligence','Block Chain','Digital Twins'],],
      arrData2:[['Artificial intelligence', 'Machine learning','Deep learning','Network security','Cloud computing','Big data'],
        ['Blockchain Technology','Data mining','Intelligent computing and intelligent software','Smart transportation and smart city','Digital media technology and system','Computer system'],
        ['Software engineering and information system','Computer graphics image processing and recognition','Computer simulation and virtual reality technology','Human computer interaction and user experience','Smart phones and mobile devices technology','Virtual reality','augmented reality and display applications'],],
      arrData3:[['Information economy','Education economy','Sector economy','Big data economy','Finance economy','E-commerce'],
        ['XE-banking','High-speed infrastructure','Digital content and green icts','Information and attention economics','E-collaboration and e-service','Pricing information goods'],
        ['Security and privacy','Open internet economy','Multilevel governance of the digital space','Future directions of the new economy','Information management and sustainability','Data analysis and modeling in economic management'],],
      arrData4:[['Dynamic Meteorology', 'Weather Science'],
        ['Weather Forecast', 'Climatology' ],
        ['Marine Meteorology','Atmospheric Phenomena'],],
      bigTitle: ['committee'],
      newList: [],
      new: {},
      resData: {
        current: 1,
        newsCategoryId:29 , //限定新闻类别
        size: 1,
        index:0
      },
      titleId: 4
    }
  }
}
</script>

<style scoped>
  .UEditorTable {
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    width: 100%;
    margin-bottom: 10px;
  }

  table td, table th {
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    padding: 10px 25px;
    word-break: break-word !important;
    word-wrap: break-word;
    white-space: pre-wrap;
  }

  table {
    border-collapse: collapse;
    display: table;
    box-sizing: border-box;
    text-indent: initial;
    border-spacing: 0px;
    border-color: grey;
  }
</style>
