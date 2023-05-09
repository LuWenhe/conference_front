<template>
  <el-row class="common-content">
    <!-- 如果需要大标题 -->
    <el-row v-if="isNeed">
      <big-title :title="titleName"></big-title>
    </el-row>
    <el-card class="box-card">
      <slot class="box-card-top" name="top"></slot>

      <div v-if="htmlContent != null">
        <div class="content" v-html="htmlContent"></div>
      </div>

      <slot name="bottom"></slot>
    </el-card>
  </el-row>
</template>

<script>
import BigTitle from "@/components/common/BigTitle.vue"
import CommonImage from "@/components/common/CommonImage.vue"

import {getOneNewByNewCategoryId} from '@/network/news'

export default {
  name: "CommonContent",
  components: {CommonImage, BigTitle},
  props: {
    newsCategoryId: {
      type: Number,
      default: 0
    },
    titleName: {
      type: String,
      default: ''
    },
    isNeed: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      htmlContent: ''
    }
  },
  created() {
    this.getOneNew(this.newsCategoryId)
  },
  methods: {
    getOneNew(newCategoryId) {
      getOneNewByNewCategoryId(newCategoryId).then(res => {
        if (res.code === 200) {
          this.htmlContent = res.data.htmlContent
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
  .content {
    letter-spacing: 1px;
    line-height: 25px;
    white-space: pre-wrap;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    text-align: justify;
    font-size: 16px;
  }
</style>
