import request from "/@/utils/request";
import { replaceUrlVars, toQueryParams } from "/@/utils/urlFunction";

const api = {
  ClassStudentRelationList: "/class-student-relations",
  ClassStudentRelation: "/class-student-relations/@class_student_relation_id",
  ClassBatchRemoveStudentRelationBySyncRemovedFlag: "/classes/@class_id/batch-remove-student-relation-by-sync-removed-flag",
  ClassBatchSetStudentMainClass: "/classes/@class_id/batch-set-student-main-class",
  ClassStudentRelationImportStudentList: "/classes/@class_id/import-student-list"
};

export function getClassStudentRelationList(queryParams: object, page = {}, sortBy = {}, order = {}) {
  return request.get(api.ClassStudentRelationList, {
    params: { query: toQueryParams(queryParams), ...page, ...sortBy, ...order }
  });
}

export function createClassStudentRelation(payload: object) {
  return request.post(api.ClassStudentRelationList, payload);
}

export function findClassStudentRelation(classStudentRelationId: string) {
  const { url } = replaceUrlVars(api.ClassStudentRelation, {
    "@class_student_relation_id": classStudentRelationId
  });
  return request.get(url);
}

export function updateClassStudentRelation(classStudentRelationId: string, payload: object) {
  const { url } = replaceUrlVars(api.ClassStudentRelation, {
    "@class_student_relation_id": classStudentRelationId
  });
  return request.put(url, payload);
}

export function deleteClassStudentRelation(classStudentRelationId: string) {
  const { url } = replaceUrlVars(api.ClassStudentRelation, {
    "@class_student_relation_id": classStudentRelationId
  });
  return request.delete(url);
}

export function batchRemoveClassStudentRelationBySyncRemovedFlag(classId: string) {
  const { url } = replaceUrlVars(api.ClassBatchRemoveStudentRelationBySyncRemovedFlag, {
    "@class_id": classId
  });
  return request.put(url, {});
}

export function batchSetStudentMainClass(classId: string) {
  const { url } = replaceUrlVars(api.ClassBatchSetStudentMainClass, {
    "@class_id": classId
  });
  return request.put(url, {});
}

export function classStudentRelationImportStudentList(classId: string, fileList: Blob) {
  const { url } = replaceUrlVars(api.ClassStudentRelationImportStudentList, {
    "@class_id": classId
  });
  let form = new FormData();
  form.append("file", fileList);
  return request({
    method: "post",
    url: url,
    headers: {
      "Content-type": "multipart/form-data"
    },
    data: form
  });
}
