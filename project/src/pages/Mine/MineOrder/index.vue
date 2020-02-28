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
        name:'MineOeder',
        data(){
            return{
                title:'我的订单'
            }
        },
        components:{
            HeadNav
        }
    }
</script>

<style scoped>
