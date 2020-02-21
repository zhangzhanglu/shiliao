<template>
    <div class="home">
        <div class="header">
            <img src="./images/home01.png" alt="">
        </div>
        <div class="middle-img">
            <ul>
                    <!-- <li> -->
                <router-link tag="li" to="/feibuceshi">
                        <img src="./images/home021.png" alt="">
                        <p>每日一测</p>
                </router-link>
                    <!-- </li> -->
                <router-link tag="li" to="/meirishipu">
                        <img src="./images/home022.png" alt="">
                    <p>每日食谱</p>
                </router-link>
            </ul>
        </div>
        <div class="content">
            <Content :title="title" />
        </div>
    </div>
</template>

<script>
import HeadNav from "../../components/Nav";
import Content from "./Content";
    export default {
        name:"Home",
        data(){
            return{
                title: "标题"
            }
        },
        components: {
            HeadNav,
            Content
        }
    }
</script>

<style scoped>
.home .header img{
    width: 100%;
}
.middle-img ul{
    display: flex;
    padding: 15px 7px 0 7px;
}
.middle-img ul li{
    flex: 1;
    padding: 0 13px 0 13px;
}
.middle-img ul li img{
    width: 100%;
}
.middle-img ul li p{
    font-size: 14px;
    color: #858484;
}

</style>