// 用户管理模块
export namespace SchoolYear {
  export interface ReqSchoolYearParams {
    name: string;
  }
  export interface ResSchoolYear {
    /**
     * 创建人
     * @type {string}
     * @memberof SchoolYearSchema
     */
    created_by: string;
    /**
     *
     * @type {string}
     * @memberof SchoolYearSchema
     */
    created_time?: string;
    /**
     * 学年信息id
     * @type {string}
     * @memberof SchoolYearSchema
     */
    id: string;
    /**
     * 学年名称
     * @type {string}
     * @memberof SchoolYearSchema
     */
    name: string;
    /**
     * 乐观锁
     * @type {number}
     * @memberof SchoolYearSchema
     */
    revision?: number;
    /**
     * 学校id
     * @type {string}
     * @memberof SchoolYearSchema
     */
    school_id: string;
    /**
     * 学年状态，draft-草稿,open-上线,close-关闭
     * @type {string}
     * @memberof SchoolYearSchema
     */
    status: string;
    /**
     * 更新人
     * @type {string}
     * @memberof SchoolYearSchema
     */
    updated_by: string;
    /**
     *
     * @type {string}
     * @memberof SchoolYearSchema
     */
    updated_time?: string;
  }
}
