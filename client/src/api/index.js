/**
 * Created by LiuTao on 2017/12/1.
 */
import axios from 'axios'
import API from './address.js'
const baseURL = "http://localhost:3001"
const request = axios.create({
  baseURL: baseURL,
  withCredentials: true
});
// 登录
export const login = (userName,password) => request.post(API.login,{
  "username": userName,
  "password": password
});
//注册
export const sign = (userName,phone,password) => request.post(API.sign,{
  "username": userName,
  "phone":phone,
  "password": password
});
