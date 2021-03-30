<template>
  <div class="index">
      <nav-header 
        :navList="navList" 
        :curInx="curInx">
      </nav-header>
      首页---
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader'
export default {
    name: 'indexView',
    components: {
        NavHeader
    },
    data () {
        return {
            navList:['首页', '歌手', '歌单', '排行榜', 'MV'],
            curInx: 0
        }
    }


}
</script>

<style>

</style>