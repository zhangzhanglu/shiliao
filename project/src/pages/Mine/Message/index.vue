<template>
    <div>
        <div class="head">
            <HeadNav back='返回' :title="title"/>
        </div>
        <div class="message-content">
            <div class="item">
                <div class="pic">
                    <img src="../images/4.png" alt="">
                </div>
                <div class="info">
                    <p class="name">放肆演绎青春</p>
                    <p class="msg">【图片】</p>              
                </div>
                <div class="time"><span>2016年11月22日</span></div>
            </div>
        </div>
    </div>
</template>

<script>
import HeadNav from "../HeadNav"
    export default {
        name:'Message',
        data(){
            return{
                title:'收到的消息'
            }
        },
        components:{
            HeadNav
        }
    }
</script>

<style scoped>
.message-content{
    background: #f1f1f1;
}
.item {
    background: #fff;
    padding: 10px;
    display: flex;
    height: 80px;
    border: 1px solid #f1f1f1;
}
.item .pic{
    width: 80px;
}
.item .pic img{
    width: 80px;
    height: 80px;
}
.item .info{
    flex: 1;
    padding-left: 10px;
    text-align: left;
}
.item .info .name{
    font-size: 20px;
}
.item .info .msg{
    font-size: 14px;
    color: #666;
    height: 4px;
    line-height: 40px;
}
.item .time{
    width: 110px;
    font-size: 14px;
    color: #666;
}
</style>