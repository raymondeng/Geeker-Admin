import { Upload } from "@/api/interface/mock/index";
import { PORT2 } from "@/api/config/servicePort";
import http from "./request";

/**
 * @name 文件上传模块
 */
// 图片上传
export const uploadImg = (params: FormData) => {
  return http.post<Upload.ResFileUrl>(PORT2 + `/file/upload/img`, params);
};

// 视频上传
export const uploadVideo = (params: FormData) => {
  return http.post<Upload.ResFileUrl>(PORT2 + `/file/upload/video`, params);
};
