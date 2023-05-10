<template>
  <el-row class="common-image">
    <!-- 显示图片 -->
    <el-row class="image">
      <img :src="imageObj.imageUrl" :style="imageStyle" alt="">
    </el-row>
    <!-- 如果只有图片,则不显示标题和链接 -->
    <el-row v-if="!isOnlyImage" class="image-title">
      <a :href="imageObj.imageHref">{{imageObj.imageTitle}}</a>
    </el-row>
    <!-- 如果只有图片,则不显示评论 -->
    <el-row v-if="!isOnlyImage" class="image-comment">
      <span>{{imageObj.imageComment}}</span>
    </el-row>
  </el-row>
</template>

<script>
import BigTitle from "@/components/common/BigTitle.vue"

export default {
  name: 'CommonImage',
  components: {BigTitle},
  props: {
    imageObj: {
      type: Object,
      default() {
        return {}
      }
    },
    isOnlyImage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    imageStyle() {
      // 根据是否只有图片来设置图片大小
      return this.isOnlyImage ?
        'width: 150px; height: 150px' : 'width: 130px; height: 182px'
    }
  }
}
</script>

<style scoped>
  .common-image {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-right: 10px;
  }

  .image-title {
    margin-top: 10px;
    height: 45px;
    width: 180px;
  }

  .image-comment {
    margin-top: 5px;
    height: 20px;
  }
</style>
