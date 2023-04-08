<template>
  <el-row class="common-content">
    <el-row v-if="isNeed">
      <big-title :title="titleName"></big-title>
    </el-row>
    <el-card class="box-card">
      <slot name="top"></slot>

      <div v-if="htmlContent != null">
        <div class="content" v-html="this.htmlContent"></div>
      </div>

      <slot name="bottom"></slot>
    </el-card>
  </el-row>
</template>

<script>
import BigTitle from "@/components/common/BigTitle.vue"
import {getOneNewByNewCategoryId} from '@/Api/api'

export default {
  name: "CommonContent",
  components: {BigTitle},
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
