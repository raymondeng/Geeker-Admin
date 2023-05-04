import request from "/@/utils/request";
import { replaceUrlVars, toQueryParams } from "/@/utils/urlFunction";

const api = {
  SchoolTermList: "/school-terms",
  SchoolTerm: "/school-terms/@school_term_id",
  OpenSchoolTerm: "/school-terms/@school_term_id/open",
  CloseSchoolTerm: "/school-terms/@school_term_id/close",
  SchoolTermNotSettledList: "/school-terms-not-settled"
};

export function getSchoolTermList(queryParams: object, page = {}, sortBy = {}, order = {}) {
  return request.get(api.SchoolTermList, {
    params: { query: toQueryParams(queryParams), ...page, ...sortBy, ...order }
  });
}

export function createSchoolTerm(payload: object) {
  return request.post(api.SchoolTermList, payload);
}

export function findSchoolTerm(schoolTermId: string) {
  const { url } = replaceUrlVars(api.SchoolTerm, {
    "@school_term_id": schoolTermId
  });
  return request.get(url);
}

export function updateSchoolTerm(schoolTermId: string, payload: object) {
  const { url } = replaceUrlVars(api.SchoolTerm, {
    "@school_term_id": schoolTermId
  });
  return request.put(url, payload);
}

export function deleteSchoolTerm(schoolTermId: string) {
  const { url } = replaceUrlVars(api.SchoolTerm, {
    "@school_term_id": schoolTermId
  });
  return request.delete(url);
}

export function openSchoolTerm(schoolTermId: string, payload: object) {
  const { url } = replaceUrlVars(api.OpenSchoolTerm, {
    "@school_term_id": schoolTermId
  });
  return request.put(url, payload);
}

export function closeSchoolTerm(schoolTermId: string, payload: object) {
  const { url } = replaceUrlVars(api.CloseSchoolTerm, {
    "@school_term_id": schoolTermId
  });
  return request.put(url, payload);
}

export function getSchoolTermNotSettledList(queryParams: object, page = {}, sortBy = {}, order = {}) {
  return request.get(api.SchoolTermNotSettledList, {
    params: { query: toQueryParams(queryParams), ...page, ...sortBy, ...order }
  });
}
