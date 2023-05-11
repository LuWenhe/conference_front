<template>
  <div class="keynote-speakers-box">
    <el-row>
      <common-content :newsCategoryId="newsCategoryId" :titleName="titleName"></common-content>
    </el-row>
  </div>
</template>

<script>
import CommonContent from "@/components/common/CommonContent.vue"
export default {
  name: "KeynoteSpeakers",
  components: {CommonContent},
  data() {
    return{
      newsCategoryId: 27,
      titleName: 'Keynote Speakers'
    }
  }
}
</script>

<style scoped>

</style>
