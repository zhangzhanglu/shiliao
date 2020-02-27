import axios from "../utils/http.js"
import base from "./base.js"

const api={
    //简易版接口数据
    getSimpleTest(){
        return axios.get( base.baseUrl+base.simpleTest);
    },
    //专业版接口数据
    getSpecialtyTest(){
        return axios.get( base.baseUrl+base.specialtyTest);
    },
    //帮助和反馈接口数据
    getHellpInfo(){
        return axios.get(base.baseUrl+base.hellpInfo)
    },
    //用户基础信息添加
    getBaseUserInfo(params){
        return axios.get(base.baseUrl+base.baseUserInfo,{
            params:params
        })
    }

}
export default api;