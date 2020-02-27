<template>
    <div>
        <div class="headNav">
            <div class="headNav-left" @click="goback">返回</div>
            <div class="headNav-center"> <span>{{title}}</span> </div>
            <div class="headNav-right" @click="finishHandle">完成</div>
    </div>
        <div class="basisInformation-content">
            <div class="info">
                <div class="name"><p>名字</p><input type="text" @blur="getname"  placeholder="点击输入" :value="userInfoObj.name"></div>
                <div class="sex"><p>性别</p> <span>{{userInfoObj.sex}}</span><span class="man"><span @click="getman">男</span></span> <span class="woman" ><span @click="getwoman">女</span></span>
                </div>
                <div class="city"><p>城市</p> 
                    <el-cascader
                        size="large"
                        :options="options"
                        :placeholder="userInfoObj.city"
                        v-model="selectedOptions"
                        @change="handleChange"
                    ></el-cascader>
                </div>
                <!-- <div class="birthday"><p></p> <span class="select">></span></div> -->
                <div  class="card birthday">
                    <div class="row">
                        <span>生日:</span>
                        <date-picker @change="getbirthday"  :date="startTime" :option="option" :limit="limit"></date-picker>
                    </div>
                </div>
                <!---------------生日结束--------------->
            </div>
        </div>
    </div>
</template>

<script>
import HeadNav from '../../HeadNav'
//城市插件
import { regionDataPlus,CodeToText,TextToCode} from 'element-china-area-data'
//生日插件
import myDatepicker from 'vue-datepicker/vue-datepicker-es6.vue'
import { mapState } from 'vuex';

    export default {
        name:'BasisInformation',
        data(){
            return{
                title:'基础信息',
                userInfoObj:{
                    name:'',
                    sex:'',
                    city:'',
                    birthday:'', 
                },
                options:regionDataPlus,//provinceAndCityDataPlus是省市二级联动数据
                selectedOptions:[],
                startTime:{
                    time:''
                },
                endtime:{
                    time:''
                },
                option: {
                    type: 'day',
                    week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    month: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    format: 'YYYY-MM-DD',
                    placeholder: '请选择日期?',
                    // placeholder: '',
                    // value:this.userInfoObj.birthday,
                    inputStyle: {
                        'display': 'inline-block',
                        'padding': '6px',
                        'line-height': '22px',
                        'font-size': '16px',
                        'border': '2px solid #fff',
                        'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
                        'border-radius': '2px',
                        'color': '#5F5F5F'
                    },
                    color: {
                        header: '#1b98ee',
                        headerText: '#fff'
                    },
                    buttons: {
                        ok: '确定',
                        cancel: '取消'
                    },
                    overlayOpacity: 0.5, // 0.5 as default
                    dismissible: true // as true as default
                    },
                timeoption: {
                    type: 'min',
                    week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    month: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    format: 'YYYY-MM-DD HH:mm'
                },
                multiOption: {
                    type: 'multi-day',
                    week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    month: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    format: 'YYYY-MM-DD HH:mm'
                },
                limit: [{
                    type: Array,
                    default:function _default(){
                        return [];
                    }
                }],
            //     done: value => { // 点击确认执行的回调函数，会把当前选择的时间传入进来
            //     // 把选择的时间赋值给先前定义好的变量，显示在页面
            //     this.userInfoObj.birthday = value;
            //   }
            }
        },
        computed:{
            ...mapState(['userinfo'])
            
        },
        mounted(){
            console.log(window.history)
            if(localStorage.getItem('userinfo')){
            console.log(localStorage.getItem('userinfo'))
            //把本地数据赋值给userInfoObj 这个对象
            this.userInfoObj = JSON.parse(localStorage.getItem('userinfo'))
            console.log(JSON.parse(localStorage.getItem('userinfo')))
            //设置生日显示
            this.option.placeholder = JSON.parse(localStorage.getItem('userinfo')).birthday
            // TextToCode(this.userInfoObj.city)
            console.log(this.userInfoObj.city)
            
            }
        },
        components:{
            HeadNav,
            'date-picker': myDatepicker
        },
        methods:{
            //返回上一级页面
            goback(){
                window.history.back()
                
            },
           
            //获取姓名
            getname(e){
                // console.log(e.target.value)
                this.userInfoObj.name = e.target.value
            },
            //获取性别
            getman(e){
                // console.log(e.target.innerHTML)
                this.userInfoObj.sex = e.target.innerHTML
            },
            getwoman(e){
                // console.log(e.target.innerHTML)
                this.userInfoObj.sex = e.target.innerHTML
            },
            //获取城市
             handleChange(value){
                var ctt = CodeToText[value[0]] + CodeToText[value[1]]+ CodeToText[value[2]]
                 console.log(ctt)
                 console.log(CodeToText[value[0]])
                this.userInfoObj.city = ctt
            },
           //获取日期
           getbirthday(value){
                console.log(value)
               this.userInfoObj.birthday = value
              
           },
           //完成 存储到仓库和本地
           finishHandle(){
               this.$store.commit('addUserInfo',this.userInfoObj)
               localStorage.setItem('userinfo',JSON.stringify(this.userInfoObj))
               console.log(this.userInfoObj)
            //    this.$api.getBaseUserInfo({
            //        name:this.userInfoObj.name,
            //        sex:this.userInfoObj.sex,
            //        city:this.userInfoObj.city,
            //        birthday:this.userInfoObj.birthday
            //    })
            //    .then(res=>{
            //        console.log(res)
            //    })
           }   
        }
    }
</script>

<style scoped>
/* head */
.headNav{
    width: 100%;
    height: 50px;
    background: #43BF92;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    color: #fff;  
    display: flex;  
}
.headNav-left,.headNav-right{
    width: 90px;
}
.headNav-center{
    flex: 1;
}
/* ---------------------------- */
.basisInformation-content{
    background: #f1f1f1;
    height: 617px;
}
.basisInformation-content .info{
    margin-top:10px;
    
}
.basisInformation-content .info>div{
    padding:0 10px; 
    background: #fff;
    height: 40px;
    line-height: 40px;
    text-align: left;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
}
.basisInformation-content .info>div>p {
    width: 50%;
}

.sex,.city,.birthday{
    position: relative;
}
.man,.woman{
    display: block;
    width: 30px;
    height: 20px;
    border: 1px solid #4ebf92;
    color: #4ebf92;
    border-radius: 10px;
    position: absolute;
}
.man{
    top: 10px;
    right: 60px;
}
.woman{
    top: 10px;
    right: 10px;
}
.man>span , .woman>span{
    position: absolute;
    top: -11px;
    left: 7px;
}
.city>span ,.birthday>span{
    position: absolute;
    top: 0px;
    right: 10px;
}

</style>