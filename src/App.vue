<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">首页</router-link> |
    </div>
    <router-view/> -->
    <index-view/>

  </div>
</template>
<script>
import indexView from '@/views/index.vue'

export default {
  components: {
    indexView
  }
  
}
</script>

<style lang="scss">

</style>
