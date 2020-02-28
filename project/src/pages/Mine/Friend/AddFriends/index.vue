<template>
    <div>
        <div class="head">
            <HeadNav back="返回" :title="title"/>
        </div>
        <div class="addFrineds-content">
            <div class="pic">
                <p>我们为不同性别，年龄和地区的人设计了不同的定制服务，请认真填写。</p>
                <img src="../../images/2.png" alt="">
                <div class="changeimg">修改头像</div>
            </div>
            <div class="info">
                <div class="name"><p>名字</p><input @blur="getname" type="text" placeholder="点击输入"></div>
                <div class="sex"><p>性别</p>
                <span>{{sex}}</span>
                <span class="man"><span @click="getman">男</span></span>
                <span class="woman" ><span @click="getwoman">女</span></span>
                </div>
                <!-- <div class="city"><p>城市</p> <span class="select">></span> </div>
                <div class="birthday"><p>生日</p> <span class="select">></span></div> -->
                <div class="city"><p>城市</p> 
                    <el-cascader
                        size="large"
                        :options="options"
                        v-model="selectedOptions"
                        @change="handleChange"
                    ></el-cascader>
                </div>
                <div class="card birthday">
                    <div class="row">
                        <span>生日:</span>
                        <date-picker @change="birthday" :date="startTime" :option="option" :limit="limit"></date-picker>
                    </div>
                </div>
                <!---------------生日结束--------------->
                <div class="illness"><p>慢性病</p> <span class="select"><router-link to='/illness'>></router-link></span></div>
            </div>
            <div class="finish" @click="finishHandle">完成</div>
        </div>
    </div>
</template>

<script>
import HeadNav from '../../HeadNav'
//城市插件
import { regionDataPlus,CodeToText} from 'element-china-area-data'
//生日插件
import myDatepicker from 'vue-datepicker/vue-datepicker-es6.vue'
    export default {
        nsme:'AddFriends',
        data(){
            return{
                title:'添加家人/朋友',
                name:'',
                sex:"",
                city:'',
                
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
                }]
            }
        },
        components:{
            HeadNav,
            'date-picker': myDatepicker
        },
        methods:{
             handleChange(value){
                var ctt = CodeToText[value[0]] + CodeToText[value[1]]+CodeToText[value[2]]
                console.log(ctt)
                this.city = ctt
            },
            //获取姓名
            getname(e){
                console.log(e.target.value)
                this.name = e.target.value
            },
            //获取性别
            getman(e){
                console.log(e.target.innerHTML)
                this.sex=e.target.innerHTML
            },
            getwoman(e){
                console.log(e.target.innerHTML)
                this.sex=e.target.innerHTML
            },
            //获取日期
           birthday(value){
               console.log(value)
           },
            finishHandle(){
                console.log(this.sex)
            }
        }
    }
</script>

<style scoped>
.addFrineds-content{
    background: #f1f1f1;
    height: 617px;
}
.addFrineds-content .pic{
    margin-bottom: 30px;
    background: #fff;
    padding: 10px 30px 20px 30px; 
}
.addFrineds-content .pic img{
    width: 80px;
    height: 80px;
    margin: 20px 0 ;
}
.addFrineds-content .changeimg{
    width: 80px;
    height: 30px;
    line-height: 30px;
    background: #f1f1f1;
    border-radius: 5px;
    border: 1px solid #999;
    margin: 0 auto;
}
.addFrineds-content .info>div{
    background: #fff;
    height: 40px;
    line-height: 40px;
    text-align: left;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    padding-left: 30px;
}
.addFrineds-content .info>div>p {
    width: 50%;
}

.sex,.city,.birthday,.illness{
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
.city>span ,.birthday>span,.illness>span{
    position: absolute;
    top: 0px;
    right: 10px;
}
.finish{
    width: 300px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    background: #4ebf92;
    margin: 20px auto;
    border-radius: 5px;
}
</style>