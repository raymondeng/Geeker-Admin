import request from "/@/utils/request";
import { toQueryParams } from "/@/utils/urlFunction";

const api = {
  SchoolAppSettlementList: "/school-app-settlements"
};

export function getSchoolAppSettlementList(queryParams: object, page = {}, sortBy = {}, order = {}) {
  return request.get(api.SchoolAppSettlementList, {
    params: { query: toQueryParams(queryParams), ...page, ...sortBy, ...order }
  });
}
