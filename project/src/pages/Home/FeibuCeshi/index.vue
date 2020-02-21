<template>
    <div>
        <HeaderNav :title="title" />
        肺部测试
    </div>
</template>

<script>
import HeaderNav from "../HeaderNav"
    export default {
        name: "FeibuCeshi",
        data(){
            return{
                title: "腹部测试"
            }
        },
        components: {
            HeaderNav
        }
    }
</script>

<style scoped>

</style>