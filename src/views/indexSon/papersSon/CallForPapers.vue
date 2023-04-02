<template>
  <div class="callForPapers-box">
    <common-content :newsCategoryId="newsCategoryId" :titleName="titleName">
      <template v-slot:bottom>
        <p>1.Metaverse</p>
        <table class="UEditorTable">
          <tbody>
          <tr class="firstRow">
            <td style="width: 30%">
              <ul v-for="item in arrData1[0]">
                <li>{{item}}</li>
              </ul>
            </td>
            <td style="width: 30%" >
              <ul v-for="item in arrData1[1]">
                <li>{{item}}</li>
              </ul>
            </td>
            <td style="width: 30%" >
              <ul v-for="item in arrData1[2]">
                <li>{{item}}</li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
        <p>2.Data Science</p>
        <table class="UEditorTable">
          <tbody>
          <tr class="firstRow">
            <td  style="width: 30%">
              <ul v-for="item in arrData2[0]">
                <li>{{item}}</li>
              </ul>
            </td>
            <td style="width: 30%">
              <ul v-for="item in arrData2[1]">
                <li>{{item}}</li>
              </ul></td>
            <td style="width: 30%">
              <ul v-for="item in arrData2[2]">
                <li>{{item}}</li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
        <p>3.Digital Economy</p>
        <table class="UEditorTable">
          <tbody>
          <tr class="firstRow">
            <td style="width: 30%">
              <ul v-for="item in arrData3[0]">
                <li>{{item}}</li>
              </ul>
            </td>
            <td style="width: 30%">
              <ul v-for="item in arrData3[1]">
                <li>{{item}}</li>
              </ul>
            </td>
            <td style="width: 30%">
              <ul v-for="item in arrData3[2]">
                <li>{{item}}</li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
        <p>4.Atmospheric Science</p>
        <table class="UEditorTable">
          <tbody>
          <tr class="firstRow">
            <td style="width: 30%">
              <ul v-for="item in arrData4[0]">
                <li>{{item}}</li>
              </ul></td>
            <td style="width: 30%">
              <ul v-for="item in arrData4[1]">
                <li>{{item}}</li>
              </ul></td>
            <td style="width: 30%">
              <ul v-for="item in arrData4[2]">
                <li>{{item}}</li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </template>
    </common-content>
  </div>
</template>
<script>

import BigTitle from "@/components/common/BigTitle.vue"
import Papers from "@/views/indexSon/mainPage/Papers"
import CommonContent from "@/components/common/CommonContent.vue";

export default {
  name: "CallForPapers",
  components: {CommonContent, Papers, BigTitle},
  data() {
    return{
      arrData1:[
        ['Network computing technology','Edge Computing','Cloud Computing' ,'Internet of Things'],
        ['Human-Computer Interaction','Virtual Reality','Augmented Reality','Mixed Reality'],
        ['Electronic Games','Artificial Intelligence','Block Chain','Digital Twins']
      ],
      arrData2: [
        ['Artificial intelligence', 'Machine learning', 'Deep learning', 'Network security', 'Cloud computing', 'Big data'],
        ['Blockchain Technology', 'Data mining', 'Intelligent computing and intelligent software', 'Smart transportation and smart city',
          'Digital media technology and system', 'Computer system'],
        ['Software engineering and information system', 'Computer graphics image processing and recognition',
          'Computer simulation and virtual reality technology', 'Human computer interaction and user experience',
          'Smart phones and mobile devices technology', 'Virtual reality', 'augmented reality and display applications']
      ],
      arrData3:[
        ['Information economy','Education economy','Sector economy','Big data economy','Finance economy','E-commerce'],
        ['XE-banking','High-speed infrastructure','Digital content and green icts','Information and attention economics',
          'E-collaboration and e-service','Pricing information goods'],
        ['Security and privacy','Open internet economy','Multilevel governance of the digital space','Future directions of the new economy',
          'Information management and sustainability','Data analysis and modeling in economic management']
      ],
      arrData4:[
        ['Dynamic Meteorology', 'Weather Science'],
        ['Weather Forecast', 'Climatology' ],
        ['Marine Meteorology','Atmospheric Phenomena'],],
      newsCategoryId: 29,
      titleName: 'Call For Papers'
    }
  }
}
</script>

<style scoped>
  table td, table th {
    border-right: 1px solid #ccc;
    padding: 10px 25px;
  }

  table {
    border-collapse: collapse;
    display: table;
    box-sizing: border-box;
    text-indent: initial;
    border-spacing: 0;
    border: 1px solid #ccc;
    width: 100%;
    margin-bottom: 20px;
  }
</style>
