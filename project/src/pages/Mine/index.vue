<template>
    <div>
        <div class="head">
            <div class="head-left"></div>
            <div class="head-center"> <span>我</span> </div>
            <div class="head-right"></div>
        </div>
        <div class="content">
            <div class="content-info"></div>
            <div class="content-message">我的信息</div>
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
    background: #000;
}
.content-info{
    height: 90px;
    margin-top: 20px;
    background: #990;
}
.content-friend,.content-message{
    height: 40px;
    background: #fff;
    margin-top: 10px;
    line-height: 40px;
}
.content-other{
     margin-top: 10px;
     background: #fff;
}
.content-other p{
    height: 40px;
    border-bottom: 1px solid #f1f1f1;
    line-height: 40px;
}
</style>