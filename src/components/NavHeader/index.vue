<template>
    <div class="nav-header">
       <nav-item v-for="item,i in navList" 
            :key="i" 
            :item="item"
            :index="i"
            :curInx="curInx">
        </nav-item>
    </div>
</template>

<script>
import NavItem from './NavItem'
export default {
    name: 'NavHeader',
    components: {
        NavItem
    },
    props: {
        navList:Array,
        curInx:Number
    },
    data(){
        return {
           
        }
    }

}
</script>

<style lang="scss" scoped>
.nav-header {
    height: 45px ;
    display: flex;
    background-color: darksalmon;
}

</style>