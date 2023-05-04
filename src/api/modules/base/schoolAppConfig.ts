import request from "/@/utils/request";
import { APPID } from "/@/config/app";

const api = {
  SchoolAppConfig: "/school-app-config",
  schoolAppMainCheck: "/school-app-main-check",
  SchoolAppWxWorkConfig: "/school-app-wx-work-config"
};

export function getSchoolAppConfig() {
  return request.get(api.SchoolAppConfig, { params: { app_id: APPID } });
}

export function checkSchoolMainApp() {
  return request.get(api.schoolAppMainCheck, {
    params: { app_id: APPID }
  });
}

export function getSchoolAppWxWorkConfig(schoolId: string) {
  return request.get(api.SchoolAppWxWorkConfig, {
    params: { school_id: schoolId, app_id: APPID }
  });
}
