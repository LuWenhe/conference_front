<template>
  <div class="papers-box">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Papers",
}
</script>

<style scoped>
  .papers-box {
    margin: 0 auto;
    width: 80%;
  }
</style>
