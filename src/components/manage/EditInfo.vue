<template>
  <div class="edit-info-box">
    <el-row><h3 style="margin-top: 0">{{ $route.query.title }}</h3></el-row>
    新闻标题：<el-input v-model="title" placeholder="请输入发布标题"></el-input><br /><br />
    发布日期：<el-date-picker format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" v-model="releaseTime"
                             placeholder="请选择信息发布日期"></el-date-picker><br /><br />
    新闻内容：
    <mavon-editor ref="md" class="editor" v-model="mdContent" @imgAdd="addImage"
                  @imgDelete="deleteImage" @change="changeData">
      <button slot="left-toolbar-before" type="button" aria-hidden="true" title="颜色"
              class="op-icon" style="position: relative">
        <i class="el-icon-s-open"/>
        <el-color-picker class="color-picker" v-model="color1" @change="activeChange"></el-color-picker>
      </button>
    </mavon-editor>
    <el-row style="margin-top:50px;">
      <el-button type="success" @click="editSubmit">更新</el-button>
    </el-row>
  </div>
</template>

<script>
import {addImg, getOneNew, update} from "@/Api/api"
export default {
  name: "EditInfo",
  data() {
    return {
      title: '',
      releaseTime: '',
      mdContent: '',
      htmlContent: '',
      newsCategoryId: 0,
      newId: 0,
      color1: ''
    }
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
    deleteImage(pos, file) {

    },
    changeData(value, render) {
      // 需要删除文字源代码中的<br />
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
    // 获取需要修改的新闻的信息
    getNewInfo(id) {
      getOneNew(id).then(res => {
        if (res.code === 200) {
          this.title = res.data.title
          this.releaseTime = res.data.releaseTime
          this.mdContent = res.data.mdContent
          this.htmlContent = res.data.htmlContent
        }
      })
    },
    // 更新发布
    editSubmit() {
      let newData = {
        id: this.newId,
        mdContent: this.mdContent,
        htmlContent: this.htmlContent,
        releaseTime: this.releaseTime,
        title: this.title
      }

      update(JSON.stringify(newData)).then(res => {
        if (res.code !== 200) {
          return this.$message.error('更新信息失败，请重试！')
        } else {
          this.$message.success('更新信息成功！')
          this.$router.go(-1)
        }
      })
    },
  },
  created() {
    this.newsCategoryId = this.$route.query.newCategoryId
    this.newId = this.$route.query.newId
    this.getNewInfo(this.newId)
  }
}
</script>

<style scoped>
  .edit-info-box {
    width: 1200px;
    margin: 0 auto;
  }

  .editor {
    height: 550px;
  }

  .color-picker {
    opacity: 0;
    position: absolute; top: 0; left: 0;
  }
</style>
