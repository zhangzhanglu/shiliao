<template>
    <div class="shipu">
        <HeaderNav title="每日食谱" />
        <div v-for="(item, index) in shipuData" :key="index">
            <div class="father">
                <div>{{item.category}}</div>
                <ul>
                    <li class="f-zaol" v-for="(items, i) in item.list" :key="i">
                        <img :src="items.image" alt="">
                        <p class="f-zaop">{{items.title}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderNav from "../components/HeaderNav";
    export default {
        name: "MeiriShipu",
        data(){
            return{
                shipuData: []
            }
        },
        components: {
            HeaderNav
        },
        created(){
            this.$api.getMeirishipuData().then(res => {
                this.shipuData = res.data.data
            })
        }
    }
</script>

<style scoped>
.shipu img{
    width: 100%;
}
.shipu ul li{
    padding: 5px 0;
}
.father{
    color: #fff;
    padding: 0 25px;
}
.father div{
    width: 50px;
    height: 25px;
    line-height: 25px;
    background: #47BF91;
    border-radius: 12px;
    font-size: 12px;
    margin-top: 5px; 
}
.f-zaol{
    position: relative;
}
.f-zaop{
    font-size: 20px; 
    position: absolute;
    top: 50%;
    margin-top: -10px;
    margin-left: -22px;
    left: 50%;
}
</style>