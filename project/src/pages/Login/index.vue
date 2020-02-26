<template>
    <div>
       <div class="login">
            <input type="text" placeholder="请输入用户名" v-model="form.username"><br>
            <input type="password" placeholder="请输入密码" v-model="form.password"><br>
            <button @click="onSubmit">登录</button>
       </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex"
    export default {
        name:"Login",
        data() {
            return {
                form: {}
            }
        },
        methods:{
            ...mapMutations("loginModule",["setToken"]),
            onSubmit(){
                this.$api.login({
                    username:this.form.username,
                    password:this.form.password,
                }).then(res=>{
                    // 存储1.vuex,2.本地
                    if(res.data.code === 200){
                        this.setToken(res.data.token)
                        localStorage.setItem("token",res.data.token)
                        this.$router.replace('/')
                    }else{
                        alert(res.data.msg)
                    }
                })
            }
        }
    }
</script>

<style scoped>
.login{
    margin-top: 200px;
}
input{
    width: 300px;
    height: 40px;
    border: 1px solid #0f0;
    font-size: 16px;
}
button{
    width: 100px;
    height: 30px;
    background: #00f;
    color: #fff;
}
</style>