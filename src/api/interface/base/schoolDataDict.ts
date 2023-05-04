// 用户管理模块
export namespace SchoolDataDict {
  export interface ReqSchoolDataDictParams {
    name: string;
  }
  export interface ResSchoolDataDict {
    /**
     * 字典码
     * @type {string}
     * @memberof SchoolDataDictSchema
     */
    code: string;
    /**
     * 创建人
     * @type {string}
     * @memberof SchoolDataDictSchema
     */
    created_by: string;
    /**
     *
     * @type {string}
     * @memberof SchoolDataDictSchema
     */
    created_time?: string;
    /**
     * 字典值,根目录为0
     * @type {number}
     * @memberof SchoolDataDictSchema
     */
    dict_key?: number;
    /**
     * 字典名称
     * @type {string}
     * @memberof SchoolDataDictSchema
     */
    dict_value: string;
    /**
     * 数据字典记录标识
     * @type {string}
     * @memberof SchoolDataDictSchema
     */
    id: string;
    /**
     * 排序，在父部门中的次序值，order值大的排序靠前
     * @type {number}
     * @memberof SchoolDataDictSchema
     */
    order?: number;
    /**
     * 字典备注
     * @type {string}
     * @memberof SchoolDataDictSchema
     */
    remark: string;
    /**
     * 乐观锁
     * @type {number}
     * @memberof SchoolDataDictSchema
     */
    revision?: number;
    /**
     * 所属学校 可以为空字符串
     * @type {string}
     * @memberof SchoolDataDictSchema
     */
    school_id: string;
    /**
     * 状态,open-开放,close-关闭,archive-存档
     * @type {string}
     * @memberof SchoolDataDictSchema
     */
    status?: string;
    /**
     * 更新人
     * @type {string}
     * @memberof SchoolDataDictSchema
     */
    updated_by: string;
    /**
     *
     * @type {string}
     * @memberof SchoolDataDictSchema
     */
    updated_time?: string;
  }
}
