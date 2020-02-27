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
        name:'Account',
        data(){
            return{
                title:'账号和其他'
            }
        },
        components:{
            HeadNav
        }
    }
</script>

<style scoped>

</style>