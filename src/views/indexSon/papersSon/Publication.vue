<template>
  <div class="publication-box">
    <el-row>
      <common-content :newsCategoryId="newsCategoryId" :titleName="titleName"></common-content>
    </el-row>
  </div>
</template>


<script>
import BigTitle from "@/components/common/BigTitle";
import CommonContent from "@/components/common/CommonContent.vue";

export default {
  name: "Publication",
  components: {CommonContent, BigTitle},
  data() {
    return{
      newsCategoryId: 50,
      titleName: 'Publication'
    }
  }
}
</script>

<style scoped>

</style>
