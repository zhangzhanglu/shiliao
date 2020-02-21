<template>
    <div class="content">
        <div class="title">
            <p>{{title}}</p>
        </div>
        <div class="cont">
            <div class="img">
                <img src="../images/home031.png" alt="">
            </div>
            <div class="introduce">
                <p>即使很多标榜“安全”的零食村上春树大额， 也存在很多隐患。</p>
                <p class="read"><span class="num">11111</span>次阅读</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Content",
        data(){
            return{

            }
        },
        props:{
            title: {
                type: String,
                default: "标题未定义"
            }
        }

    }
</script>

<style scoped>
.content{
    padding: 15px 10px 10px 10px;
    border-bottom: 1px solid #E8E8E8;
}
.content .title{
    font-size: 16px;
    text-align: left;
}
.content .cont{
    display: flex;
    margin-top:12px; 
}
.content .cont .img{
    flex: 3;
    width: 100%;
}
.content .cont img{
    width: 100%;
}
.content .cont .introduce{
    flex: 7;
    text-align: left;
    margin-left: 10px;
    font-size: 14px;
    color: #929292;
    position: relative;
}
.content .cont .introduce .num{
    color: #FF5656;
}
.content .cont .introduce .read{
    position: absolute;
    right: 0;
    bottom: 5px;
}

</style>