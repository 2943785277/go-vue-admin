import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { CaptchaResult, LoginData, LoginResult } from './types';

/**
 * 登录API
 *
 * @param data {LoginData}
 * @returns
 */
export function loginApi(data: LoginData): AxiosPromise<LoginResult> {
  return request({
    url: 'User/login',
    method: 'post',
    data: data
  });
}

/**
 * 注销API
 */
export function logoutApi() {
  return request({
    url: 'User/Exit',
    method: 'get'
  });
}



/**
 * 获取验证码
 */
export function getCaptchaApi(): AxiosPromise<CaptchaResult> {
  return request({
    url: 'auth/captcha',
    method: 'get'
  });
}

/*
  关闭服务

*/
export function ServerClose(){
  return request({
    url: 'serverClose',
    method: 'get'
  });
}