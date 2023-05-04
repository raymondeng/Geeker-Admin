import request from "/@/utils/request";
import { replaceUrlVars } from "/@/utils/urlFunction";

const api = {
  DepartmentList: "/departments",
  Department: "/departments/@department_id"
};

export function getDepartmentList(parameter: object) {
  const { url, query } = replaceUrlVars(api.DepartmentList, parameter);
  return request.get(url, { params: query }).then(result => {
    return result.data.map((item: any) => ({
      ...item,
      label: item.name,
      value: item.id
    }));
  });
}

export function createDepartment(payload: object) {
  return request.post(api.DepartmentList, payload);
}

export function findDepartment(departmentId: string) {
  const { url } = replaceUrlVars(api.Department, {
    "@department_id": departmentId
  });
  return request.get(url);
}

export function updateDepartment(departmentId: string, payload: object) {
  const { url } = replaceUrlVars(api.Department, {
    "@department_id": departmentId
  });
  return request.put(url, payload);
}

export function deleteDepartment(departmentId: string) {
  const { url } = replaceUrlVars(api.Department, {
    "@department_id": departmentId
  });
  return request.delete(url);
}
