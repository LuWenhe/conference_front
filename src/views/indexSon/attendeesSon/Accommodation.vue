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
  name: "Accommodation",
  components: {CommonContent},
  data() {
    return{
      newsCategoryId: 35,
      titleName: this.$options.name
    }
  }
}
</script>

<style scoped>

</style>
