import axios from '../utils/http'
import base from './base'
const api = {
    // 登录
    login(params){
        return axios.post(base.baseUrl + base.login,params)
    },
    // 商品列表
    getfoodlist(params){
        return axios.get(base.baseUrl + base.foodlist,{
            params
        })
    },
    // 商品详情
    getfooddesc(params){
        return axios.get(base.baseUrl + base.fooddesc,{
            params
        })
    },
    // 
}

export default api;