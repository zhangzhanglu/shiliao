<template>
    <div>
        <div class="head">
            <HeadNav back='返回' :title="title"/>
        </div>
        <div class="setting-content">
            <div class="setting-info">
                <p>用户协议</p>
                <p>关于安心食疗</p>
                <p>去评分</p>
                <p>清理缓存</p>
            </div>
            <div class="setting-out">退出</div>
        </div>
    </div>
</template>

<script>
import HeadNav from "../HeadNav"
    export default {
        name:'Setting',
        data(){
            return{
                title:'设置',
            }
        },
        components:{
            HeadNav
        }
    }
</script>

<style scoped>
.setting-content{
    background: #f1f1f1;
    height: 617px;
    position: relative;
}
.setting-info>p{
    background: #fff;
    height: 40px;
    line-height: 40px;
    padding-left:10px;
    text-align:left;
    border-bottom: 1px solid #f1f1f1;  
}
.setting-out{
    width: 300px;
    height: 40px;
    color: #fff;
    line-height: 40px;
    background: #4ebf92;
    border-radius: 10px;
    position: absolute;
    top:230px;
    left: 35px;
}
</style>