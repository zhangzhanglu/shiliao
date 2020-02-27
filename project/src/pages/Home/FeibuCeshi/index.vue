<template>
    <div class="ceshi">
        <HeaderNav :title="title" />
        <div class="share">
            <img src="../images/share.png" alt="">
        </div>
        <div>
            <img src="../images/ceshi01.png" alt="">
        </div>
        <div class="anniu">
            <p><span class="num">111</span>人参与了测试</p>
            <button class="btn" v-on:click="btnClick">开始测试</button>
        </div>
    </div>
</template>

<script>
import HeaderNav from "../components/HeaderNav"
    export default {
        name: "FeibuCeshi",
        data(){
            return{
                title: "肺部测试"
            }
        },
        components: {
            HeaderNav
        },
        methods: { 
            btnClick() {
                const vm = this;
                this.$router.push('/home/feibuceshi/ceshi')
            }
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
.ceshi img{
    width: 100%;
}
.anniu{
    margin-top: 85px;
}
.anniu .num{
    color: #FF0505;
}
.anniu .btn{
    color: #fff;
    width: 300px;
    height: 45px;
    background: #46BF92;
    font-size: 18px;
    margin-top: 12px;
    border-radius: 5px;
}
</style>