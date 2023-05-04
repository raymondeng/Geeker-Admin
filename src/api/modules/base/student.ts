import request from "/@/utils/request";
import { replaceUrlVars, toQueryParams } from "/@/utils/urlFunction";

const api = {
  StudentList: "/students",
  Student: "/students/@student_id",
  SetStudentMainClass: "/students/@student_id/set-main-class",
  ClassStudentList: "/classes/@class_id/students",
  StudentStatisticInfo: "/sap/student-statistics/@student_id"
};

export default api;

export function getStudentList(queryParams: object, page = {}, sortBy = {}, order = {}) {
  return request.get(api.StudentList, {
    params: { query: toQueryParams(queryParams), ...page, ...sortBy, ...order }
  });
}

export function getClassStudentList(classId: string, page = {}, sortBy = {}, order = {}) {
  const { url } = replaceUrlVars(api.ClassStudentList, {
    "@class_id": classId
  });
  return request.get(url, {
    params: { ...page, ...sortBy, ...order }
  });
}

export function createStudent(payload: object) {
  return request.post(api.StudentList, payload);
}

export function findStudent(studentId: string) {
  const { url } = replaceUrlVars(api.Student, {
    "@student_id": studentId
  });
  return request.get(url);
}

export function updateStudent(studentId: string, payload: object) {
  const { url } = replaceUrlVars(api.Student, {
    "@student_id": studentId
  });
  return request.put(url, payload);
}

export function setStudentMainClass(studentId: string, payload: object) {
  const { url } = replaceUrlVars(api.SetStudentMainClass, {
    "@student_id": studentId
  });
  return request.put(url, payload);
}

export function deleteStudent(studentId: string) {
  const { url } = replaceUrlVars(api.Student, {
    "@student_id": studentId
  });
  return request.delete(url);
}

export function getStudentStatisticInfo(studentId: string) {
  const { url } = replaceUrlVars(api.StudentStatisticInfo, {
    "@student_id": studentId
  });
  return request.get(url);
  // return request.get(api.StudentStatisticInfo, { params: { '@student_id': studentId } })
}
