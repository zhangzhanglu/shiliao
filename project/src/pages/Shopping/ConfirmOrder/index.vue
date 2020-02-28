<template>
  <div>
    <div class="orderHeader">
      <div class="orderBack" @click="backClick">返回</div>
      <div class="orderTitle">确认订单</div>
    </div>
    <div class="OrderAddress">
      <div class="addrssImg">
        <img src="../../../../public/img/addressImg.png" alt />
      </div>
      <div class="addressInfo">
        <div class="name">
          <span>姓名：张三</span>
          <span>18035813344</span>
        </div>
        <div class="address">地址：北京市海定区</div>
      </div>
      <div class="addAddress">></div>
    </div>
    <div class="OrderContent">
        <div class="shopInfo">
            <div class="shopImg">
                <img src="../../../../public/img/shopping.jpg" alt="">
            </div>
            <div class="shopIntroduce">
                <div class="shopTitle"> 东北有机红谷黄小米</div>
                <div class="shopDepict">东北有机红谷黄小米东北有机红谷黄小米</div>
            </div>
            <div class="shopPrice">
                <p>￥45.00</p>
                <p class="shopNum">×1</p>
            </div>
        </div>
        <div class="peisong">
            <p>派送方式</p>
            <div class="psadvice">
                <p>免运费</p>
                <p>快递发货</p>
            </div>
        </div>
        <div class="message">
            买家留言：<span>无</span>
        </div>
        <div class="totle">
            合计：<span>￥45.00</span>
        </div>
        <div class="shopMoney">
            商品金额：<span>￥45.00</span>
        </div>
        <div class="yunfei">
            运费：<span>￥00.00</span>
        </div>
    </div>
    <div class="orderBottom">
        <div class="allPrice">
            合计：<span>￥45.00</span>
        </div>
        <div class="allBtn">去支付</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmOrder",
  methods: {
    backClick() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.orderHeader {
  width: 100%;
  height: 50px;
  background-color: #43bf92;
  display: flex;
  color: #fff;
  font-size: 18px;
  line-height: 50px;
}
.orderBack {
  flex: 1;
}
.orderTitle {
  flex: 6;
}
.OrderAddress {
  margin: 20px 0;
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid #aaa;
}
.addrssImg {
  flex: 1;
}
.addrssImg img{
    width: 20px;
    margin-top: 30px;
}
.addressInfo{
    flex: 5
}
.addAddress{
    flex: 1.5;
    font-size: 20px;
    line-height: 78px;
}
.OrderAddress .name {
  margin: 10px 0;
  font-size: 18px;
  overflow: hidden;
}
.OrderAddress .name span:first-child {
  float: left;
}
.OrderAddress .name span:last-child {
  float: right;
}
.address{
    font-size: 18px;
    text-align: left;
    margin: 10px 0;
}
.OrderContent{
    margin: 30px 10px 10px;
}
.shopInfo{
    overflow: hidden;
    margin-bottom: 30px;
}
.shopImg{
    float: left;
}
.shopIntroduce{
    float: left;
    overflow: hidden;
    width: 53%;
    text-align: left;
    margin-left: 10px;
}
.shopTitle{
    font-size: 18px;
}
.shopDepict{
    font-size: 14px;
    color: #aaa;
    margin-top: 10px;
}
.shopPrice{
    float: left;
}
.shopPrice p:first-child{
    font-size: 18px;
    color: #E45959;
}
.shopPrice p:last-child{
    margin-top: 10px;
    font-size: 14px;
    text-align: right;
}
.peisong{
    display: flex;
}
.peisong p{
    flex: 1;
    text-align: left;
    font-size: 18px;
    color: #aaa;
}
.peisong div{
    flex: 1;
}
.psadvice p{
    text-align: right;
}
.psadvice p:last-child{
    font-size: 16px; 
}
.message,.totle,.shopMoney,.yunfei{
    text-align: left;
    color: #aaa;
    font-size: 18px;
    margin: 20px 0;
}
.totle span{
    float: right;
    color: #E45959;
}
.shopMoney span,.yunfei span{
    float: right;
}
.orderBottom{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom:0;
    left: 0;
    display: flex;
    line-height: 50px;
    font-size: 18px;
}
.orderBottom .allPrice{
    flex: 4;
    text-align: right;
    color: #aaa;
    margin-right: 10px;
}
.orderBottom .allPrice span{
    color: #E45959;
}
.orderBottom .allBtn{
    flex: 1;
    color: #fff;
    background-color: #E45959;
}
</style>