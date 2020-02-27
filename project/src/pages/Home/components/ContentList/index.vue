<template>
    <div>
        <HeaderNav />
        <div class="cont">
             <div class="title">
                <p>{{homedata.content}}</p>
            </div>
            <div class="jieshao">
                <p class="author">作者：<span>{{homedata.author}}</span></p>
                <div class="img">
                    <img :src="homedata.image" alt="">
                </div>
                <div class="contentp">
                    <p>{{homedata.contentp}}</p>
                </div>
            </div>
            <div class="fenlei">
                <ul>
                    <li v-for="(item, index) in homedata.feilei" :key="index">
                        <p class="feilei-title">{{item.name}}</p>
                        <p class="feilei-cont">{{item.feileiCont}}</p>
                    </li>
                </ul>
            </div>
            <div class="tuijian">
                <p class="tuijian-title">为你推荐</p>
                <div class="shipu">
                    <div class="shipu-title">食谱</div>
                    <div class="shipu-image">
                        <img src="../../images/contlist01.png" alt="">
                    </div>
                </div>
                <div class="danpin">
                    <div class="danpin-title">单品</div>
                    <div class="danpin-image">
                        <div class="dan-img-one">
                            <img src="../../images/contlist02.png" alt="">
                            <div class="add-one" @click="addone">
                                <img src="../../images/add.png" alt="">
                            </div>
                        </div>
                        <div class="dan-img-two" @click="addtwo">
                            <img src="../../images/contlist03.png" alt="">
                            <div class="add-two">
                                <img src="../../images/add.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gouwuche" @click="gouwuche">
                    <img src="../../images/buy.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderNav from "../HeaderNav"
    export default {
        name: "ContentList",
        data(){
            return{
                homedata: {}
            }
        },
        components: {
            HeaderNav
        },
        created(){
            this.homedata = this.$route.params.homedata
        },
        methods: {
            // 添加到购物车事件
            addone(){
                console.log("添加第一个商品到购物车");
            },
            addtwo(){
                console.log("添加第二个商品到购物车")
            },
            // 购物车事件
            gouwuche(){
                // 
                console.log("跳转到购物车")
            }
        }
    }
</script>

<style scoped>
.cont{
    padding: 0 10px;
}
.title{
    margin-top: 26px;
    border-bottom: 1px solid #c8c8c8;
    padding-bottom: 26px;
}
.title p{
    font-size: 28px;
    color: #43bf92;
}
.jieshao{
    text-align: left;
}
.jieshao .author{
    color: #373737;
    font-size: 12px;
}
.jieshao .img img{
    display: block;
    margin: 15px auto;
    width: 165px;
    height: 110px;
}
.contentp p{
    font-size: 12px;
    color: #43bf92;
    line-height: 22px;
    padding: 0 5px;
}
.fenlei{
    padding: 20px 5px 55px 5px;
    text-align: left;
    border-bottom: 1px solid #c8c8c8;
}
.feilei-title{
    color: #43bf92;
    line-height: 38px;
    font-size: 14px;
}
.feilei-cont{
    font-size: 14px;
    line-height: 21px;
}
/* 为你推荐 */
.tuijian{
    position: relative;
}
.tuijian-title{
    text-align: left;
    font-size: 14px;
    margin-top: 2px;
    margin-bottom: 23px;
}
/* 食谱 */
.shipu, .danpin{
    display: flex;
    margin-bottom: 22px;
}
.shipu-title, .danpin-title{
    flex: 2;
    line-height: 55px;
}
.shipu-image, .danpin-image{
    flex: 8;
    text-align: left;
}
.shipu-image img{
    height: 55px;
    width: 145px;
}
/* 单品 */
.dan-img-one, .dan-img-two{
    display: inline-block;
    position: relative;
}
.dan-img-one img, .dan-img-two img{
    width: 48px;
    height: 48px;
}
.dan-img-one{
    margin-right: 48px;
}
.add-one, .add-two{
    width: 17px;
    height: 17px;
    position: absolute;
    top: -14px;
    right: -14px;
}
.add-one img, .add-two img{
    width: 100%;
    height: 100%;
}
/* 购物车 */
.gouwuche{
    width: 43px;
    height: 43px;
    position: absolute;
    bottom: 16px;
    right: 16px;
}
.gouwuche img{
    width: 100%;
    height: 100%;
}
/* /为你推荐 */

</style>