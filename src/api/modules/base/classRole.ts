import request from "/@/utils/request";
import { replaceUrlVars, toQueryParams } from "/@/utils/urlFunction";

const api = {
  ClassRoleList: "/class-roles",
  ClassRole: "/class-roles/@class_role_id",
  ClassAllRoleList: "/classes/@class_id/roles",
  TeacherClassList: "/teacher-classes"
};

export function getClassRoleList(queryParams: object, page = {}, sortBy = {}, order = {}) {
  return request.get(api.ClassRoleList, {
    params: { query: toQueryParams(queryParams), ...page, ...sortBy, ...order }
  });
}

export function createClassRole(payload: object) {
  return request.post(api.ClassRoleList, payload);
}

export function findClassRole(classRoleId: string) {
  const { url } = replaceUrlVars(api.ClassRole, {
    "@class_role_id": classRoleId
  });
  return request.get(url);
}

export function updateClassRole(classRoleId: string, payload: object) {
  const { url } = replaceUrlVars(api.ClassRole, {
    "@class_role_id": classRoleId
  });
  return request.put(url, payload);
}

export function deleteClassRole(classRoleId: string) {
  const { url } = replaceUrlVars(api.ClassRole, {
    "@class_role_id": classRoleId
  });
  return request.delete(url);
}

export function getClassAllRoleList(classId: string) {
  const { url } = replaceUrlVars(api.ClassAllRoleList, {
    "@class_id": classId
  });
  return request.get(url);
}

export function getTeacherClassList(classLevelType: string) {
  return request.get(api.TeacherClassList, {
    params: { level_type: classLevelType }
  });
}
