<template>
  <div class="callForPapers-box">
    <el-row>
      <common-content :newsCategoryId="newsCategoryId" :titleName="titleName"></common-content>
    </el-row>
  </div>
</template>
<script>

import CommonContent from "@/components/common/CommonContent.vue"
export default {
  name: "LatestNews",
  components: {CommonContent},
  data() {
    return {
      newsCategoryId: 37,
      titleName: 'Latest News'
    }
  }
}
</script>

<style scoped>

</style>
