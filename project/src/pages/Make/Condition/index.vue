<template>
  <div class="condition">
    <div class="conditionContent">
      <ul>
        <li v-for="(item,index) in conditionData" :key="index">
          <p class="recommend">
            根据你的
            <span class="conditionInfo">{{zhrngzhuangTitle}}</span>推荐：
          </p>
          <div class="recommendContent">
            <div class="recommendLeft">
              <img src="../../../../public/img/img1.png" />
            </div>
            <div class="recommendRight">
              <p class="recommendTitle">{{item.name}}</p>
              <p class="recommendEffect">{{item.gongxiao}}</p>
              <p class="recommendPrice">￥{{item.price}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Condition",
  data() {
    return {
      conditionData: [], //过滤后的数据
      zhengzhuang: [], //传递过来的症状的数据
      zhrngzhuangTitle:""
    };
  },
  props: ["zhengzhuangId"],
  watch: {
    zhengzhuangId(nvalue) {
      console.log(nvalue);
      // this.zhengzhuang = nvalue;
      //获取症状推荐的数据
      for (var i = 0; i < nvalue.length; i++) {
        this.zhrngzhuangTitle = nvalue[i].content;
        this.$api.getZhengzhuang({
            zId: nvalue[i].id
          })
          .then(res => {
            if (res.data.status === 200) {
              this.conditionData = this.zhengzhuang.concat(res.data.data.result);
              // console.log(this.conditionData);
            }else{
                alert(res.data.msg);
            }
          });
      }
    }
  }
};
</script>

<style scoped>
.conditionContent {
  margin: 10px 10px;
}
.conditionContent ul li {
  border-top: 1px solid #ccc;
  padding: 20px 0 10px;
  overflow: hidden;
}
.recommend {
  text-align: left;
}
.recommend .conditionInfo {
  font-weight: bold;
  margin: 0 5px;
}
.recommendContent {
  margin-top: 5px;
}
.recommendContent .recommendLeft {
  float: left;
}
.recommendContent .recommendRight {
  float: left;
  margin-left: 10px;
}
.recommendRight .recommendTitle {
  font-size: 18px;
  font-weight: bold;
}
.recommendRight .recommendEffect {
  margin: 12px 0;
}
.recommendRight .recommendPrice {
  color: #d16d37;
  font-size: 20px;
  font-weight: bold;
}
</style>