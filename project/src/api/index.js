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
    // 首页主要内容接口
    getHomeData(){
        return axios.get(base.baseUrl + base.homeData);
    },
    // 测试的题目接口
    getCeshiData(){
        return axios.get(base.baseUrl + base.ceshiData);
    },
    // 测试结果接口
    getCeshiResultData(){
        return axios.get(base.baseUrl + base.ceshiResultData);
    },
    // 每日食谱接口
    getMeirishipuData(){
        return axios.get(base.baseUrl + base.meirishipuData);
    },

    
    //获取身体症状数据接口
    getPhysicalSymptoms(){
        return axios.get(base.baseUrl + base.physicalSymptoms);
    },
    //获取今日目标数据接口
    getTarget(){
        return axios.get(base.baseUrl + base.target);
    },
    //身体症状添加数据接口
    getAddPhysicalSymptoms(params){
        return axios.get(base.baseUrl + base.addPhysicalSymptoms,{
            params
        });
    },
    //今日目标添加数据接口
    getAddTarget(params){
        return axios.get(base.baseUrl + base.addTarget,{
            params
        });
    },
    //症状调理数据接口
    getZhengzhuang(params){
        return axios.get(base.baseUrl + base.zhengzhuang,{
            params
        });
    }

}
export default api;