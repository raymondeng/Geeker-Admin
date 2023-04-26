import { toArrayOptions } from "./common";

export const DIMENSION_TYPE = {
  competency: "素养维度",
  outcome: "成果维度",
  action: "行为维度"
};

export const DIMENSION_ALGORITHM = {
  sum: "求和",
  average: "平均",
  max: "最大值",
  min: "最小值"
};

export const DIMENSION_DATA_FILTER_TYPE = {
  all: "学期内数据",
  week: "周内数据",
  last1: "最新数据"
  // last5: '最后5条',
  // last10: '最后10条'
};

export const DIMENSION_DATA_PROCESS_METHOD_TYPE = {
  origin: "原值",
  asc: "升序值",
  desc: "降序值"
};

export const DIMENSION_STATUS = {
  open: "开放",
  close: "关闭"
};

export const DIMENSION_OPTION_STATUS = {
  open: "开放",
  close: "关闭"
};

export const STUDENT_BASE_INDEX_STATUS = {
  open: "开放",
  close: "关闭"
};

export const STUDENT_BASE_INDEX_RULE_ALGORITHM = {
  sum: "求和",
  mean: "平均",
  max: "最大值",
  min: "最小值",
  last: "最新值",
  piecewise: "分段取值"
};

export const PROGRAM_CATALOG_TYPE = {
  node: "一级",
  leaf: "二级"
};

export const PROGRAM_CATALOG_STATUS = {
  open: "开放",
  close: "关闭"
};

export const PROGRAM_SPONSOR_TYPE = {
  school: "学校",
  grade: "年级",
  class: "班级"
};

export const PROGRAM_OPEN_SCOPE_TYPE = {
  school: "学校",
  grade: "年级",
  class: "班级"
};

export const PROGRAM_TUTOR_SELECT_TYPE = {
  school_user: "具体人员",
  class_role: "班级角色"
};

export const PROGRAM_OVERDUE_PROCESS_METHOD = {
  none: "不做任何处理",
  evaluate: "自动评价",
  cancel: "自动取消"
};

export const PROGRAM_REST_SCORE_PROCESS_METHOD = {
  force: "强制分完",
  recycle: "系统回收"
};

export const PROGRAM_STATUS = {
  draft: "草稿",
  open: "上线",
  close: "关闭"
};

export const ACTIVITY_STATUS = {
  applied: "已申请",
  overdue: "申请过期",
  assessed: "已提交",
  done: "已完成",
  canceled: "已取消"
};

// 活动辅导状态
export const ACTIVITY_TUTOR_STATUS = {
  applied: "已申请",
  assessed: "已提交",
  done: "已完成",
  canceled: "已取消"
};

export const STUDENT_ASSESSMENT_RECORD_STATUS = {
  applied: "已申请",
  assessed: "已提交",
  done: "已完成",
  canceled: "已取消"
};

export const CLASS_INDEX_STATUS = {
  open: "开放",
  close: "关闭"
};

export const CLASS_INDEX_TEMPLATE_STATUS = {
  open: "上线",
  close: "下线"
};

// 指数类型,node-节点,leaf-叶子，3级结点默认为leaf
export const CLASS_INDEX_TYPE = {
  node: "节点指数",
  leaf: "叶子指数"
};

// 范围类型,school-学校,grade-年级,class-班级
export const CLASS_INDEX_SCOPE_TYPE = {
  school: "全校",
  grade: "指定年级",
  class: "指定班级"
};

// 指数类型,node-节点,leaf-叶子，3级结点默认为leaf
export const CLASS_INDEX_TEMPLATE_TYPE = {
  main: "主模板",
  subject: "学科模板"
};

// 范围类型,school-学校,grade-年级,class-班级
export const CLASS_INDEX_TEMPLATE_SCOPE_TYPE = {
  school: "全校",
  grade: "指定年级",
  class: "指定班级"
};

export const SCHOOL_GIFT_STATUS = {
  open: "上线",
  close: "下线"
};

export const EXCHANGE_STATUS = {
  ordered: "已下单",
  delivered: "已交付",
  canceled: "已取消"
};

export const TUTOR_SELECT_TYPE = {
  school_user: "具体人员",
  class_role: "班级角色"
};

export const OPEN_SCOPE_TYPE = {
  school: "全校",
  grade: "按年级",
  class: "按班级"
};

// 触发类型
export const TRIGGER_TYPE = {
  direct: "直接评价",
  course: "课程评价",
  card: "评价卡评价",
  task: "任务评价",
  partner: "第三方平台"
};

export const PROGRAM_ASSESSMENT_TYPE = {
  close: "无深度评价",
  ABC: "维度分层评价",
  level: "整体分层评价",
  data: "维度数据导入"
};

export const REPORT_PERIOD_STATUS = {
  draft: "草稿",
  prepare: "准备中",
  done: "已生成",
  canceled: "已取消"
};

export const SCHOOL_CARD_STATUS = {
  open: "开放",
  close: "关闭"
};

// init-初始状态,ordered-已下单,used-已使用,overdue-过期,canceled-已取消
export const PROGRAM_CARD_STATUS = {
  draft: "未下单",
  ordered: "已下单",
  used: "已使用",
  overdue: "已过期"
};

// 状态 draft-草稿,ordered-已下单
export const PROGRAM_CARD_BATCH_STATUS = {
  draft: "草稿",
  ordered: "已下单"
};

// 状态 init-初始,ordered-已下单,overdue-过期
export const PROGRAM_CARD_BATCH_RECORD_STATUS = {
  draft: "草稿",
  ordered: "已下单",
  overdue: "已过期"
};

// 报表类型
export const REPORT_TYPE = {
  main: "主报表",
  subject: "学科报表"
};

export const DIMENSION_TYPE_ARRAY = toArrayOptions(DIMENSION_TYPE);
export const DIMENSION_ALGORITHM_ARRAY = toArrayOptions(DIMENSION_ALGORITHM);
export const DIMENSION_DATA_FILTER_TYPE_ARRAY = toArrayOptions(DIMENSION_DATA_FILTER_TYPE);
export const DIMENSION_DATA_PROCESS_METHOD_TYPE_ARRAY = toArrayOptions(DIMENSION_DATA_PROCESS_METHOD_TYPE);
export const DIMENSION_STATUS_ARRAY = toArrayOptions(DIMENSION_STATUS);
export const DIMENSION_OPTION_STATUS_ARRAY = toArrayOptions(DIMENSION_OPTION_STATUS);
export const STUDENT_BASE_INDEX_STATUS_ARRAY = toArrayOptions(STUDENT_BASE_INDEX_STATUS);
export const STUDENT_BASE_INDEX_RULE_ALGORITHM_ARRAY = toArrayOptions(STUDENT_BASE_INDEX_RULE_ALGORITHM);
export const PROGRAM_CATALOG_TYPE_ARRAY = toArrayOptions(PROGRAM_CATALOG_TYPE);
export const PROGRAM_CATALOG_STATUS_ARRAY = toArrayOptions(PROGRAM_CATALOG_STATUS);
export const PROGRAM_SPONSOR_TYPE_ARRAY = toArrayOptions(PROGRAM_SPONSOR_TYPE);
export const PROGRAM_OPEN_SCOPE_TYPE_ARRAY = toArrayOptions(PROGRAM_OPEN_SCOPE_TYPE);
export const PROGRAM_TUTOR_SELECT_TYPE_ARRAY = toArrayOptions(PROGRAM_TUTOR_SELECT_TYPE);
export const PROGRAM_OVERDUE_PROCESS_METHOD_ARRAY = toArrayOptions(PROGRAM_OVERDUE_PROCESS_METHOD);
export const PROGRAM_REST_SCORE_PROCESS_METHOD_ARRAY = toArrayOptions(PROGRAM_REST_SCORE_PROCESS_METHOD);
export const PROGRAM_STATUS_ARRAY = toArrayOptions(PROGRAM_STATUS);
export const ACTIVITY_STATUS_ARRAY = toArrayOptions(ACTIVITY_STATUS);
export const ACTIVITY_TUTOR_STATUS_ARRAY = toArrayOptions(ACTIVITY_TUTOR_STATUS);
export const STUDENT_ASSESSMENT_RECORD_STATUS_ARRAY = toArrayOptions(STUDENT_ASSESSMENT_RECORD_STATUS);
export const CLASS_INDEX_STATUS_ARRAY = toArrayOptions(CLASS_INDEX_STATUS);
export const CLASS_INDEX_TEMPLATE_STATUS_ARRAY = toArrayOptions(CLASS_INDEX_TEMPLATE_STATUS);
export const CLASS_INDEX_TYPE_ARRAY = toArrayOptions(CLASS_INDEX_TYPE);
export const CLASS_INDEX_SCOPE_TYPE_ARRAY = toArrayOptions(CLASS_INDEX_SCOPE_TYPE);
export const CLASS_INDEX_TEMPLATE_TYPE_ARRAY = toArrayOptions(CLASS_INDEX_TEMPLATE_TYPE);
export const CLASS_INDEX_TEMPLATE_SCOPE_TYPE_ARRAY = toArrayOptions(CLASS_INDEX_TEMPLATE_SCOPE_TYPE);
export const SCHOOL_GIFT_STATUS_ARRAY = toArrayOptions(SCHOOL_GIFT_STATUS);
export const EXCHANGE_STATUS_ARRAY = toArrayOptions(EXCHANGE_STATUS);
export const OPEN_SCOPE_TYPE_ARRAY = toArrayOptions(OPEN_SCOPE_TYPE);
export const TRIGGER_TYPE_ARRAY = toArrayOptions(TRIGGER_TYPE);
export const PROGRAM_ASSESSMENT_TYPE_ARRAY = toArrayOptions(PROGRAM_ASSESSMENT_TYPE);
export const REPORT_PERIOD_STATUS_ARRAY = toArrayOptions(REPORT_PERIOD_STATUS);
export const SCHOOL_CARD_STATUS_ARRAY = toArrayOptions(SCHOOL_CARD_STATUS);
export const PROGRAM_CARD_STATUS_ARRAY = toArrayOptions(PROGRAM_CARD_STATUS);
export const PROGRAM_CARD_BATCH_STATUS_ARRAY = toArrayOptions(PROGRAM_CARD_BATCH_STATUS);
export const PROGRAM_CARD_BATCH_RECORD_STATUS_ARRAY = toArrayOptions(PROGRAM_CARD_BATCH_RECORD_STATUS);

export const REPORT_TYPE_ARRAY = toArrayOptions(REPORT_TYPE);
