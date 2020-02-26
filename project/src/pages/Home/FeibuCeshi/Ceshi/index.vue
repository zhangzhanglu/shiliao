<template>
    <div class="ceshi">
        <HeaderNav title="肺部测试" />
        <div class="share">
            <img src="../../images/share.png" alt="">
        </div>
        <CeshiQuery :lisDatas="lisDatas" />
    </div>
</template>

<script>
import HeaderNav from "../../components/HeaderNav"
import CeshiQuery from "../../components/CeshiQuestion"

    export default {
        name: "Ceshi",
        data(){
            return {
                lisDatas: []
            }
        },
        components: {
            HeaderNav,
            CeshiQuery
        },

        created() {
            this.$api.getCeshiData().then(res => {
                this.lisDatas = res.data.data
            })
        }
    }
</script>

<style scoped>
.share{
    width: 20px;
    height: 20px;
    position: fixed;
    top: 12px;
    right: 10px;
}
.share img{
    width: 100%;
    height: 100%;
}
</style>