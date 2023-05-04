// 用户管理模块
export namespace User {
  export interface ReqUserParams {
    username: string;
    gender: number;
    idCard: string;
    email: string;
    address: string;
  }
  export interface ResSchoolUser {
    /**
     * 学校用户标识
     */
    id: string;
    /**
     * 别名
     */
    alias_name: string;
    /**
     * 头像url
     */
    avatar: string;
    /**
     * 创建人
     */
    created_time?: string;
    /**
     * 当前学生
     */
    cur_student_id: string;
    /**
     * 职务职位信息
     */
    duty: string;
    /**
     * 用户ic卡号
     */
    ic_card_id: string;
    /**
     * 入职日期 入学日期/入职日期（仅学生、老师、退休老师时返回，家长不返回）
     */
    join_date: string;
    /**
     * 姓名
     */
    name: string;
    /**
     * 手机号 手机号（安全校验字段，校验不通过时不返回。）
     */
    phone: string;
    /**
     * 腾讯校园主部门id 仅对教工人员有效
     */
    role?: string;
    /**
     * 学校标识
     */
    school_id: string;
    /**
     * 用户状态 normal-正常，lock-锁定，archive-删除
     */
    status?: string;
    /**
     * 同步被删除标记
     */
    sync_removed_flag?: string;
    /**
     * 头像缩略图url
     */
    thumb_avatar: string;
    updated_time?: string;
    /**
     * 平台用户标识
     */
    user_id: string;
    /**
     * 学校工号
     */
    user_no: string;
  }
  export interface ResStatus {
    userLabel: string;
    userValue: number;
  }
  export interface ResGender {
    genderLabel: string;
    genderValue: number;
  }
  export interface ResDepartment {
    id: string;
    name: string;
    children?: ResDepartment[];
  }
  export interface ResRole {
    id: string;
    name: string;
    children?: ResDepartment[];
  }
}
