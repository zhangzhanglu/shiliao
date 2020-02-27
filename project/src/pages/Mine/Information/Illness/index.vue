<template>
    <div>
        <div class="headNav">
            <div class="headNav-left" @click="goback">{{back}}</div>
            <div class="headNav-center"> <span>{{title}}</span> </div>
            <div class="headNav-right" @click="finishHandle">完成</div>
        </div>
        <div class="illness-content">
            <div class="info">
                <p 
                    @click="illnessHandle(item)" v-for="(item,index) in illnessArr" 
                    :key="index"
                    >{{item}}</p>
            </div>
            <div class="myoption">
                <p>我的选择:</p>
                <span v-for="(item,index) in optionItem" :key="index+100">{{item}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
    export default {
        name:'Illness',
        data(){
            return{
                title:"选择慢性病",
                back:"返回",
                nowIndex:'',
                illnessArr:["减重","痛风","血糖升高","脂肪肝","慢性肠胃炎","慢性支气管炎","血脂升高", "血压升高"],
                optionItem:[]
            }
        },
        components:{
           
        },
        mounted(){
            if(this.$route.params.id == 1){
                if(localStorage.getItem('mineIllness')){
                // console.log(JSON.parse(localStorage.getItem('mineIllness')))
                 this.optionItem = JSON.parse(localStorage.getItem('mineIllness'))
                }
            }
            else if(this.$route.params.id == 2){
                if(localStorage.getItem('babaIllness')){
                 this.optionItem = JSON.parse(localStorage.getItem('babaIllness'))
                }
            }
            else if(this.$route.params.id == 3){
                if(localStorage.getItem('mamaIllness')){
                 this.optionItem = JSON.parse(localStorage.getItem('mamaIllness'))
                }
            }
        },
        computed:{
            
        },
        methods:{
            //返回事件
            goback(){
                this.$router.go(-1)
                // this.$emit('changeIllnessArr',this.optionItem)
            },
            //选择每一项
            illnessHandle(item){
                // console.log(item)
                    if(this.optionItem.indexOf(item)== -1){
                        // console.log(this.optionItem.indexOf(this.optionItem[i]))
                            this.optionItem.push(item)
                        // this.optionItem.splice(this.optionItem.indexOf(this.optionItem[i]),1)
                    }
                    else{
                      for(var i=0;i<this.optionItem.length;i++){
                          if(this.optionItem[i] === item){
                              this.optionItem.splice(this.optionItem.indexOf(this.optionItem[i]),1)
                          }
                      }
                    }
                console.log(this.optionItem)
                
                
            },
            //完成
            finishHandle(){//完成后存储信息
                console.log(this.$route.params.id)
                if(this.$route.params.id==1){//存储我的慢性病
                    //存储到state
                    this.$store.commit('addMineIllness',this.optionItem)
                    //存储到本地
                    localStorage.setItem('mineIllness',JSON.stringify(this.optionItem))
                }else if(this.$route.params.id==2){//存储爸爸的慢性病
                    this.$store.commit('addBabaIllness',this.optionItem)
                    localStorage.setItem('babaIllness',JSON.stringify(this.optionItem))
                }
                else if(this.$route.params.id==3){//存储妈妈的慢性病
                    this.$store.commit('addMamaIllness',this.optionItem)
                    localStorage.setItem('mamaIllness',JSON.stringify(this.optionItem))
                }
                
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
.illness-content{
    background: #f1f1f1;
    height: 617px;
}
.illness-content>.info>p{
    padding-left: 10px;
    height: 40px;
    line-height: 40px;
    background: #fff;
    text-align: left;
    border-bottom: 1px solid #f1f1f1;
}
.illness-content>.myoption{
    margin-top: 30px;
    background: #fff;
    height: 100px;
    padding: 20px;
}
.illness-content>.myoption>p{
    text-align: left;
}
.illness-content>.myoption>span{
   margin: 5px 5px;
}
</style>