import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '../pages/Layout'
import Home from '../pages/Home'
import Food from '../pages/Food'
import Make from '../pages/Make'
import Mine from '../pages/Mine'
// 首页跳转页面路由
import FeibuCeshi from "../pages/Home/FeibuCeshi"
import MeiriShipu from "../pages/Home/MeiriShipu"
import Ceshi from "../pages/Home/FeibuCeshi/Ceshi"
import CeshiResult from "../pages/Home/FeibuCeshi/CeshiResult"
import ContentList from "../pages/Home/components/ContentList"
// 我的
// import MineCollect from "../pages/Mine/MineCollect"

import Login from '../pages/Login'
import FoundNot from '../pages/FoundNot'
import DetailsPage from '../pages/Food/DetailsPage'


Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children:[
      {
        path:"/",
        name:"Home",
        component:Home,
        meta:{
          isLogin:true
        }
      },
      {
        path:"food",
        name:"Food",
        component:Food,
        meta:{
          isLogin:true
        }
      },
      {
        path:"make",
        name:"Make",
        component:Make,
        meta:{
          isLogin:true
        }
      },
      {
        path:"mine",
        name:"Mine",
        component:Mine,
        meta:{
          isLogin:true
        }
      }
    ]
  },
  // 首页跳转路由
  // 1、每日测试
  {
    path:"/home/feibuceshi",
    name:"FeibuCeshi",
    component:FeibuCeshi,
  },
  {
    path: "/home/feibuceshi/ceshi",
    name: "Ceshi",
    component: Ceshi
  },
  {
    path: "/home/feibuceshi/ceshiresult",
    name: "CeshiResult",
    component: CeshiResult
  },
  {
    path: "/home/contentlist",
    name: "ContentList",
    component: ContentList
  },
  // 2、每日食谱
  {
    path: "/meirishipu",
    name: "MeiriShipu",
    component: MeiriShipu
  },
  // 我的页面
  // {
  //   path: "/minecollect",
  //   name: "MineCollect",
  //   component: MineCollect
  // },
  {
    path: '/login',
    name: 'Login',
    component:Login
  },
  {
    path:"/dpage/:id",
    name:"DetailsPage",
    component:DetailsPage,
    props:true
  },
  {
    path:"*",
    name:"FoundNot",
    component:FoundNot
  }
]



const router = new VueRouter({
  linkActiveClass:"active",
  linkExactActiveClass:"exact-active",
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to,form,next)=>{
//   // 哪些页面需要必须登录后才能查看
//   if(to.meta.isLogin){
//     // 需要登录
//     const token = store.state.loginModule.token;
//     // 登录成功和失败判断
//     if(token){
//       next();
//     }else{
//       next({
//         path:'/login'
//       })
//     }
//   }else{
//     next();
//   }
// })

export default router
