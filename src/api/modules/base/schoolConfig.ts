import request from "/@/utils/request";
import { replaceUrlVars } from "/@/utils/urlFunction";

const api = {
  SchoolBaseConfig: "/schools/@school_id/base-config",
  SchoolWxWorkConfig: "/schools/@school_id/wx-work-config"
};

export function getSchoolBaseConfig(schoolId: string) {
  const { url } = replaceUrlVars(api.SchoolBaseConfig, {
    "@school_id": schoolId
  });
  return request.get(url);
}

export function getSchoolWxWorkConfig(schoolId: string) {
  const { url } = replaceUrlVars(api.SchoolWxWorkConfig, {
    "@school_id": schoolId
  });
  return request.get(url);
}
