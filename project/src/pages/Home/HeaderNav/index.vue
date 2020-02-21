<template>
    <div class="header">
        <div class="back"><span>1</span>返回</div>
        <div class="title">{{title}}</div>
        <div class="share">3</div>
    </div>
</template>

<script>
    export default {
        name: "HeaderNav",
        data(){
            return{

            }
        },
        props: {
            title: {
                type: String,
                default: "肺部测试"
            }
        }
    }
</script>

<style scoped>
.header{
    display: flex;
    height: 44px;
    line-height: 44px;
    background: #46BF92;
    color: #fff;
}
.header .back{
    flex: 1;
}
.header .title{
    flex: 8;
}
.header .share{
    flex: 1;
}
</style>