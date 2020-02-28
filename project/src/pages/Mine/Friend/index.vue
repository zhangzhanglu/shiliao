<template>
    <div>
        <div class="headNav">
            <div class="headNav-left" @click="goback">{{back}}</div>
            <div class="headNav-center"> <span>{{title}}</span> </div>
            <div class="headNav-right"><router-link tag='span' to='/addFriends'>添加</router-link></div>
        </div>
        <div class="friend-content">
            <div class="item">
                <div class="pic">
                    <img src="../images/2.png" alt="">
                </div>
                <div class="name">爸爸</div>
                <div class="info" v-if="bflag" @click="totest('/didNotTest/baba')">尚未测试<span>></span></div>
                <div class="info" v-else @click="totest('/haveTest/baba')">已测试<span>></span></div>
            </div>
            <div class="item">
                <div class="pic">
                    <img src="../images/3.png" alt="">
                </div>
                <div class="name">妈妈</div>
                <div class="info" v-if="mflag" @click="totest('/didNotTest/mama')">尚未测试<span>></span></div>
                <div class="info" v-else @click="totest('/haveTest/mama')">已测试<span>></span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Friend',
        data(){
            return{
                back:'返回',
                title:'家人和朋友',
                bflag:true,
                mflag:true
            }
        },
        components:{
        },
        mounted(){
            if(localStorage.getItem('babaSimpleResults')||localStorage.getItem('babaSpecialtyResults')){
                this.bflag = false
            }
            if(localStorage.getItem('mamaSimpleResults')||localStorage.getItem('mamaSpecialtyResults')){
                this.mflag = false
            }
        },
        methods:{
            //返回事件
            goback(){
                this.$router.push({
                    path:'/mine',
                })
            },
            totest(path){
                this.$router.push({
                    path:path
                })
            }
        }
    }
</script>

<style scoped>
/* -------头部样式---------- */
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
/* -------------------------- */
.friend-content{
    background: #f1f1f1;
    height:617px;
}
.friend-content>.item{
    background: #fff;
    height: 80px;
    line-height: 80px;
    display: flex;
    border-bottom: 1px solid #f1f1f1;
}
.friend-content>.item .pic{
    flex: 1;
}
.friend-content>.item .pic img{
    margin-top: 10px;
    width: 60px;
    height: 60px;
}
.friend-content>.item .name{
    flex: 1;
    text-align: left
}
.friend-content>.item .info{
    flex: 1;
}
</style>