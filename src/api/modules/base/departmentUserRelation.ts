import request from "/@/utils/request";
import { replaceUrlVars, toQueryParams } from "/@/utils/urlFunction";

const api = {
  DepartmentUserRelationList: "/department-user-relations",
  DepartmentUserRelation: "/department-user-relations/@department_user_relation_id"
};

export function getDepartmentUserRelationList(queryParams: object, page = {}, sortBy = {}, order = {}) {
  return request.get(api.DepartmentUserRelationList, {
    params: { query: toQueryParams(queryParams), ...page, ...sortBy, ...order }
  });
}

export function createDepartmentUserRelation(payload: object) {
  return request.post(api.DepartmentUserRelationList, payload);
}

export function findDepartmentUserRelation(departmentUserRelationId: string) {
  const { url } = replaceUrlVars(api.DepartmentUserRelation, {
    "@department_user_relation_id": departmentUserRelationId
  });
  return request.get(url);
}

export function updateDepartmentUserRelation(departmentUserRelationId: string, payload: object) {
  const { url } = replaceUrlVars(api.DepartmentUserRelation, {
    "@department_user_relation_id": departmentUserRelationId
  });
  return request.put(url, payload);
}

export function deleteDepartmentUserRelation(departmentUserRelationId: string) {
  const { url } = replaceUrlVars(api.DepartmentUserRelation, {
    "@department_user_relation_id": departmentUserRelationId
  });
  return request.delete(url);
}
