<template>
  <div class="invited-speakers-box">
    <el-row>
      <common-content :newsCategoryId="newsCategoryId" :titleName="titleName"></common-content>
    </el-row>
  </div>
</template>
<script>

import BigTitle from "@/components/common/BigTitle"
import CommonContent from "@/components/common/CommonContent.vue";

export default {
  name: "InvitedSpeakers",
  components: {CommonContent, BigTitle},
  data() {
    return{
      newsCategoryId: 28,
      titleName: 'Invited Speakers'
    }
  }
}
</script>

<style scoped>

</style>
