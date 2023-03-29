<template>
  <div class="box">
    <div class="header">
      <h2>{{ title }}</h2>
      <p>发布日期：{{ releaseTime }} 点击量：[ {{ hits }} ]</p>
    </div>
    <hr />
    <div v-html="htmlContent" class="ql-editor"></div>
  </div>
</template>
<script>
import { getOneNew } from '@/Api/api'
export default {
  name: 'noticeMessage',
  data() {
    return {
      htmlContent: '',
      hits: '',
      releaseTime: '',
      title: ''
    }
  },
  created() {
    this.getOneNew()
  },
  methods: {
    getOneNew() {
      const data = this.$route.query.id

      getOneNew(data).then(res => {
        console.log(res)
        this.htmlContent = res.data.htmlContent
        this.hits = res.data.hits
        this.releaseTime = res.data.releaseTime
        this.title = res.data.title
      })
    }
  }
}
</script>
<style>
  .box {
    width: 1200px;
    margin: 0 auto;
  }

  .header h2 {
    color: rgb(3, 73, 144);
    text-align: center;
  }

  .header p {
    background-color: rgb(246, 246, 246);
    text-align: center;
    height: 35px;
    line-height: 35px;
  }

  .ql-editor {
    padding: 12px 0px !important;
  }

  .ql-editor p {
    letter-spacing: 1px;
    line-height: 25px;
  }
</style>
