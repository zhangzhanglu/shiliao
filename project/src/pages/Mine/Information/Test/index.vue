<template>
    <div>
         <div class="headNav">
            <div class="headNav-left" @click="goback">返回</div>
            <div class="headNav-center"> <span>{{title}}</span> </div>
            <div class="headNav-right"></div>
        </div>
        <div class="test-content">
            <h3 class="title">测试说明</h3>
            <div class="content">本测试分为简易版和专业版，简易版可以快速测试你的身体状况，专业版可以更专业的了解你的身体状况。</div>
            <router-link :to="'/simpleTest/'+username"><div class="simple">简易版</div></router-link>
            <router-link :to="'/specialtyTest/'+username"><div class="specialty">专业版</div></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Test',
        data(){
            return{
                title:'测试',
                username:''
            }
        },
        components:{
        },
        mounted(){
            // console.log(window.history)
            if(this.$route.params.username == 'me'){
                this.username = 'me'
            }
            else if(this.$route.params.username == 'baba'){
                this.username = 'baba'
            }
            else if(this.$route.params.username == 'mama'){
                this.username = 'mama'
            }
        },
        methods:{
            //返回事件
            goback(){
                //返回健康信息
                // window.history.back()
                if(this.$route.params.username == "me"){
                    this.$router.push({
                        path:'/information',
                    })
                }
                else if(this.$route.params.username == "baba"){
                    this.$router.push({
                        path:'/didNotTest/baba',
                    })
                }
                else if(this.$route.params.username == "mama"){
                    this.$router.push({
                        path:'/didNotTest/mama',
                    })
                }
                
            },
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
.test-content{
    padding: 30px;
    position: relative;
}
.test-content>.title{
    margin: 20px 0 ;
}
.simple,.specialty{
    width: 150px;
    height: 46px;
    background: #4ebf92;
    color: #fff;
    line-height: 46px;
    border-radius: 10px;
    position: absolute;
}
.simple{
top: 300px;
left: 15px;
}
.specialty{
    top: 300px;
    right:15px   ;
}
</style>