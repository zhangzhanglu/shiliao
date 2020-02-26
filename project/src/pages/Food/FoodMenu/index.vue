<template>
  <div>
    <ul class="tabs">
        <li
        class="tab-list"
        :class="curIndex === index ? 'active' : '' "
        @click="currentIndex(index)"
        v-for=" (item,index) in arr "
        :key="index"
      >{{item}}</li>
    </ul>
    <!-- 跳转到详情页 -->
      <ul class="list-box" v-for="(item,index) in listdata" :key="index">
    <router-link :to="{'name':'DetailsPage',params:{id:item.id}}">
      <li>
        <div class="list-left">
          <img src="../image/images/images/images/食疗坊_03.gif" alt="111">
        </div>
        <div class="list-right">
          <h4> {{item.title}} </h4>
          <p class="list-desc"> {{item.desc}} </p>
          <div class="list-price">
            <p class="list-jiage">￥{{item.price}} </p>
            <p>{{item.num}} 人付款</p>
            <p class="list-dian">...</p>
          </div>
        </div>
      </li>
    </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FoodMenu",
  data() {
    return {
      arr: [
        "美容",
        "养颜",
        "减肥",
        "美白",
        "母婴",
        "保养",
        "保健",
        "排毒",
        "祛斑",
        "抗皱",
        "护发"
      ],
      curIndex: 0,
      listdata:[],
    };
  },
  methods: {
    // 
    currentIndex(index) {
      console.log(index);
      this.curIndex = index;
      this.$api.getfoodlist({
        id:this.curIndex
      })
      .then(res=>{
        console.log(res.data);
        this.listdata = res.data.data
      })
    }
  },
  mounted(){
    this.currentIndex(0)
  }
};
</script>

<style scoped>
a{
  color: #000;
}
/* 导航菜单 */
.active {
  color: #0f0;
}
.tabs {
  width: 100%;
  overflow-x: scroll;
  display: -webkit-box;
  display: flex;
  -webkit-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  margin: 5px 0;
}
.tab-list {
  padding: 0 10px;
  text-align: center;
  -webkit-flex: 1 0 auto;
  flex: 1 0 auto;
}
/* list列表 */
.list-box li{
    display: flex;
    margin: 10px 0;
    border-bottom: 1px solid #ccc;
}
.list-left{
    flex: 3;
}
.list-left img{
  width: 100%;
  height: 100%;
}
.list-right{
    flex: 7;
    text-align: left;
    padding: 5px;
}
 .list-desc{
    margin: 10px 0;
}
.list-price{
    display: flex;
}
.list-price p{
    flex: 1;
    font-size: 14px;
}
.list-price p:nth-child(2){
    flex: 2;
}
.list-dian{
    text-align: right;
}
.list-price .list-jiage{
    color: #f00;
    font-size: 16px;
}
</style>