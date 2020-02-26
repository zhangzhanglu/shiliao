<template>
    <div>
        <div class="header">
            <p> {{title}} </p>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Header",
        props:{
            title:{
                type:String,
                required:true
            }
        }
    }
</script>

<style scoped>
.header{
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #43bf92;
    color: #fff;
    font-size: 22px;
}
</style>