<template>
    <div class="headerNav">
        <div class="header">
            <div class="back" v-on:click="back"><span> <img src="../../images/back.png" alt=""> </span>返回</div>
            <div class="title">{{title}}</div>
            <div class="share"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderNav",
        data(){
            return{

            }
        },
        props: {
            title: {
                type: String,
                default: ""
            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
        }
    }
</script>

<style scoped>
.headerNav{
   width: 100%;
   height: 44px;
   background: transparent;
}
.header{
    display: flex;
    height: 44px;
    line-height: 44px;
    background: #46BF92;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}
.header .back{
    flex: 2;
}
.header .back img{
    width: 10px;
    height: 20px;
    position: relative;
    top: 4px;
    left: -3px;
}
.header .title{
    flex: 6;
}
.header .share{
    flex: 2;
}
</style>