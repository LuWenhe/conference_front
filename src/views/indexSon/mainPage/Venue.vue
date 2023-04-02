<template>
  <div class="venue-box">
    <el-row>
      <common-content :newsCategoryId="newsCategoryId" :titleName="titleName"></common-content>
    </el-row>
  </div>
</template>

<script>
import CommonContent from "@/components/common/CommonContent.vue";

export default {
  name: "Venue",
  components: {CommonContent},
  data() {
    return {
      newsCategoryId: 39,
      titleName: 'Conference Venue'
    }
  }
}
</script>

<style scoped>
  .venue-box {
    margin: 0 auto;
    width: 80%;
  }
</style>
