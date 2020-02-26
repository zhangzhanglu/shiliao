<template>
    <div>
        <div class="home" ref="home">
            <div class="header">
                <img src="./images/home01.png" alt="">
            </div>
            <div class="middle-img">
                <ul>
                    <router-link exact tag="li" to="/home/feibuceshi">
                            <img src="./images/home021.png" alt="">
                            <p>每日一测</p>
                    </router-link>
                    <router-link exact tag="li" to="/meirishipu">
                            <img src="./images/home022.png" alt="">
                        <p>每日食谱</p>
                    </router-link>
                </ul>
            </div>
            <div class="content">
                <div v-for="(item, index) in homedata" :key="index">
                    <Content :homedata="item" />
                </div>
                <div>{{smg}}</div>
            </div>
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
                title: "标题",
                homedata: [],
                flag: true,
                scroll: '',
                pingmuHeight: '',
                htmlHeight: '',
                smg: "数据正在加载中..."
            }
        },
        components: {
            HeadNav,
            Content
        },
        methods: {
            // 滚动事件
            menu() {
                this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
                this.pingmuHeight = document.documentElement.clientHeight;
                this.htmlHeight = document.body.clientHeight;
                // console.log(document.body.clientHeight)
                if(this.htmlHeight < (this.pingmuHeight + this.scroll + 50)){
                    // 当falg为true时，进行网络请求
                    if(this.flag){
                        this.flag = false;
                        // 网络请求
                        this.$api.getHomeData().then(res => {
                            this.homedata = this.homedata.concat(res.data.data);
                            this.flag = true
                        })
                    }
                    // 当数据大于多少条时，将flag改为false
                    if(this.homedata.length >= 42){
                        this.flag = false
                    }

                }
            },
            
        },
        created() {
            this.$api.getHomeData().then(res => {
                this.homedata = res.data.data
            })
            // 添加滚动事件
            window.addEventListener('scroll', this.menu);            
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