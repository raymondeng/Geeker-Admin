// 请求响应参数（不包含data）
export interface Result {
  code: string;
  message: string;
}

// 请求响应参数（包含data）
export interface ResultData<T = any> extends Result {
  result: T;
}

// 分页响应参数
export interface ResPage<T> {
  data: T[];
  pageNo: number;
  pageSize: number;
  total: number;
}

// 分页请求参数
export interface ReqPage {
  pageNo: number;
  pageSize: number;
}

// 文件上传模块
export namespace Upload {
  export interface ResFileUrl {
    fileUrl: string;
  }
}
