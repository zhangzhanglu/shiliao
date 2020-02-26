<template>
    <div>
        <!-- 顶部导航 -->
        <Header title="食疗坊" />
        <!-- 搜索框 -->
        <FoodInput />
        <!-- 选项 -->
        <FoodSelect />
        <!-- 菜单 -->
        <FoodMenu />
    </div>
</template>

<script>
import Header from '../../components/Header'
import FoodInput from './FoodInput'
import FoodSelect from './FoodSelect'
import FoodMenu from './FoodMenu'
    export default {
        name:"Food",
        components:{
            Header,
            FoodInput,
            FoodSelect,
            FoodMenu
        }
    }
</script>

<style scoped>

</style>