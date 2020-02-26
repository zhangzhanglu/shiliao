<template>
    <div>
        <div class="ceshi" v-if="lisDatas.length > 0">
            <div>
                <p>{{lisDatas[i].titleId}}/2</p>
                <p class="title">{{lisDatas[i].question}}</p>
                <ul>
                    <li v-for="(item, index) in lisDatas[i].answer" :key="index" @click="activate(index)" :class="{ 'active': activeIndex === index}">{{item}}</li>
                </ul>
            </div>
            <div>
                <button ref="btn" @click="clickBtn" class="btn">{{lisDatas[i].btn}}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CeshiQuestion",
        data(){
            return{
                activeIndex: "",
                i: 0,
                score: 0
            }
        },
        methods: {
            clickBtn(){
                if(this.i == 0){
                    this.i = 1;
                    this.activeIndex = "";
                }
                if(this.$refs.btn.innerHTML == "提交"){
                    const vm = this;
                    vm.$router.push({name: 'CeshiResult',params:{score: this.score}})
                }
            },
            // li点击事件
            activate(index){
                this.activeIndex = index
                this.score += index
            }
        },
        props: {
            lisDatas: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style scoped>
.active{
    background: #46BF92;
    color: #fff;
}
.ceshi{
    padding: 45px 35px;
}
.ceshi p{
    text-align: left;
}
.ceshi .title{
    margin-top: 14px;
    margin-bottom: 20px;
}
.ceshi ul{
    padding: 0 10px;
}
.ceshi ul li{
    padding: 13px 125px;
    border: 1px solid #CDCDCD;
    border-radius: 20px;
    margin: 12px 0;
}
.ceshi .btn{
    width: 300px;
    height: 45px;
    line-height: 45px;
    background: #46BF92;
    color: #fff;
    font-size: 18px;
    margin-top: 62px;
    border-radius: 5px;
}
</style>