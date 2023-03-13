<template>
  <div class="attendees-box">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Attendees"
}
</script>

<style scoped>
 .attendees-box {
   margin: 0 auto;
   width: 80%;
 }
</style>
