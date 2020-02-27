<template>
  <div>
    <!-- 身体症状 -->
    <div class="physicalSymptoms">
      <div class="psTitle">
        <span class="titleName">身体症状</span>
        <span class="titleDetails" @click="psBtn">></span>
      </div>
      <div class="psContents" v-show="psContent">
        <p class="bgColor"></p>
        <ul class="psContent">
          <li v-for="(item,index) in psData" :key="index">
            <div
              class="contentBtn"
              @click="psClickBtn(item)"
              :class="{activated:item.isActivated==1}"
            ></div>
            <div class="contentInfo">{{item.content}}</div>
          </li>
        </ul>
        <div class="contentAdd">
          <input type="text" v-model="psMsg" placeholder="自定义" />
          <span class="addBtn" @click="psClickHeadle">+</span>
        </div>
      </div>
    </div>
    <!-- 今日目标 -->
    <div class="target">
      <div class="tgTitle">
        <span class="titleName">今日目标</span>
        <span class="titleDetails" @click="targetBtn">></span>
      </div>
      <div class="tgContents" v-show="targetContent">
        <p class="bgColor"></p>
        <ul class="tgContent">
          <li v-for="(item,index) in targetData" :key="index">
            <div
              class="contentBtn"
              @click="targetClickBtn(item)"
              :class="{activated:item.isActivated==1}"
            ></div>
            <div class="contentInfo">{{item.content}}</div>
          </li>
        </ul>
        <div class="contentAdd">
          <input type="text" v-model="tgMsg" placeholder="自定义" />
          <span class="addBtn" @click="tgClickHeadle">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurrentEntry",
  data() {
    return {
      psContent: false, //身体症状显示与隐藏
      targetContent: false, //今日目标显示隐藏
      psMsg: "", //身体症状input数据双向绑定
      tgMsg: "", //身体症状input数据双向绑定
      psData: "", //身体症状的数据
      targetData: "", //今日目标的数据
      zhengzhuangArr: [] //选中症状id的数组
    };
  },
  mounted() {
    this.http();
  },
  methods: {
    http() {
      //获取今日症状的数据
      this.$api.getPhysicalSymptoms().then(res => {
        // console.log(res.data.data);
        if (res.data.status === 200) {
          this.psData = res.data.data.result;
        } else {
          alert(res.data.msg);
        }
      }),
        //获取今日目标的数据
        this.$api.getTarget().then(res => {
          // console.log(res.data.data);
          if (res.data.status === 200) {
            this.targetData = res.data.data.result;
          } else {
            alert(res.data.msg);
          }
        });
    },
    //身体症状点击事件
    psBtn() {
      this.psContent = !this.psContent;
    },
    //今日目标点击事件
    targetBtn() {
      this.targetContent = !this.targetContent;
    },
    // 点击选中事件
    psClickBtn(item) {
      console.log(item);
      if(this.zhengzhuangArr.indexOf(item) == -1){
        this.zhengzhuangArr.push(item);
      }else{
        this.zhengzhuangArr = this.zhengzhuangArr.filter((i)=>i!=item);
      }
      console.log(this.zhengzhuangArr);
      if (item.isActivated == 0) {
        item.isActivated = 1;
      } else {
        item.isActivated = 0;
      }
      //传递数据
      this.$emit("zhengzhuangId", this.zhengzhuangArr);
    },

    targetClickBtn(item) {
      if (item.isActivated == 0) {
        item.isActivated = 1;
      } else {
        item.isActivated = 0;
      }
    },
    //   添加事件
    psClickHeadle() {
      // console.log(this.psMsg);
      //身体症状添加数据
      this.$api
        .getAddPhysicalSymptoms({
          content: this.psMsg
        })
        .then(res => {
          // console.log(res);
          if (res.data.status === 200) {
            //刷新页面
            this.http();
            this.psMsg=""
          } else {
            alert(res.data.msg);
          }
        });
    },
    //点击症状调理获取药品
    psClick() {
      // console.log(this.psMsg);
      //身体症状添加数据
    },
    // 今日目标添加事件
    tgClickHeadle() {
      // console.log(this.tgMsg);
      //今日目标添加数据
      this.$api
        .getAddTarget({
          content: this.tgMsg
        })
        .then(res => {
          // console.log(res);
          if (res.data.status === 200) {
            //刷新页面
            this.http();
            this.tgMsg="";
          } else {
            alert(res.data.msg);
          }
        });
    }
  }
};
</script>

<style scoped>
.physicalSymptoms,
.target {
  font-size: 18px;
}
.physicalSymptoms .psTitle,
.target .tgTitle {
  margin: 20px 30px;
  overflow: hidden;
}

.titleName {
  float: left;
  font-size: 20px;
}
.titleDetails {
  float: right;
}
.bgColor {
  width: 100%;
  height: 5px;
  background-color: #43bf92;
}
.psContent,
.tgContent {
  margin: 20px 30px;
  overflow: hidden;
}
.psContent li,
.tgContent li {
  float: left;
  width: 50%;
  overflow: hidden;
  margin: 5px 0;
}
.contentBtn {
  float: left;
  width: 15px;
  height: 15px;
  border: 2px solid #43bf92;
  border-radius: 5px;
  margin-top: 3px;
  margin-right: 5px;
}
.activated {
  background-color: #43bf92;
}
.contentInfo {
  float: left;
  width: auto;
  border: 1px solid #6e6e6e;
  border-radius: 15px;
  padding: 0 10px;
}
.contentAdd {
  width: 150px;
  height: 30px;
  border: 1px solid #bbb;
  border-radius: 15px;
  margin: 0 auto;
  color: #bbb;
}
.contentAdd input {
  width: 100px;
  height: 25px;
  font-size: 16px;
  position: relative;
  top: -5px;
  left: 0;
  outline: none;
  color: #6e6e6e;
}
.contentAdd .addBtn {
  font-size: 25px;
  height: 20px;
  position: relative;
  top: -3px;
  left: 0;
  color: #bbb;
}
.target {
  margin-bottom: 60px;
}
</style>