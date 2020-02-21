<template>
    <div>
        <div class="head">
            <div class="head-left"></div>
            <div class="head-center"> <span>我</span> </div>
            <div class="head-right"></div>
        </div>
        <div class="content">
            <div class="content-info">
                <div class="image">
                    <img src="./images/1.png" alt="">
                </div>
                <div class="name"><span>小明</span></div>
                <div class="other"> <router-link to='/' ><span>健康信息</span></router-link> </div>
            </div>
            <div class="content-message">消息</div>
            <div class="content-friend">家人和朋友</div>
            <div class="content-other">
                <p>我的收藏</p>
                <p>我的订单</p>
                <p>账号和其他</p>
                <p>在线客服</p>
                <p>帮助和反馈</p>
                <p>设置</p>
            </div>
        </div>
    </div>
    
</template>

<script>

    export default {
        name:"Mine"
    }
</script>

<style scoped>
.head{
    width: 100%;
    height: 50px;
    background: #43BF92;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    color: #fff;    
}
.content{
    background: #f1f1f1;
    overflow: hidden;
    font-size: 20px;
}
.content-info{
    height: 90px;
    margin-top: 20px;
    background: #fff;
    display: flex;
    text-align: center;
    line-height: 90px;
}
.content-info .image{
    width: 80px;
    height: 80px;
    margin-top: 5px;
}
.content-info .image img{
    width: 80px;
    height: 80px;
}
.content-info .name{
    flex: 1;
    text-align: left;
}
.content-info .other{
    width: 120px;
}
.content-friend,.content-message{
    height: 40px;
    background: #fff;
    margin-top: 10px;
    line-height: 40px;
    padding-left:50px; 
     text-align: left;
}
.content-other{
    margin-top: 10px;
    background: #fff;
    padding-left:50px; 
    text-align: left;
}
.content-other p{
    height: 40px;
    border-bottom: 1px solid #f1f1f1;
    line-height: 40px;
}
</style>