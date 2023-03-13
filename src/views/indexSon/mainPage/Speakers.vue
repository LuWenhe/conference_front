<template>
  <div class="speakers-box">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "Speakers"
}
</script>

<style scoped>
  .speakers-box {
    margin: 0 auto;
    width: 80%;
  }
</style>
