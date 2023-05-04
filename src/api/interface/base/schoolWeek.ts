// 用户管理模块
export namespace SchoolWeek {
  export interface ReqSchoolWeekParams {
    name: string;
  }
  export interface ResSchoolWeek {
    /**
     * 创建人
     * @type {string}
     * @memberof SchoolWeekSchema
     */
    created_by: string;
    /**
     *
     * @type {string}
     * @memberof SchoolWeekSchema
     */
    created_time?: string;
    /**
     *
     * @type {string}
     * @memberof SchoolWeekSchema
     */
    end_date?: string;
    /**
     * 学周id
     * @type {string}
     * @memberof SchoolWeekSchema
     */
    id: string;
    /**
     * 学周名称
     * @type {string}
     * @memberof SchoolWeekSchema
     */
    name: string;
    /**
     * 乐观锁
     * @type {number}
     * @memberof SchoolWeekSchema
     */
    revision?: number;
    /**
     * 学校id
     * @type {string}
     * @memberof SchoolWeekSchema
     */
    school_id: string;
    /**
     * 学校学期标识
     * @type {string}
     * @memberof SchoolWeekSchema
     */
    school_term_id: string;
    /**
     * 学校学年标识
     * @type {string}
     * @memberof SchoolWeekSchema
     */
    school_year_id: string;
    /**
     *
     * @type {string}
     * @memberof SchoolWeekSchema
     */
    start_date?: string;
    /**
     * 学周状态，draft-草稿,open-上线,close-关闭
     * @type {string}
     * @memberof SchoolWeekSchema
     */
    status: string;
    /**
     * 更新人
     * @type {string}
     * @memberof SchoolWeekSchema
     */
    updated_by: string;
    /**
     *
     * @type {string}
     * @memberof SchoolWeekSchema
     */
    updated_time?: string;
    /**
     * 学期周序号，从0开始
     * @type {number}
     * @memberof SchoolWeekSchema
     */
    week_no?: number;
  }
}
