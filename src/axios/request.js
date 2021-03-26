import axios from 'axios';
import Url from '../config/config.js';

const request = axios.create({
    baseURL: Url.BASE_URL,
    timeout: 3000,
    withCredentials: true
})

// 请求拦截器
request.interceptors.request.use(
    (config=>{
        return config
    })(err =>{
        return Promise.reject(err)
    })
)
// 响应拦截器
request.interceptors.response.use(
    (response=>{
        return response.data
    })(err =>{
        return Promise.reject(err)
    })
)

export default request