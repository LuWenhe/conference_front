<template>
  <div class="committee-box">
    <el-row>
      <common-content :newsCategoryId="newsCategoryId" :titleName="titleName"></common-content>
    </el-row>
  </div>
</template>

<script>
import CommonContent from "@/components/common/CommonContent.vue";

export default {
  name: "Committee",
  components: {CommonContent},
  data() {
    return {
      newsCategoryId: 47,
      titleName: 'Committee'
    }
  }
}
</script>

<style scoped>
  .committee-box {
    margin: 0 auto;
    width: 80%;
  }
</style>
