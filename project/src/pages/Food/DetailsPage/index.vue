<template>
<div>
    <div v-for="(item,index) in fooddesc" :key="index" >
        <!-- 返回与分享 -->
        <div class="anniu" @click="goBack" >
            <span><i class="iconfont icon-arrow-right1"> 返回</i></span>
            <span><i class="iconfont icon-fenxiang"></i></span>
        </div>
        <!-- 图片标题 -->
        <div> <img class="banner" src="../image/images/images/商品详情页_02.gif" alt="111">
            <div class="title">
                <h3> {{item.title}} </h3>
                <h3>￥{{item.price}} </h3>
            </div>
        </div>
        <!-- 商品详情 -->
        <div>
            <h4> {{item.desc}} </h4>
            <div> <img class="banner" src="../image/images/images/商品详情页_04.gif" alt="111"> </div>
            <h3> {{item.trait}} </h3>
            <!-- 产品特点 -->
            <div>
                <ul v-for="(ele,ind) in item.traitarr" :key="ind" class="traitarr">
                    <li>
                        <h3> {{ele.title}} </h3>
                        <img class="banner1" src="../image/images/images/商品详情页_07.gif" alt="111">
                        <p> {{ele.desc}} </p>
                    </li>
                </ul>
            </div>
            <!-- 食材 -->
            <div>
                <h3> {{item.ingredient}} </h3>
                <img class="banner1" src="../image/images/images/商品详情页_20.gif" alt="111">
                <img class="banner1" src="../image/images/images/商品详情页_17.gif" alt="111">
                <img class="banner1" src="../image/images/images/商品详情页_23.gif" alt="111">
            </div>
            <!-- 工艺 -->
            <div>
                <h3> {{item.technology}} </h3>
                <div class="technology">
                    <div class="technology-left">
                        <img class="banner1" src="../image/images/images/商品详情页_32.gif" alt="111">
                        <p> {{item.technologydesc1}} </p>
                    </div>
                    <div class="technology-right">
                         <img class="banner1" src="../image/images/images/商品详情页_29.gif" alt="111">
                        <p> {{item.technologydesc2}} </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 加入购物车 -->
        <div>
            <h4 class="shoppingcar">加入购物车</h4>
            <ul>
                <li v-for="(ele,ind) in item.car" :key="ind">
                    <span> {{ele.title}} </span>
                    <img src="../image/images/images/商品详情页_37.gif" alt="">
                    <i class="iconfont icon-jiaru car-icon"></i>
                </li>
            </ul>
            <i class="iconfont icon-gouwuche car-icon"></i>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name:"DetailsPage",
        data() {
            return {
                fooddesc: []
            }
        },
        props:{
            id:{
                type:[Number,String],
                default:1
            }
        },
        methods:{
            // 返回上一个页面
            goBack(e){
                this.$router.go(-1);
            }
        },
        mounted(){
            this.$api.getfooddesc({id:this.id})
            .then(res=>{
                console.log(res.data);
                this.fooddesc = res.data
            })
        },
    }
</script>

<style scoped>
/* 返回分享 */
.anniu{
    height: 10px;
    padding: 10px;
    background: #0f0;
    line-height: 10px;
    color: #fff;
}
.anniu span:first-child{
    float: left;
}
.anniu span:last-child{
    float: right;
}
/* 标题价格 */
.title{
    height: 20px;
    padding: 10px;
}
.title h3:first-child{
    float: left;
}
.title h3:last-child{
    float: right;
    color: #f00;
}
/* 产品特点 */
.traitarr p{
    padding: 10px;
}
/* 图片大小 */
.banner{
    width: 100%;
    height: 100%;
}
.banner1{
    width: 30%;
    height: 30%;
}
/* 购物车 */
.shoppingcar{
    text-align: left;
}
.car-icon{
    color: #0f0;
    font-size: 30px;
}
</style>