import request from "/@/utils/request";
import { replaceUrlVars } from "/@/utils/urlFunction";

const api = {
  ParentList: "/school-users",
  Parent: "/school-users/@school_user_id"
};

export function getParentList(parameter: object, page: object) {
  parameter = Object.assign({ role: "parent" }, parameter);
  const { url, query } = replaceUrlVars(api.ParentList, parameter);
  return request.get(url, { params: { ...query, ...page } });
}

export function createParent(payload: object) {
  (payload as any).role = "parent";
  return request.post(api.ParentList, payload);
}

export function findParent(schoolUserId: string) {
  const { url } = replaceUrlVars(api.Parent, {
    "@school_user_id": schoolUserId
  });
  return request.get(url);
}

export function updateParent(schoolUserId: string, payload: object) {
  const { url } = replaceUrlVars(api.Parent, {
    "@school_user_id": schoolUserId
  });
  return request.put(url, payload);
}

export function deleteParent(schoolUserId: string) {
  const { url } = replaceUrlVars(api.Parent, {
    "@school_user_id": schoolUserId
  });
  return request.delete(url);
}
