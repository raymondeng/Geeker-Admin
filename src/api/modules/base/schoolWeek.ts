import request from "/@/utils/request";
import { replaceUrlVars, toQueryParams } from "/@/utils/urlFunction";

const api = {
  SchoolWeekList: "/school-weeks",
  SchoolWeek: "/school-weeks/@school_week_id",
  BatchCreateSchoolWeek: "/school-week-batch-create",
  BatchOpenSchoolWeek: "/school-week-batch-open",
  BatchCloseSchoolWeek: "/school-week-batch-close"
};

export function getSchoolWeekList(queryParams: object, page = {}, sortBy = {}, order = {}) {
  return request.get(api.SchoolWeekList, {
    params: { query: toQueryParams(queryParams), ...page, ...sortBy, ...order }
  });
}

export function createSchoolWeek(payload: object) {
  return request.post(api.SchoolWeekList, payload);
}

export function findSchoolWeek(schoolWeekId: string) {
  const { url } = replaceUrlVars(api.SchoolWeek, {
    "@school_week_id": schoolWeekId
  });
  return request.get(url);
}

export function updateSchoolWeek(schoolWeekId: string, payload: object) {
  const { url } = replaceUrlVars(api.SchoolWeek, {
    "@school_week_id": schoolWeekId
  });
  return request.put(url, payload);
}

export function deleteSchoolWeek(schoolWeekId: string) {
  const { url } = replaceUrlVars(api.SchoolWeek, {
    "@school_week_id": schoolWeekId
  });
  return request.delete(url);
}

export function deleteSchoolWeekByIds(payload: object) {
  return request.delete(api.SchoolWeekList, {
    data: payload
  });
}

export function batchCreateSchoolWeek(payload: object) {
  return request.put(api.BatchCreateSchoolWeek, payload);
}

export function openSchoolWeekByIds(payload: object) {
  return request.put(api.BatchOpenSchoolWeek, payload);
}

export function closeSchoolWeekByIds(payload: object) {
  return request.put(api.BatchCloseSchoolWeek, payload);
}

export function getSchoolWeekArray(queryParams: object) {
  const { url, query } = replaceUrlVars(api.SchoolWeekList, queryParams);
  return request.get(url, { params: query }).then((result: any) => {
    return result.data.map((item: any) => ({
      ...item,
      label: item.name + "[" + item.start_date + ", " + item.end_date + "]",
      value: item.id
    }));
  });
}
