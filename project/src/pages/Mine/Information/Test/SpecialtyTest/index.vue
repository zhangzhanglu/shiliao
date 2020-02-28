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
        <div class="info" v-for="(item,index) in specialtyData" :key="index">
            <p @click="answerout(index)" class="question">{{item.id}}.{{item.question}}</p>
            <ul class="none" :class="{block:nowIndex === index}" >
                <li v-for="(item2,index2) in item.options" :key="index2">
                    <p  @click="getkey(item.id,key)" class="answer" v-for="(value,key,index3) in item2" :key="index3">{{key}}.{{value}}</p>
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
                title:"专业版体质测试",
                nowIndex:null,
                answerKey:null,
                specialtyData:[],
                optionArr:[
                    {id:1,option:null},
                    {id:2,option:null},
                    {id:3,option:null},
                    {id:4,option:null},
                    {id:5,option:null},
                    {id:6,option:null},
                    {id:7,option:null},
                    {id:8,option:null},
                    {id:9,option:null},
                    {id:10,option:null},
                ]
            }
        },
        components:{
        },
        created(){
            this.$api.getSpecialtyTest()
            .then(res=>{
                console.log(res.data.data)
                this.specialtyData = res.data.data
            })
        },
        mounted(){
            //获取本地数据显示在页面上
            if(this.$route.params.username == 'me'){
                if(localStorage.getItem('mineSpecialtyResults')){
                    this.optionArr = JSON.parse(localStorage.getItem('mineSpecialtyResults'))
                }
            }
            else if(this.$route.params.username == 'baba'){
                 if(localStorage.getItem('babaSpecialtyResults')){
                    this.optionArr = JSON.parse(localStorage.getItem('babaSpecialtyResults'))
                }
            }
            else if(this.$route.params.username == 'mama'){
                 if(localStorage.getItem('mamaSpecialtyResults')){
                    this.optionArr = JSON.parse(localStorage.getItem('mamaSpecialtyResults'))
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
            //点击事件 根据下标显示对应选项
            answerout(index){
                this.nowIndex = index
            },
            getkey(id,key){
                // this.answerKey = key
                for(var i=0;i<this.optionArr.length;i++){
                    if(this.optionArr[i].id === id){
                        this.optionArr[i].option = key
                    }
                }
            },
            //完成
            finishHandle(){
                //完成 把测试结果存储到vuex 和本地
                if(this.$route.params.username == 'me'){
                    this.$store.commit('addMineSpecialtyResults',this.optionArr)
                    localStorage.setItem('mineSpecialtyResults',JSON.stringify(this.optionArr))
                }
                else if(this.$route.params.username == 'baba'){
                    this.$store.commit('addBabaSpecialtyResults',this.optionArr)
                    localStorage.setItem('babaSpecialtyResults',JSON.stringify(this.optionArr))
                }
                else if(this.$route.params.username == 'mama'){
                    this.$store.commit('addMamaSpecialtyResults',this.optionArr)
                    localStorage.setItem('mamaSpecialtyResults',JSON.stringify(this.optionArr))
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
.none{
    display:none;
}
.block{
    display: block;
}
.active{
    color: #4ebf92;
}
.options{
    display: inline-block;
    width: 36px;
}
</style>