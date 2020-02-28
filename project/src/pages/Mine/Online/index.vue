<template>
    <div>
        <div class="head">
            <HeadNav back='返回' :title="title"/>
        </div>
    </div>
</template>

<script>
import HeadNav from "../HeadNav"
    export default {
        name:'Online',
        data(){
            return{
                title:'在线客服'
            }
        },
        components:{
            HeadNav
        }
    }
</script>

<style scoped>

</style>