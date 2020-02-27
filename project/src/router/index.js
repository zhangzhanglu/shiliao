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
import Login from '../pages/Login'
import FoundNot from '../pages/FoundNot'

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
  {
    path:"/feibuceshi",
    name:"FeibuCeshi",
    component:FeibuCeshi,
  },
  {
    path: "/meirishipu",
    name: "MeiriShipu",
    component: MeiriShipu
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
