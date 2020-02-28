import Vue from 'vue'
import Vuex from 'vuex'

import loginModule from './modules/loginModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo:{
      name:'',
      sex:'',
      city:'',
      birthday:''
    },
    mineIllness:[],//我的慢性病
    babaIllness:[],//爸爸的慢性病
    mamaIllness:[],//妈妈的慢性病
    mineSimpleResults:[],//我的简易测试结果
    mineSpecialtyResults:[],//我的专业测试结果
    babaSimpleResults:[],//爸爸简易测试结果
    babaSpecialtyResults:[],//爸爸专业测试结果
    mamaSimpleResults:[],//妈妈简易测试结果
    mamaSpecialtyResults:[],//妈妈专业测试结果
  },
  mutations: {
    //添加用户信息
    addUserInfo(state,arr){
      state.userinfo = arr
    },
    //添加我的健康信息的慢性病
    addMineIllness(state,arr){
      state.mineIllness = arr
    },
    //添加爸爸的慢性病
    addBabaIllness(state,arr){
      state.babaIllness = arr
    },
    //添加妈妈的慢性病
    addMamaIllness(state,arr){
      state.mamaIllness = arr
    },
    //简易的
    addBabaSimpleResults(state,arr){
      state.babaSimpleResults = arr
    },
    addMamaSimpleResults(state,arr){
      state.mineSimpleResults = arr
    },
    addMineSimpleResults(state,arr){
      state.mamaSimpleResults = arr
    },
    //专业的 
    addBabaSpecialtyResults(state,arr){
      state.babaSimpleResults = arr
    },
    addMamaSpecialtyResults(state,arr){
      state.mineSimpleResults = arr
    },
    addMineSpecialtyResults(state,arr){
      state.mamaSimpleResults = arr
    },
    
  },
  actions: {
  },
  modules: {
    loginModule
  }
})
