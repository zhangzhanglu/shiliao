<template>
    <div class="headNav">
            <div class="headNav-left" @click="goback">{{back}}</div>
            <div class="headNav-center"> <span>{{title}}</span> </div>
            <div class="headNav-right"></div>
    </div>
</template>

<script>
    export default {
        name:'HeadNav',
        props:{
            title:{
                type:String,
                default:'这是标题'
            },
            back:{
                type:String,
                default:''
            }
        },
        methods:{
            goback(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
.headNav{
    width: 100%;
    height: 50px;
    background: #43BF92;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    color: #fff;  
    display: flex;  
}
.headNav-left,.headNav-right{
    width: 90px;
}
.headNav-center{
    flex: 1;
}
</style>