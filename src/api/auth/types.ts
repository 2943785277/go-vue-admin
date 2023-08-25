/**
 * 登录请求参数
 */
export interface LoginData {
  /**
   * 用户名
   */
  username?: string;
  /**
   * 密码
   */
  password?: string;

  /**
   * 验证码ID
   */
  CaptchaID?: string;

  /**
   * 验证码
   */
  Captcha?: string;
}

/**
 * 登录响应
 */
export interface LoginResult {
  /**
   * 访问token
   */
  token?: string;
  /**
   * 过期时间(单位：毫秒)
   */
  // expires?: number;
  // /**
  //  * 刷新token
  //  */
  // refreshToken?: string;
  // /**
  //  * token 类型
  //  */
  // tokenType?: string;
}

/**
 * 验证码响应
 */
export interface CaptchaResult<T = any> {
	Code: number;
	message: string;
	data: T;
  /**
   * 验证码缓存key
   */
  // data: string;
  /**
   * 验证码图片Base64字符串
   */
  verifyCodeBase64: string;
}

