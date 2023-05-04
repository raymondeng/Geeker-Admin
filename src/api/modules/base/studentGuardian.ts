import request from "/@/utils/request";
import { replaceUrlVars, toQueryParams } from "/@/utils/urlFunction";

const api = {
  StudentGuardianList: "/student-guardians",
  StudentGuardian: "/student-guardians/@student_guardian_id"
};

export function getStudentGuardianList(queryParams: object, page = {}, sortBy = {}, order = {}) {
  return request.get(api.StudentGuardianList, {
    params: { query: toQueryParams(queryParams), ...page, ...sortBy, ...order }
  });
}

export function createStudentGuardian(payload: object) {
  return request.post(api.StudentGuardianList, payload);
}

export function findStudentGuardian(studentGuardianId: string) {
  const { url } = replaceUrlVars(api.StudentGuardian, {
    "@student_guardian_id": studentGuardianId
  });
  return request.get(url);
}

export function updateStudentGuardian(studentGuardianId: string, payload: object) {
  const { url } = replaceUrlVars(api.StudentGuardian, {
    "@student_guardian_id": studentGuardianId
  });
  return request.put(url, payload);
}

export function deleteStudentGuardian(studentGuardianId: string) {
  const { url } = replaceUrlVars(api.StudentGuardian, {
    "@student_guardian_id": studentGuardianId
  });
  return request.delete(url);
}
