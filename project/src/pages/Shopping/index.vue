<template>
    <div class="ShoppingCart">
        <div class="shopHeader">
            <div class="closeShop" @click="closeShopClick">关闭</div>
            <div class="shopTitle">购物车</div>
            <div class="bianji">编辑</div>
        </div>
        <div class="ShopContent">
            <ul>
                <li>
                    <div class="shopBtn">
                        <div></div>
                    </div>
                    <div class="ContentImg">
                        <img src="../../../public/img/shopping.jpg" alt="">
                    </div>
                    <div class="shoppingContent">
                        <div class="shoppingTitle">东北有机黄小米</div>
                        <div class="shoppingPrice">￥45</div>
                    </div>
                    <div class="shoppingChange">
                        <div class="shoppingBianji">编辑</div>
                        <div class="shoppingnum">×1</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="shopjiesuan">
            <div class="shoptotal">
                <div class="shopAllActiveBtn"></div>
                <div class="shopAllActive">全选</div>
                <div class="total">合计：<span>￥0</span><span>不含运费</span></div>
            </div>
            <div class="account" @click="accountClick">结算(0)</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Shopping",
        methods:{
            // 关闭购物车
            closeShopClick(){
                this.$router.replace("/make");
            },
            // 结算点击事件
            accountClick(){
                this.$router.replace("/confirmOrder");
            }
        }
    }
</script>

<style scoped>
.ShoppingCart{
    background-color: #F1F1F1;
    height: 620px;
}
.shopHeader{
    width: 100%;
    height: 50px;
    background-color: #43bf92;
    display: flex;
    line-height: 50px;
    font-size: 18px;
    color: #fff;
}
.closeShop{
    flex: 1;
}
.shopTitle{
    flex:5;
}
.bianji{
    flex: 1;
}
.ShopContent{
    margin-top: 30px;
}
.ShopContent ul{
    overflow: hidden;
    margin-bottom: 110px;
}
.ShopContent ul li{
    background-color: #fff;
    margin-bottom: 10px;
    display: flex;
}
.shopBtn{
    flex: 1;
}
.shopBtn div{
    width: 15px;
    height: 15px;
    border: 1px solid #ccc;
    border-radius: 50%;
    margin-top: 40px;
    margin-left: 9px;
}
.ContentImg{
    flex: 3;
}
.shoppingContent{
    flex: 6
}
.shoppingTitle{
    font-size: 18px;
    text-align: left;
}
.shoppingPrice{
    font-size: 18px;
    color: #E45959;
    text-align: left;
    margin-top: 43px;
}
.shoppingChange{
    flex: 1;
    font-size: 14px;
}
.shoppingnum{
    margin-top: 55px;
}
.shopjiesuan{
    width: 100%;
    height: 50px;
    background-color: #fff;
    position: fixed;
    bottom: 50px;
    left: 0;
    display: flex;
}
.shoptotal{
    flex: 5;
}
.shopAllActiveBtn{
    float: left;
    width: 15px;
    height: 15px;
    border: 1px solid #ccc;
    border-radius: 50%;
    margin-top: 16px;
    margin-left: 9px;
}
.shopAllActive{
    float: left;
    font-size: 18px;
    line-height: 50px;
    margin-left: 10px;
}
.total{
    float: right;
    font-size: 18px;
    line-height: 50px;
}
.total span{
    font-size: 12px;
}
.total span:first-child{
    color: #43bf92;
    margin-bottom: 10px;
}
.total span:last-child{
    color: #ccc;
    margin-right: 10px;
}
.account{
    flex: 2;
    background-color: #43bf92;
    font-size: 18px;
    color: #fff;
    line-height: 50px;
}
</style>