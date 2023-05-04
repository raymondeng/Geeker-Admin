// 用户管理模块
export namespace SchoolConfig {
  export interface ReqSchoolConfigParams {
    name: string;
  }
  export interface ResSchoolConfig {
    /**
     * 基础平台类型：none-无，wxwork-企业微信，dingtalk-钉钉，qqcampus1-腾讯智慧校园1.0，qqcampus2-腾讯智慧校园2.0
     * @type {string}
     * @memberof SchoolConfigSchema
     */
    base_platform_type: string;
    /**
     * 创建人
     * @type {string}
     * @memberof SchoolConfigSchema
     */
    created_by: string;
    /**
     *
     * @type {string}
     * @memberof SchoolConfigSchema
     */
    created_time?: string;
    /**
     * 钉钉配置
     * @type {string}
     * @memberof SchoolConfigSchema
     */
    ding_talk_config: string;
    /**
     * 记录标识
     * @type {string}
     * @memberof SchoolConfigSchema
     */
    id: string;
    /**
     * 腾讯智慧校园1.0配置
     * @type {string}
     * @memberof SchoolConfigSchema
     */
    qqcampus1_config: string;
    /**
     * 腾讯智慧校园2.0配置
     * @type {string}
     * @memberof SchoolConfigSchema
     */
    qqcampus2_config: string;
    /**
     * 乐观锁
     * @type {number}
     * @memberof SchoolConfigSchema
     */
    revision?: number;
    /**
     * 学校标识
     * @type {string}
     * @memberof SchoolConfigSchema
     */
    school_id: string;
    /**
     * 更新人
     * @type {string}
     * @memberof SchoolConfigSchema
     */
    updated_by: string;
    /**
     *
     * @type {string}
     * @memberof SchoolConfigSchema
     */
    updated_time?: string;
    /**
     * 微信配置
     * @type {string}
     * @memberof SchoolConfigSchema
     */
    wx_config: string;
    /**
     * 微信功能标记
     * @type {string}
     * @memberof SchoolConfigSchema
     */
    wx_flag?: string;
    /**
     * 企业微信配置
     * @type {string}
     * @memberof SchoolConfigSchema
     */
    wx_work_config: string;
  }
}
