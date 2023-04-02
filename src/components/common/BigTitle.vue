<template>
  <el-row class="title">
    <div class="color-line"></div>
    <span>{{title}}</span>
  </el-row>
</template>

<script>
export default {
  name: "BigTitle",
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .title {
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgba(7, 104, 172, 0.1);
  }

  .title span {
    font-size: 24px;
    font-weight: 500;
    margin-left: 20px;
    color: rgba(51, 51, 51, 1);
  }

  .title .color-line {
    width: 10px;
    height: 50px;
    background-color: rgba(31, 104, 172, 1);
    border-radius: 2px;
  }
</style>
