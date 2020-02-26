<template>
    <div>
        <ul class="select" >
            <li v-for="(item,index) in selectdata" :key="index">
                <div :style="item.color"><i class="iconfont" :class="item.tubiao"></i></div>
                <p> {{item.text}} </p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"FoodSelect",
        data() {
            return {
                selectdata: [
                    {
                        tubiao:"icon-qiqiu",
                        text:"美容养颜",
                        color:"background:rgb(255,175,150)"
                    },
                    {
                        tubiao:"icon-yaoping",
                        text:"保健调养",
                        color:"background:rgb(67,235,182)"
                    },
                    {
                        tubiao:"icon-fengchao",
                        text:"补养",
                        color:"background:rgb(97,230,125)"
                    },
                    {
                        tubiao:"icon-kg",
                        text:"减肥",
                        color:"background:rgb(237,96,96)"
                    },
                    {
                        tubiao:"icon-yingerche",
                        text:"母婴",
                        color:"background:rgb(255,126,150)"
                    },
                    {
                        tubiao:"icon-huanbaoyezishuyexianxing",
                        text:"气节",
                        color:"background:rgb(0,204,204)"
                    },
                    {
                        tubiao:"icon-canju",
                        text:"常见食疗",
                        color:"background:rgb(255,190,63)"
                    },
                    {
                        tubiao:"icon-renqun-copy",
                        text:"人群功效",
                        color:"background:rgb(62,158,224)"
                    },
                    {
                        tubiao:"icon--vc",
                        text:"维生素",
                        color:"background:rgb(255,175,27)"
                    },
                    {
                        tubiao:"icon-qita",
                        text:"其他",
                        color:"background:rgb(202,216,213)"
                    },
                ]
            }
        },
    }
</script>

<style scoped>
.select{
    overflow: hidden;
}
.select li{
    float: left;
    width: 16%;
    padding: 7px;
    font-size: 14px;
}
.select li div{
    border-radius: 50%;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    margin-left: 8px;
    color: #000;
}
.select li div i{
    font-size: 30px;
}
.select li p{
    text-align: center;
}

</style>