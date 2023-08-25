/**
 * 登录用户信息
 */
export interface UserInfo {
  Name:     string //名称
	Account:  string  //账户
	Email:    string //邮箱
	Age :     string //年龄
	Portrait: string //头像
	Role:     string //权限
	Phone:    string  //手机号
	State:    number    //状态，0-未激活，1-审核中，2-审核未通过，3-已审核
}

/**
 * 用户查询对象类型
 */
export interface UserQuery extends PageQuery {
  keywords?: string;
  status?: number;
  OrganizatiId: number | string;
}

/**
 * 用户分页对象
 */
export interface UserPageVO {
  /**
   * 用户头像地址
   */
  Portrait?: string;
  /**
   * 创建时间
   */
  createTime?: Date;
  /**
   * 部门名称
   */
  deptName?: string;
  /**
   * 用户邮箱
   */
  Email?: string;
  /**
   * 性别
   */
  genderLabel?: string;
  /**
   * 用户ID
   */
  id?: number;
  /**
   * 手机号
   */
  Phone?: string;
  /**
   * 用户昵称
   */
  Name?: string;
  /**
   * 角色名称，多个使用英文逗号(,)分割
   */
  roleNames?: string;
  /**
   * 用户状态(1:启用;0:禁用)
   */
  State?: number;
  /**
   * 用户名
   */
  username?: string;
}

/**
 * 用户表单类型
 */
export interface UserForm {
  /**
   * 用户头像
   */
  avatar?: string;
  /**
   * 部门ID
   */
  deptId?: number;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 性别
   */
  gender?: number;
  /**
   * 用户ID
   */
  id?: number;
  mobile?: string;
  /**
   * 昵称
   */
  nickname?: string;
  /**
   * 角色ID集合
   */
  roleIds?: number[];
  /**
   * 用户状态(1:正常;0:禁用)
   */
  status?: number;
  /**
   * 用户名
   */
  username?: string;
}
