<template>
  <div class="edit-box">
    <el-row><h3 style="margin-top: 0px">{{ $route.query.title }}</h3></el-row>
    新闻标题：<el-input v-model="title" placeholder="请输入新闻标题"></el-input><br /><br />
    发布日期：<el-date-picker format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" v-model="releaseTime"
                             placeholder="请选择新闻发布日期"></el-date-picker><br /><br />
    新闻内容：
    <mavon-editor
      ref="md"
      class="editor"
      v-model="mdContent"
      @imgAdd="addImage"
      @imgDelete="deleteImage"
      @change="changeData">
      <button slot="left-toolbar-before"
              type="button"
              aria-hidden="true"
              title="颜色"
              class="op-icon"
              style="position: relative">
        <i class="el-icon-s-open"/>
        <el-color-picker
          v-model="color1"
          style="opacity: 0; position: absolute; top: 0; left: 0;"
          @change="activeChange">
        </el-color-picker>
      </button>
    </mavon-editor>
    <el-row style="margin-top:50px;">
      <el-button type="success" @click="submit">发布</el-button>
    </el-row>
  </div>
</template>

<script>
import {addContent, addImg} from "@/Api/api";

export default {
  name: "EditInfo",
  data() {
    return {
      title: '', // 标题内容
      releaseTime: '', // 发布日期
      mdContent: '', // 新闻内容
      htmlContent: '',
      newsCategoryId: 45,
      color1: ''
    }
  },
  created() {
    this.newsCategoryId = this.$route.query.id
  },
  methods: {
    addImage(pos, file) {
      let formData = new FormData();
      formData.append('image', file);

      // console.log(999)
      addImg(formData).then(res => {
        if (res.code === 200) {
          this.$refs.md.$img2Url(pos, res.data)
        }
      })
    },
    deleteImage() {

    },
    changeData(value, render) {
      this.htmlContent = render.replace(/<br \/>/g, "")
    },
    activeChange(e) {
      const insert_text = {
        prefix: `<font color=${e}>`,
        subfix: '</font>',
        str: ''
      }

      const $vm = this.$refs.md
      $vm.insertText($vm.getTextareaDom(), insert_text)
    },
    submit() {
      let newData = {
        newsCategoryId: this.newsCategoryId,
        content: this.htmlContent,
        releaseTime: this.releaseTime,
        title: this.title
      }

      console.log(newData)

      addContent(newData).then(res => {
        if (res.code !== 200) {
          return this.$message.error('发布新闻失败，请重试！')
        } else {
          this.$message.success('新闻发布成功！')
          this.$router.go(-1)
        }
      })
    }
  }
}
</script>

<style scoped>
.edit-box {
  width: 1200px;
  margin: 0 auto;
}

.editor {
  height: 550px;
}
</style>
