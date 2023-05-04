import request from "/@/utils/request";
import { replaceUrlVars, toQueryParams } from "/@/utils/urlFunction";

const api = {
  SchoolYearList: "/school-years",
  SchoolYear: "/school-years/@school_year_id",
  OpenSchoolYear: "/school-years/@school_year_id/open",
  CloseSchoolYear: "/school-years/@school_year_id/close"
};

export function getSchoolYearList(queryParams: object, page = {}, sortBy = {}, order = {}) {
  return request.get(api.SchoolYearList, {
    params: { query: toQueryParams(queryParams), ...page, ...sortBy, ...order }
  });
}

export function createSchoolYear(payload: object) {
  return request.post(api.SchoolYearList, payload);
}

export function findSchoolYear(schoolYearId: string) {
  const { url } = replaceUrlVars(api.SchoolYear, {
    "@school_year_id": schoolYearId
  });
  return request.get(url);
}

export function updateSchoolYear(schoolYearId: string, payload: object) {
  const { url } = replaceUrlVars(api.SchoolYear, {
    "@school_year_id": schoolYearId
  });
  return request.put(url, payload);
}

export function deleteSchoolYear(schoolYearId: string) {
  const { url } = replaceUrlVars(api.SchoolYear, {
    "@school_year_id": schoolYearId
  });
  return request.delete(url);
}

export function openSchoolYear(schoolYearId: string, payload: object) {
  const { url } = replaceUrlVars(api.OpenSchoolYear, {
    "@school_year_id": schoolYearId
  });
  return request.put(url, payload);
}

export function closeSchoolYear(schoolYearId: string, payload: object) {
  const { url } = replaceUrlVars(api.CloseSchoolYear, {
    "@school_year_id": schoolYearId
  });
  return request.put(url, payload);
}
