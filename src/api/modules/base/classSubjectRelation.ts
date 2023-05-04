import request from "/@/utils/request";
import { replaceUrlVars, toQueryParams } from "/@/utils/urlFunction";

const api = {
  ClassSubjectRelationList: "/class-subject-relations",
  ClassSubjectRelation: "/class-subject-relations/@class_subject_relation_id",
  ClassSubjectRelationCopyFromSchool: "/class-subject-relations-copy-from-school",
  ClassSubjectList: "/classes/@class_id/subjects"
};

export function getClassSubjectRelationList(queryParams: object, page = {}, sortBy = {}, order = {}) {
  return request.get(api.ClassSubjectRelationList, {
    params: { query: toQueryParams(queryParams), ...page, ...sortBy, ...order }
  });
}

export function createClassSubjectRelation(payload: object) {
  return request.post(api.ClassSubjectRelationList, payload);
}

export function findClassSubjectRelation(classSubjectRelationId: string) {
  const { url } = replaceUrlVars(api.ClassSubjectRelation, {
    "@class_subject_relation_id": classSubjectRelationId
  });
  return request.get(url);
}

export function updateClassSubjectRelation(classSubjectRelationId: string, payload: object) {
  const { url } = replaceUrlVars(api.ClassSubjectRelation, {
    "@class_subject_relation_id": classSubjectRelationId
  });
  return request.put(url, payload);
}

export function deleteClassSubjectRelation(classSubjectRelationId: string) {
  const { url } = replaceUrlVars(api.ClassSubjectRelation, {
    "@class_subject_relation_id": classSubjectRelationId
  });
  return request.delete(url);
}

export function copyClassSubjectRelationFromSchool(payload: object) {
  return request.post(api.ClassSubjectRelationCopyFromSchool, payload);
}

export function getClassSubjectList(classId: string) {
  const { url } = replaceUrlVars(api.ClassSubjectList, {
    "@class_id": classId
  });
  return request.get(url);
}
