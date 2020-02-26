<template>
    <div class="food-input">
        <input type="text" placeholder="搜索食谱">
        <i class="iconfont icon-fangdajing"></i>
    </div>
</template>

<script>
    export default {
        name:"FoodInput"
    }
</script>

<style scoped>
.food-input{
    height: 30px;
    margin: 10px;
    border-radius: 20px;
    background: rgb(231,231,231);
    line-height: 30px;
    display: flex;
}
.food-input input{
    flex: 9;
    background: rgb(231,231,231);
    text-align: center;
    border-radius: 20px;
    font-size: 18px;
}
.food-input i{
    flex: 1;
}
</style>