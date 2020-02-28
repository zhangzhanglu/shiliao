<template>
    <div>
       <div class="headNav">
            <div class="headNav-left" @click="goback"><i class="iconfont icon-hao"></i>{{back}}</div>
            <div class="headNav-center"> <span>{{title}}</span> </div>
            <div class="headNav-right" @click="finishHandle">
                <router-link to="/home/feibuceshi/ceshiresult">完成</router-link>
            </div>
        </div>
        <span class="options" v-for="(item4,index4) in optionArr" :key="index4+100">{{item4.id}}.{{item4.option}}</span>
        <div class="info" v-for="(item,index) in simpleData" :key="index">
            <p class="question">{{item.id}}.{{item.question}}</p>
            <ul :class="{none:nowIndex = index}" >
                <li v-for="(item2,index2) in item.options" :key="index2">
                    <p @click="getAnswer(item.id,key)" class="answer" v-for="(value,key,index3) in item2" :key="index3">{{key}}.{{value}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
 
    export default {
        name:'SimpleTest',
        data(){
            return{
                back:'放弃',
                title:"简易版体质测试",
                simpleData:[],
                nowIndex:null,
                optionArr:[//测试结果数据 
                    {id:1,option:null},
                    {id:2,option:null},
                    {id:3,option:null},
                ]
            }
        },
        components:{
        },
       created(){
           //获取简易版测试数据
           this.$api.getSimpleTest()
            .then(res=>{
                console.log(res.data.data)
                this.simpleData= res.data.data
            })
        },
        mounted(){
            //获取本地数据显示在页面上
            if(this.$route.params.username == 'me'){
                if(localStorage.getItem('mineSimpleResults')){
                    this.optionArr = JSON.parse(localStorage.getItem('mineSimpleResults'))
                }
            }
            else if(this.$route.params.username == 'baba'){
                 if(localStorage.getItem('babaSimpleResults')){
                    this.optionArr = JSON.parse(localStorage.getItem('babaSimpleResults'))
                }
            }
            else if(this.$route.params.username == 'mama'){
                 if(localStorage.getItem('mamaSimpleResults')){
                    this.optionArr = JSON.parse(localStorage.getItem('mamaSimpleResults'))
                }
            }
        },

        methods:{
            //返回事件
            goback(){
                if(this.$route.params.username == 'me'){
                    this.$router.push({
                        path:'/test/me',
                    })
                }
                else if(this.$route.params.username == 'baba'){
                    this.$router.push({
                        path:'/test/baba',
                    })
                }
                else if(this.$route.params.username == 'mama'){
                    this.$router.push({
                        path:'/test/mama',
                    })
                }
            },
            getAnswer(id,key){
                // console.log(id,key)
                for(var i=0;i<this.optionArr.length;i++){
                    if(this.optionArr[i].id === id){
                        this.optionArr[i].option = key
                    }
                }
                // console.log(this.optionArr)
            },
            finishHandle(){
                //完成 把测试结果存储到vuex 和本地
                if(this.$route.params.username == 'me'){
                    this.$store.commit('addMineSimpleResults',this.optionArr)
                    localStorage.setItem('mineSimpleResults',JSON.stringify(this.optionArr))
                }
                else if(this.$route.params.username == 'baba'){
                    this.$store.commit('addBabaSimpleResults',this.optionArr)
                    localStorage.setItem('babaSimpleResults',JSON.stringify(this.optionArr))
                }
                else if(this.$route.params.username == 'mama'){
                    this.$store.commit('addMamaSimpleResults',this.optionArr)
                    localStorage.setItem('mamaSimpleResults',JSON.stringify(this.optionArr))
                }
            }

        },
    }
</script>

<style scoped>
a{
    color: #fff;
}
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
.info{
    background: #fff;
    bottom: 1px solid #f1f1f1;
    padding: 0 20px;
}
.info .question{
    height: 30px;
    line-height: 30px;
    text-align: left;
}
.info ul{
    padding: 20px 30px;
}
.info .answer{
    height: 30px;
    line-height: 30px;
    text-align: left;
}
.options{
    display: inline-block;
    width: 36px;
}
</style>