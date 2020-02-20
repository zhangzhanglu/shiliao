<template>
    <div class="d-nav">
        <ul class="nav">
            <router-link tag="li" exact to="/" >首页</router-link> 
            <router-link tag="li" to="/food">食疗坊</router-link> 
            <router-link tag="li" to="/make">私人定制</router-link> 
            <router-link tag="li" to="/mine">我的</router-link> 
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
    height: 50px;
    display: flex;
    position: fixed;
    bottom: 0;
}
.nav li{
    flex:1; 
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #eee;
}
.active{
    color: #f00;
}
.exact-active{
    color: #0f0;
}

</style>