// 用户管理模块
export namespace SchoolTerm {
  export interface ReqSchoolTermParams {
    name: string;
  }
  export interface ResSchoolTerm {
    /**
     * 创建人
     * @type {string}
     */
    created_by: string;
    /**
     *
     * @type {string}
     */
    created_time?: string;
    /**
     *
     * @type {string}
     */
    end_date?: string;
    /**
     * 学期信息id
     * @type {string}
     */
    id: string;
    /**
     * 学期名称
     * @type {string}
     */
    name: string;
    /**
     * 乐观锁
     * @type {number}
     */
    revision?: number;
    /**
     * 学校id
     * @type {string}
     */
    school_id: string;
    /**
     * 学校学年id
     * @type {string}
     */
    school_year_id: string;
    /**
     *
     * @type {string}
     */
    start_date?: string;
    /**
     * 学期状态，draft-草稿,open-上线,close-关闭
     * @type {string}
     */
    status: string;
    /**
     * 更新人
     * @type {string}
     */
    updated_by: string;
    /**
     *
     * @type {string}
     */
    updated_time?: string;
  }
}
