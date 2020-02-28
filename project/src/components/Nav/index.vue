<template>
    <div class="d-nav">
        <ul class="nav">
            <router-link tag="li" exact to="/" >
                <i class="iconfont icon-huanbaoyezishuyexianxing"></i>
                <p>首页</p>
            </router-link> 
            <router-link tag="li" to="/food">
                <i class="iconfont icon-2"></i>
                <p>食疗坊</p>
            </router-link> 
            <router-link tag="li" to="/make">
                <i class="iconfont icon-zuanshi"></i>
                <p>私人定制</p>
            </router-link> 
            <router-link tag="li" to="/mine">
                <i class="iconfont icon-wode"></i>
                <p>我的</p>
            </router-link> 
        </ul>
    </div>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {

    };
  },
  methods: {
   
  }
};
</script>
<style scoped>

.nav{
    width: 100%;
    height: 60px;
    display: flex;
    position: fixed;
    bottom: 0;
    z-index: 999;
    overflow: hidden;
}
.nav li{
    flex:1; 
    height: 50px;
    padding-top: 10px;
    text-align: center;
    background: #eee;
}
.iconfont{
    font-size: 30px;
}
p{
    font-size: 14px;
}
.active{
    color: #f00;
}
.exact-active{
    color: #0f0;
}

</style>