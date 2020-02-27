import axios from "../utils/http"
import base from "./base"

const api = {
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