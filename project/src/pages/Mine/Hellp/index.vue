<template>
    <div>
        <div class="head">
            <HeadNav back='返回' :title="title"/>
        </div>
        <div class="hellp-content">
            <div class="search">
                <input type="text" name="" id="" placeholder="搜索">
            </div>
            <div class="title">常见问题</div>
            <div class="item" v-for="(item,index) in data" :key="index">
                <div class="question">{{item.question}}<span @click="answerout(index)">></span></div>
                <div class="answer"  :class="{block:nowIndex===index}">{{item.answer}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import HeadNav from "../HeadNav"
    export default {
        name:'Hellp',
        data(){
            return{
                nowIndex:null,
                title:'帮助和反馈',
                data:[]
            }
        },
        components:{
            HeadNav
        },
        methods:{
            answerout(index){
                this.nowIndex = index
            }
        },
        created(){
            this.$api.getHellpInfo()
            .then(res=>{
                console.log(res.data.data)
                this.data = res.data.data
            })
        }
    }
</script>

<style scoped>
.hellp-content{
    background: #f1f1f1;
    height: 617px;
}
.hellp-content .search{
    height: 70px;
   
}
.hellp-content .search input{
    padding-left: 10px;
    outline: none;
    border: 1px solid #999;
    width: 300px;
    height: 30px;
    border-radius: 15px;
    margin: 20px auto;
}
.hellp-content .title,.hellp-content .item{
    border: 1px solid #f1f1f1;
}
.hellp-content .title,.hellp-content .item .question{
    height: 40px;
    line-height: 40px;
    background: #fff;
    padding-left: 20px;
    text-align: left;
    font-size: 14px;
    color: #333;
}
.hellp-content .item .answer{
    background: #fff;
    padding: 20px;
    display:none;
    font-size: 14px;
    color: #999;
}
.hellp-content .item .block{
    background: #fff;
    padding: 20px;
    display:block;
}

.hellp-content .item{
    position: relative;
}
.hellp-content .item span{
    position: absolute;
    top: 0;
    right: 20px;
}
</style>