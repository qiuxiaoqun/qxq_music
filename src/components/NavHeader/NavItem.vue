<template>
  <div class="nav-item">
      <div :class="['nav-item-name',{'nav-current': curInx === index } ]">
          {{item}}
      </div>
  </div>
</template>

<script>
export default {
    name:'NavItem',
    props: {
        item: String,
        index: Number,
        curInx: Number
    }

}
</script>

<style lang="scss" scoped>
.nav-item{
    width: 80px ;
    height: 45px ;
    line-height: 45px ;
    text-align: center;
    &-name{
        font-size: 16px;
    }
    &>.nav-current{
        font-size: 20px;
        font-weight: bold;
        color: darkorange;

    }

}


</style>