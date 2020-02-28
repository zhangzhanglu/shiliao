<template>
  <div class="make">
    <!-- tab切换 -->
    <div class="makeHeader">
      <div class="tabTitle">
        <ul class="tabs">
          <li
            class="li-tab"
            v-for="(item,index) in tabsParam"
            :key="index"
            @click="toggleTabs(index)"
            :class="{active:index==nowIndex}"
          >{{item}}</li>
        </ul>
      </div>
      <div class="divTab" v-show="nowIndex===0">
        <!-- 日历 -->
        <div class="Calendar">
          <img src="../../../public/img/rili.png" alt @click="calenderHendle" />
          <!-- 日历组件 -->
          <Calendar v-show="flag" />
        </div>
        <CurrentEntry @zhengzhuangId="zhengzhuangIdData"/>
      </div>
      <div class="divTab" v-show="nowIndex===1">
        <Condition :zhengzhuangId ="zhengzhuang" />
      </div>
    </div>
    <!-- 购物车 -->
    <div class="shopping" @click="shopClick">
      <img src="../../../public/img/shopping.png" alt="">
    </div>
  </div>
</template>

<script>
import Calendar from "./Calendar";
import CurrentEntry from "./CurrentEntry";
import Condition from "./Condition";
export default {
  name: "Make",
  components: {
    Calendar,
    CurrentEntry,
    Condition
  },
  data() {
    return {
      tabsParam: ["日常记录", "症状调理"], //（这个也可以用对象key，value来实现）
      nowIndex: 0, //默认第一个tab为激活状态,
      flag: false, //判断日历是否显示
      zhengzhuangId:[],   //选中的症状id
      zhengzhuang:[]
    };
  },
  methods: {
    //tab切换
    toggleTabs: function(index) {
      this.nowIndex = index;
      if(this.nowIndex == 1){
        this.zhengzhuang = this.zhengzhuangId
      }
    },
    //日历显示隐藏的点击事件
    calenderHendle() {
      this.flag = !this.flag;
    },
    zhengzhuangIdData(zIdArr){
      console.log(zIdArr);
      this.zhengzhuangId = zIdArr;
    },
    // 点击购物车跳转
    shopClick(){
      this.$router.replace('/shopping')
    }
  }
};
</script>

<style scoped>
.makeHeader {
  margin-top: 10px;
  color: #6e6e6e;
}
.tabTitle {
  margin: 20px;
  font-size: 20px;
  
}
.active {
  color: #43bf92;
}
.tabs {
  width: 100%;
  height: 30px;
  padding: 0;
}
.li-tab {
  width: 50%;
  height: 100%;
  display: inline-block;
  text-align: center;
}
.li-tab:first-child::after{
    content:'';
    display: block;
    width:1px;
    height: 30px;
    background:#6e6e6e;
    position: relative;
    top: -24px;
    left: 166px;
}
.Calendar{
    margin-bottom: 20px;
}
.Calendar.wh_container .wh_content_all {
  background-color: #fff;
}
.shopping{
  width: 50px;
  height: 50px;
  position:fixed;
  top:540px;
  right: 25px;
}
.shopping img{
  width: 50px;
  height: 50px;
}
</style>