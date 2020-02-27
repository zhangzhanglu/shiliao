<template>
    <div class="ceshiResult">
        <HeaderNav />
        <div class="share">
            <img src="../../images/share.png" alt="">
        </div>
        <div class="ceshineirong">
            <p class="ceshijieguo">测试结果</p>
            <p class="gaoduweixian"> {{result}} </p>
            <div class="result">
                <div class="left-line"></div>
                <p>结果仅供参考</p>
                <div class="right-line"></div>
            </div>
        </div>
        <div class="tuijian">
            <p class="tuijiantitle">为您推荐</p>
            <ul>
                <router-link tag="li" to="/dpage">
                    <img src="../../images/ceshijieguo01.png" alt="">
                    <p>黑木耳</p>
                </router-link>
                <router-link tag="li" to="/dpage">
                    <img src="../../images/ceshijieguo02.png" alt="">
                    <p>清肺汤</p>
                </router-link>
                <router-link tag="li" to="/dpage">
                    <img src="../../images/ceshijieguo02.png" alt="">
                    <p>清肺汤</p>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
import HeaderNav from "../../components/HeaderNav";
    export default {
        name: "CeshiResult",
        data(){
            return{
                result: ""
            }
        },
        components:{
            HeaderNav
        },
        created(){
            // 请求测试结果数据
            this.$api.getCeshiResultData().then(res => {
                const ress = res.data.data;
                // 遍历数据
                for(var i = 0; i < ress.length; i++){
                    if(this.$route.params.score == ress[i].scoreNum){
                        this.result = ress[i].content
                    }
                }
            })
        }
    }
</script>

<style scoped>
/* 分享 */
.share{
    width: 20px;
    height: 20px;
    position: fixed;
    top: 12px;
    right: 10px;
}
.share img{
    width: 100%;
    height: 100%;
}
/* /分享 */
.ceshiResult{
    background: #F1F1F1;
}
.ceshineirong{
    padding: 70px 55px 65px 55px;
    margin-top: 8px;
    margin-bottom: 8px;
    background: #fff;
}
.ceshijieguo{
    font-size: 16px;
    margin-bottom: 20px;
}
.gaoduweixian{
    text-align: left;
    font-size: 12px;
}
.result{
    margin-top: 80px;
}
.result p{
    display: inline-block;
    font-size: 10px;
    color: #CDCDCD;
    margin: 0 5px 0 5px;
}
.result .left-line, .result .right-line{
    display: inline-block;
    width: 67px;
    height: 2px;
    background: #CDCDCD;
    position: relative;
    top: -4px;
}
.tuijian{
    background: #fff;
    padding: 0 9px 0 9px;
}
.tuijiantitle{
    text-align: left;
    font-size: 14px;
    padding-top: 10px;
}
.tuijian ul{
    width: 100%;
    padding: 5px 13px;
    box-sizing: border-box;
}
.tuijian ul li{
    width: 50%;
    float: left;
    padding: 0 5px 15px 5px;
    box-sizing: border-box;
    height: 100px;
}
.tuijian ul li img{
    width: 100%;
}
</style>