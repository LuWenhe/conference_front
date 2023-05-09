<template>
  <div class="contact-box">
    <el-row>
      <common-content :newsCategoryId="newsCategoryId" :titleName="titleName"></common-content>
    </el-row>
  </div>
</template>

<script>
import CommonContent from "@/components/common/CommonContent.vue"

export default {
  name: "Contact",
  components: {CommonContent},
  data() {
    return {
      newsCategoryId: 41,
      titleName: 'Contact'
    }
  }
}
</script>

<style scoped>
  .contact-box {
    margin: 0 auto;
    width: 80%;
  }
</style>
