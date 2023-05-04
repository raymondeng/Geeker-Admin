// 用户管理模块
export namespace SchoolCalendar {
  export interface ReqSchoolCalendarParams {
    name: string;
  }
  export interface ResSchoolCalendar {
    /**
     * 创建人
     * @type {string}
     * @memberof SchoolCalendarSchema
     */
    created_by: string;
    /**
     *
     * @type {string}
     * @memberof SchoolCalendarSchema
     */
    created_time?: string;
    /**
     * 日期
     * @type {string}
     * @memberof SchoolCalendarSchema
     */
    date: string;
    /**
     * 日期类型，weekday-工作日,weekend-周末,holiday-假日
     * @type {string}
     * @memberof SchoolCalendarSchema
     */
    day_type: string;
    /**
     * 说明
     * @type {string}
     * @memberof SchoolCalendarSchema
     */
    desc: string;
    /**
     * 学校日历标识
     * @type {string}
     * @memberof SchoolCalendarSchema
     */
    id: string;
    /**
     * 乐观锁
     * @type {number}
     * @memberof SchoolCalendarSchema
     */
    revision?: number;
    /**
     * 学校标识
     * @type {string}
     * @memberof SchoolCalendarSchema
     */
    school_id: string;
    /**
     * 学期标识
     * @type {string}
     * @memberof SchoolCalendarSchema
     */
    school_term_id: string;
    /**
     * 学周标识
     * @type {string}
     * @memberof SchoolCalendarSchema
     */
    school_week_id: string;
    /**
     * 学年标识
     * @type {string}
     * @memberof SchoolCalendarSchema
     */
    school_year_id: string;
    /**
     * 更新人
     * @type {string}
     * @memberof SchoolCalendarSchema
     */
    updated_by: string;
    /**
     *
     * @type {string}
     * @memberof SchoolCalendarSchema
     */
    updated_time?: string;
    /**
     * 周序列号，1~7
     * @type {number}
     * @memberof SchoolCalendarSchema
     */
    week_day_no: number;
  }
}
