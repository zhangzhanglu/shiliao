<template>
    <div>
        <div class="headNav">
            <div class="headNav-left" @click="goback">返回</div>
            <div class="headNav-center"> <span>{{title}}</span> </div>
            <div class="headNav-right"></div>
        </div>
        <div class="didNotTest-content">
            <div class="pic">
                <img src="../../images/2.png" alt="">
            </div>
            <div class="test">
                <i>i</i><span v-if="flag">尚未测试</span><span v-else>已测试</span>
                <router-link :to="'/test/'+username"><span class="tab">></span></router-link>
            </div>
            <div class="test">
                <i>i</i><span>慢性病</span><router-link :to="'/illness/'+id">
                    <span v-if="illnessArr.length>1">已选择{{illnessArr.length}}项</span>
                    <span v-else>{{illnessArr[0]}}</span>
                    <span class="tab">></span></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import HeadNav from "../../HeadNav"
    export default {
        name:'DidNotTest',
        data(){
            return{
                title:'家人和朋友',
                id:null,
                username:'',
                illnessArr:[],
                flag:true
            }
        },
        methods:{
            goback(){
                this.$router.push({
                    path:'/friend'
                })
            }
        },
        mounted(){
            //判断上个页面传递的参数修改id的值mama=2 baba=3
            if(this.$route.params.parent_name == 'baba'){
                this.id = 2
                this.username = 'baba'
                //获取本地慢性病数据
                if(localStorage.getItem('babaIllness')){
                     this.illnessArr = JSON.parse(localStorage.getItem('babaIllness'))
                }
                //获取测试结果数据
                if(localStorage.getItem('babaSimpleResults')||localStorage.getItem('babaSpecialtyResults')){
                    this.flag = false
                }
            }
            else if(this.$route.params.parent_name == 'mama'){
                this.id = 3
                this.username = 'mama'
                if(localStorage.getItem('mamaIllness')){
                     this.illnessArr = JSON.parse(localStorage.getItem('mamaIllness'))
                }
                //获取测试结果数据
                if(localStorage.getItem('mamaSimpleResults')||localStorage.getItem('mamaSpecialtyResults')){
                    this.flag = false
                }
            }
            //获取本地
        },
        components:{
            HeadNav
        }
    }
</script>

<style scoped>
/*  */
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
/* ----------------------------------------------- */
.didNotTest-content{
    background: #f1f1f1;
    height: 617px;
}
.didNotTest-content>.pic{
    height: 200px;
}
.didNotTest-content>.pic img{
   width: 100px;
   height: 100px;
   margin-top: 50px;
}
.didNotTest-content>.test{
    height:40px;
    background: #fff;
    line-height: 40px;
    margin-top: 30px;
    padding: 0 40px;
    text-align: left;
    position: relative;
}
.didNotTest-content>.test .tab{
    position: absolute;
    top: 0px;
    right: 30px;   
}
</style>