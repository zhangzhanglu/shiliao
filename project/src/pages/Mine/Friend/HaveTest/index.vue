<template>
    <div>
        <div class="head">
            <i class="iconfont icon-arrow-right1"></i><HeadNav back="返回" :title="title"/>
        </div>
        <div class="haveTest-content">
            <div class="pic">
                <img src="../../images/2.png" alt="">
            </div>
            <div class="info">
                <div class=""><i class="iconfont icon-yiliaojiankang-wodetizhijiankang-xuesheng"></i>显示体质<span class="tab"><router-link to=""><i>></i></router-link></span></div>
                <div>显示体质简介</div>
                <div  @click="clearLocalsotre"><router-link :to="'/test/'+username" >重新检测体质</router-link></div>
                <div><i class="iconfont icon-wancheng"></i><span>慢性病</span><router-link class="tab" :to="'/illness/'+id">
                    <span v-if="illnessArr.length>1">已选择{{illnessArr.length}}项</span>
                    <span v-else>{{illnessArr[0]}}</span>
                    <i>></i></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeadNav from '../../HeadNav'
    export default {
        name:'HaveTest',
        data(){
            return{
                title:'姓名',
                id:null,
                username:'',
                illnessArr:[]
            }
        },
        components:{
            HeadNav
        },
        mounted(){
            if(this.$route.params.username == 'baba'){
                this.id = 2
                this.username = 'baba'
                //获取本地慢性病数据
                if(localStorage.getItem('babaIllness')){
                     this.illnessArr = JSON.parse(localStorage.getItem('babaIllness'))
                }
            }else if(this.$route.params.username == 'mama'){
                this.id = 3
                this.username = 'mama'
                //获取本地慢性病数据
                if(localStorage.getItem('mamaIllness')){
                     this.illnessArr = JSON.parse(localStorage.getItem('mamaIllness'))
                }
            }
        },
        methods:{
            //清除本地存储
            clearLocalsotre(){
                console.log(this.username)
                if(this.username == 'baba'){
                    localStorage.removeItem('babaSimpleResults')
                    localStorage.removeItem('babaSpecialtyResults')
                }
                else if(this.username == 'mama'){
                    localStorage.removeItem('mamaSimpleResults')
                    localStorage.removeItem('mamaSpecialtyResults')
                }
            }
        }
    }
</script>

<style scoped>
.haveTest-content{
    background: #f1f1f1;
    height: 617px;
}
.haveTest-content .pic{
    background: #fff;
    height: 150px;
}
.haveTest-content .pic>img{
  width: 80px;
  height: 80px;
  margin-top: 35px;
}
.haveTest-content .info{
    margin-top: 20px;
}
.haveTest-content .info>div{
  background: #fff;
  border: 1px solid #f1f1f1;
  height: 40px;
  line-height: 40px;
  padding-left: 30px;
  text-align: left;
  position: relative;
}
.haveTest-content .info>div .tab{
    position: absolute;
    top: 0;
    right: 30px;
}
</style>