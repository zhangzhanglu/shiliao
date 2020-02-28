<template>
    <div>
       <div class="headNav">
            <div class="headNav-left" @click="goback">{{back}}</div>
            <div class="headNav-center"> <span>{{title}}</span> </div>
            <div class="headNav-right"></div>
        </div>
        <div class="information-content">
            <div class="information-image">
                <img src="../images/1.png" alt="">
            </div>
            <div class="information-info">
                <p>基础信息 <router-link to='/basicInformation'><span class="tab">></span></router-link> </p>
                <p>体检/慢性病 <router-link to="/illness/1" >
                    <span v-if="illnessArr.length>1">已选择{{illnessArr.length}}项</span>
                    <span v-else>{{illnessArr[0]}}</span>
                    <span class="tab">></span></router-link> </p>
            </div>
            <div class="information-test">
                <p>健康测试</p>
                <p>我的体质：<span v-if="flag">尚未测试 </span><span v-else>已测试</span><router-link to="/test/me"><span class="tab">></span> </router-link> </p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:'Information',
        data(){
            return{
                back:"返回",
                title:'健康信息',
                illnessArr:[],
                flag:true
            }
        },
        components:{
           
        },
        computed:{
            ...mapState(['mineIllness'])
        },
        mounted(){
            if(localStorage.getItem('mineIllness')){
                console.log(JSON.parse(localStorage.getItem('mineIllness')))
                this.illnessArr = JSON.parse(localStorage.getItem('mineIllness'))
            }
            //获取测试结果数据
            if(localStorage.getItem('mineSimpleResults')||localStorage.getItem('mineSpecialtyResults')){
                this.flag = false
            }
        },
        methods:{
            //返回事件
            goback(){
                this.$router.push({
                    path:'/mine',
                })
            }
            // changeIllnessArr(arr){
            //     this.illnessArr = arr;
            // }
            
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
.information-content{
    background: #f1f1f1;
    height: 617px;
}
.information-image img{
    width: 80px;
    height: 80px;
    margin: 30px auto;
}
.information-info>p,.information-test>p{
    background: #fff;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #f1f1f1;
    padding: 0 10px;
    text-align: left;
    position: relative;
}
.tab{
    position: absolute;
    top:0;
    right: 10px;
}
.information-test{
    margin-top:20px; 
}
.information-test p:nth-child(1) {
    background: transparent;
    text-align: center
}
</style>