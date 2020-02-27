<template>
    <div>
        <div class="head">
            <HeadNav :title="title"/>
        </div>
        <div class="content">
            <div class="content-info">
                <div class="image">
                    <img src="./images/1.png" alt="">
                </div>
                <div class="name"><span>小明</span></div>
                <div class="other"> <router-link to='/information' ><span>健康信息</span></router-link> </div>
            </div>
            <router-link to='/message'><div class="content-message">消息</div></router-link>
           <router-link to='friend'><div class="content-friend">家人和朋友</div></router-link>
            <div class="content-other">
                <router-link to='/minecollect'><p>我的收藏</p></router-link>
                <router-link to='/mineorder'><p>我的订单</p></router-link>
                <router-link to='/account'><p>账号和其他</p></router-link>
                <router-link to='online'><p>在线客服</p></router-link>
                <router-link to='hellp'><p>帮助和反馈</p></router-link>
                <router-link to='/setting'><p>设置</p></router-link>
            </div>
        </div>
    </div>
    
</template>

<script>
import HeadNav from './HeadNav'
    export default {
        name:"Mine",
        data(){
            return{
                title:'我'
            }
        },
        components:{
            HeadNav
        }
    }
</script>

<style scoped>

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