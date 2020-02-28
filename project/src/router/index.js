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
// // 我的
// import MineCollect from "../pages/Mine/MineCollect"

import Login from '../pages/Login'
import FoundNot from '../pages/FoundNot'

//我的跳转页面路由
import Information from "../pages/Mine/Information"
import Message from "../pages/Mine/Message"
import Friend from "../pages/Mine/Friend"
import MineCollect from "../pages/Mine/MineCollect"
import MineOrder from "../pages/Mine/MineOrder"
import Online from "../pages/Mine/Online"
import Hellp from "../pages/Mine/Hellp"
import Account from "../pages/Mine/Account"
import Setting from "../pages/Mine/Setting"

import BasicInformation from "../pages/Mine/Information/BasicInformation"
import Illness from "../pages/Mine/Information/Illness"
import Test from "../pages/Mine/Information/Test"
import SimpleTest from "../pages/Mine/Information/Test/SimpleTest"
import SpecialtyTest from "../pages/Mine/Information/Test/SpecialtyTest"
import DidNotTest from "../pages/Mine/Friend/DidNotTest"
import HaveTest from "../pages/Mine/Friend/HaveTest"
import AddFriends from '../pages/Mine/Friend/AddFriends'

//私人定制跳转路由
import Condition from "../pages/Make/Condition"
import CurrentEntry from "../pages/Make/CurrentEntry"

import Shopping from "../pages/Shopping"
import ConfirmOrder from "../pages/Shopping/ConfirmOrder"

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
        component:Home
      },
      {
        path:"food",
        name:"Food",
        component:Food
      },
      {
        path:"make",
        name:"Make",
        component:Make
      },
      {
        path:"mine",
        name:"Mine",
        component:Mine
      },
      // 购物车的路由页面
      {
        path:"/shopping",
        name:"Shopping",
        component:Shopping
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
  //我的跳转路由
  {
    path:"/information",
    name:"Information",
    component:Information
  },
  {
    path:"/message",
    name:"Message",
    component:Message
  },
  {
    path:"/friend",
    name:"Friend",
    component:Friend
  },
  // {
  //   path:"/mineCollect",
  //   name:"MineCollect",
  //   component:MineCollect
  // },
  {
    path:"/mineOrder",
    name:"MineOrder",
    component:MineOrder
  },
  {
    path:"/online",
    name:"Online",
    component:Online
  },
  {
    path:"/hellp",
    name:"Hellp",
    component:Hellp
  },
  {
    path:"/account",
    name:"Account",
    component:Account
  },
  {
    path:"/setting",
    name:"Setting",
    component:Setting
  },
  //我的子路由页面
  {
    path:"/basicInformation",
    name:"BasicInformation",
    component:BasicInformation
  },
  {
    path:"/illness/:id",
    name:"Illness",
    component:Illness,
    beforeEnter(to,from,next){
      console.log(to)
      console.log(from)
      next()
    }
  },
  {
    path:"/test/:username",
    name:"Test",
    component:Test
  },
  {
    path:"/simpleTest/:username",
    name:"SimpleTest",
    component:SimpleTest
  },
  {
    path:"/specialtyTest/:username",
    name:"SpecialtyTest",
    component:SpecialtyTest
  },
  {
    path:"/didNotTest/:parent_name",
    name:"DidNotTest",
    component:DidNotTest
  },
  {
    path:"/haveTest/:username",
    name:"HaveTest",
    component:HaveTest
  },
  {
    path:"/addFriends",
    name:"AddFriends",
    component:AddFriends
  },
  
  // 我的页面
  {
    path: "/minecollect",
    name: "MineCollect",
    component: MineCollect
  },
  {
    path: '/login',
    name: 'Login',
    component:Login
  },
  {
    path:"*",
    name:"FoundNot",
    component:FoundNot
  },
  //私人定制的路由跳转
  {
    path:"/currententry",
    name:'CurrentEntry',
    component:CurrentEntry
  },
  {
    path:"/condition",
    name:'Condition',
    component:Condition
  },
  //确认订单路由
  {
    path:"/confirmOrder",
    name:"ConfirmOrder",
    component:ConfirmOrder
  }
  
]



const router = new VueRouter({
  linkActiveClass:"active",
  linkExactActiveClass:"exact-active",
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
