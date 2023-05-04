import request from "/@/utils/request";
import { replaceUrlVars, toQueryParams } from "/@/utils/urlFunction";
import { APPID } from "/@/config/app";

const api = {
  SchoolOperatorList: "/school-operators",
  SchoolOperatorAllList: "/school-operator-all-records",
  SchoolOperator: "/school-operators/@school_operator_id",
  AdminSchoolOperator: "/school-operators/@school_operator_id/admin",
  SchoolOperatorAdminInfo: "/school-operator-admin-info",
  SchoolOperatorUserRecordList: "/school-operator-user-records"
};

export function getSchoolOperatorList(queryParams: object, page = {}) {
  return request.get(api.SchoolOperatorList, {
    params: { query: toQueryParams(queryParams), app_id: APPID, ...page }
  });
}

export function getSchoolOperatorAllList(queryParams: object) {
  return request.get(api.SchoolOperatorAllList, {
    params: { query: toQueryParams(queryParams), app_id: APPID }
  });
}

export function createSchoolOperator(payload: object) {
  return request.post(api.SchoolOperatorList, payload, {
    params: { app_id: APPID }
  });
}

export function findSchoolOperator(operatorId: string) {
  const { url } = replaceUrlVars(api.SchoolOperator, {
    "@school_operator_id": operatorId
  });
  return request.get(url, {
    params: { app_id: APPID }
  });
}

export function updateSchoolOperator(operatorId: string, payload: object) {
  const { url } = replaceUrlVars(api.SchoolOperator, {
    "@school_operator_id": operatorId
  });
  return request.put(url, payload, { params: { app_id: APPID } });
}

export function deleteSchoolOperator(operatorId: string) {
  const { url } = replaceUrlVars(api.SchoolOperator, {
    "@school_operator_id": operatorId
  });
  return request.delete(url, { params: { app_id: APPID } });
}

export function adminSchoolOperator(operatorId: string, payload = {}) {
  const { url } = replaceUrlVars(api.AdminSchoolOperator, {
    "@school_operator_id": operatorId
  });
  return request.put(url, payload, { params: { app_id: APPID } });
}

export function getOperatorAdmin() {
  return request.get(api.SchoolOperatorAdminInfo);
}

export function getSchoolOperatorUserRecordList(appId: string) {
  return request.get(api.SchoolOperatorUserRecordList, {
    params: { app_id: appId }
  });
}
