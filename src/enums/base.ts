import { toArrayOptions } from "./common";

export const USER_GENDER = {
  n: "未填写",
  m: "男",
  f: "女"
};

export const MEMBER_TYPE = {
  teacher: "老师",
  student: "学生"
};

export const SCHOOL_OPERATOR_ROLE = {
  admin: "运营管理员",
  member: "运营人员",
  user: "学校成员"
};

export const USER_ROLES = {
  student: "学生",
  teacher: "教师",
  parent: "家长",
  graduate: "校友",
  retire_teacher: "退休老师",
  other: "其他"
};

// 班级部门类型，1表示班级，2表示年级，3表示学段，4表示校区，5表示学校
export const CLASS_LEVEL_TYPE = {
  "1": "班级",
  "2": "年级",
  "3": "学段",
  "4": "校区",
  "5": "学校"
};

// 学年状态，draft-草稿,open-上线,close-关闭
export const SCHOOL_YEAR_STATUS = {
  draft: "草稿",
  open: "上线",
  close: "关闭"
};

// 学期状态，draft-草稿,open-上线,close-关闭
export const SCHOOL_TERM_STATUS = {
  draft: "草稿",
  open: "上线",
  close: "关闭"
};

// 学周状态，draft-草稿,open-上线,close-关闭
export const SCHOOL_WEEK_STATUS = {
  draft: "草稿",
  open: "上线",
  close: "关闭"
};

// 学校当前学期状态, ready-准备阶段，ongoing-进行，overdue-过期
export const SCHOOL_CUR_TERM_STATUS = {
  ready: "准备阶段",
  ongoing: "进行阶段",
  overdue: "结束阶段"
};

// 工资条目类型 node-节点,leaf-叶子
export const SALARY_ITEM_TYPE = {
  node: "节点",
  leaf: "叶子"
};

// 批次状态 draft-草稿,open-上线,notified-已通知,close-关闭
export const SALARY_BATCH_STATUS = {
  draft: "草稿",
  open: "上线",
  notified: "已通知",
  close: "关闭"
};

// 工资条目状态 open-开放,close-关闭
export const SALARY_ITEM_STATUS = {
  open: "开放",
  close: "关闭"
};

// 用户工资记录状态，draft-草稿,open-已开放,notified-已通知,close-关闭
export const STAFF_SALARY_STATUS = {
  draft: "草稿",
  open: "已开放",
  notified: "已通知",
  close: "关闭"
};

export const USER_GENDER_ARRAY = toArrayOptions(USER_GENDER);
export const SCHOOL_OPERATOR_ROLE_ARRAY = toArrayOptions(SCHOOL_OPERATOR_ROLE);
export const CLASS_LEVEL_TYPE_ARRAY = toArrayOptions(CLASS_LEVEL_TYPE);
export const MEMBER_TYPE_ARRAY = toArrayOptions(MEMBER_TYPE);

export const SCHOOL_YEAR_STATUS_ARRAY = toArrayOptions(SCHOOL_YEAR_STATUS);
export const SCHOOL_TERM_STATUS_ARRAY = toArrayOptions(SCHOOL_TERM_STATUS);
export const SCHOOL_WEEK_STATUS_ARRAY = toArrayOptions(SCHOOL_WEEK_STATUS);

export const SCHOOL_CUR_TERM_STATUS_ARRAY = toArrayOptions(SCHOOL_CUR_TERM_STATUS);

export const SALARY_ITEM_TYPE_ARRAY = toArrayOptions(SALARY_ITEM_TYPE);
export const SALARY_BATCH_STATUS_ARRAY = toArrayOptions(SALARY_BATCH_STATUS);
export const SALARY_ITEM_STATUS_ARRAY = toArrayOptions(SALARY_ITEM_STATUS);
export const STAFF_SALARY_STATUS_ARRAY = toArrayOptions(STAFF_SALARY_STATUS);
