<template>
  <div class="important-dates-box">
    <el-row>
      <common-content :newsCategoryId="newsCategoryId" :titleName="titleName"></common-content>
    </el-row>
  </div>
</template>
<script>

import BigTitle from "@/components/common/BigTitle"
import CommonContent from "@/components/common/CommonContent.vue";

export default {
  name: "ImportantDates",
  components: {CommonContent, BigTitle},
  data() {
    return{
      newsCategoryId: 43,
      titleName: 'Important Dates'
    }
  }
}
</script>

<style scoped>

</style>
