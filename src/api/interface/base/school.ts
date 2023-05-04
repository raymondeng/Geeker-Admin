// 用户管理模块
export namespace School {
  export interface ReqSchoolParams {
    name: string;
  }
  export interface ResSchool {
    /**
     * 地址
     * @type {string}
     * @memberof SchoolSchema
     */
    address: string;
    /**
     * 允许同步标记
     * @type {string}
     * @memberof SchoolSchema
     */
    allow_sync_flag?: string;
    /**
     * 城市标识
     * @type {string}
     * @memberof SchoolSchema
     */
    city_id: string;
    /**
     * 社区标识
     * @type {string}
     * @memberof SchoolSchema
     */
    community_id: string;
    /**
     * 创建人
     * @type {string}
     * @memberof SchoolSchema
     */
    created_by: string;
    /**
     *
     * @type {string}
     * @memberof SchoolSchema
     */
    created_time?: string;
    /**
     * 当前学期id
     * @type {string}
     * @memberof SchoolSchema
     */
    cur_school_term_id: string;
    /**
     * 当前学年id
     * @type {string}
     * @memberof SchoolSchema
     */
    cur_school_year_id: string;
    /**
     * 区县标识
     * @type {string}
     * @memberof SchoolSchema
     */
    district_id: string;
    /**
     * 学校id
     * @type {string}
     * @memberof SchoolSchema
     */
    id: string;
    /**
     * 学期是否结束，0-未结束，1-已结
     * @type {number}
     * @memberof SchoolSchema
     */
    is_term_finished?: number;
    /**
     * 名称
     * @type {string}
     * @memberof SchoolSchema
     */
    name: string;
    /**
     * 已处理的学周标识
     * @type {string}
     * @memberof SchoolSchema
     */
    processed_school_week_id: string;
    /**
     * 处理中的学周标识
     * @type {string}
     * @memberof SchoolSchema
     */
    processing_school_week_id: string;
    /**
     * 省标识
     * @type {string}
     * @memberof SchoolSchema
     */
    province_id: string;
    /**
     * 乐观锁
     * @type {number}
     * @memberof SchoolSchema
     */
    revision?: number;
    /**
     * 学校状态close-未开放，open-开放
     * @type {string}
     * @memberof SchoolSchema
     */
    status?: string;
    /**
     * 街道标识
     * @type {string}
     * @memberof SchoolSchema
     */
    subdistrict_id: string;
    /**
     * 学期状态, ready-准备阶段，ongoing-进行，overdue-过期
     * @type {string}
     * @memberof SchoolSchema
     */
    term_status?: string;
    /**
     * 类型，school-学校,gov-政府机关,training-培训机构
     * @type {string}
     * @memberof SchoolSchema
     */
    type: string;
    /**
     * 更新人
     * @type {string}
     * @memberof SchoolSchema
     */
    updated_by: string;
    /**
     *
     * @type {string}
     * @memberof SchoolSchema
     */
    updated_time?: string;
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
