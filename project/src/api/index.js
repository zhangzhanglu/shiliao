import axios from "../utils/http"
import base from "./base"
const api = {
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
}
export default api