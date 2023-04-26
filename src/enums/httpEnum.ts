/**
 * @description：请求配置
 */
export enum ResultEnum {
  SUCCESS = 200,
  ERROR = 500,
  OVERDUE = 401,
  TIMEOUT = 30000,
  TYPE = "success",

  Success = 20000, // 成功
  InternalRuntimeError = 40001, // 内部运行错误
  InternalDataError = 40002, // 内部数据错误
  PermissionDenied = 40003, // 没有权限访问
  FrequentOperation = 40009, // 操作频繁,请稍后再试

  NoResourceFound = 41001, // 未找到资源
  InvalidParameter = 41002, // 参数无效
  AccountOrPassWordErr = 41003, // 账户或密码错误
  VerificationCodeError = 41004, // 验证码错误
  PleaseSignIn = 41005, // 请登陆
  WeChatAuthorizationFailure = 41006, // 微信授权失败
  InvalidOrExpired = 41007, // 验证码过期
  MobileNumberError = 41008, // 手机号错误
  ResourceStatusNotSupportAction = 41009, // 资源当前状态不支持当前操作
  UploadFileExtError = 41010, // 上传文件类型错误
  NotEnoughAuthorizationBuffer = 41011, // 没有足够的授权存量

  HeaderNoAuthInfo = 50001, // HTTP头缺少认证信息
  IllegalToken = 50008, // Illegal token
  OtherClientsLoggedIn = 500012, // Other clients logged in
  TokenExpired = 50014 // Token expired
}

/**
 * @description：请求方法
 */
export enum RequestEnum {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE"
}

/**
 * @description：常用的 contentTyp 类型
 */
export enum ContentTypeEnum {
  // json
  JSON = "application/json;charset=UTF-8",
  // text
  TEXT = "text/plain;charset=UTF-8",
  // form-data 一般配合qs
  FORM_URLENCODED = "application/x-www-form-urlencoded;charset=UTF-8",
  // form-data 上传
  FORM_DATA = "multipart/form-data;charset=UTF-8"
}
