<template>
    <div class="mineCollect">
        <HeaderNav :title="'我的收藏'" />
        <!-- 内容 -->
        <div class="content">
            <div class="title">
                <div class="huati">
                    话题
                </div>
                <div class="shangpin">
                    商品
                </div>
            </div>
            <div class="content">
                <div v-for="(item, index) in homedata" :key="index">
                    <Content :homedata="item" />
                </div>
            </div>
        </div>
        <!-- /内容 -->
    </div>
</template>

<script>
import HeaderNav from "../../Home/components/HeaderNav"
import Content from "../../Home/Content"
    export default {
        name: "MineCollect",
        data(){
            return{
                homedata: [],
            }
        },
        components: {
            HeaderNav,
            Content
        },
        created() {
            this.$api.getHomeData().then(res => {
                this.homedata = res.data.data
            })
        }
    }
</script>

<style scoped>
.mineCollect{
    background: #F1F1F1; 
}
.content{
    margin-top: 5px;
    background: #fff;
}
.content .title{
    display: flex;
    padding: 3px 0;
    border-bottom: 1px solid #f1f1f1;
}
.title .huati, .title .shangpin{
    flex: 1;
    line-height: 29px;
    font-size: 16px;
}
.title .huati{
    border-right: 1px solid #f1f1f1;
}

</style>