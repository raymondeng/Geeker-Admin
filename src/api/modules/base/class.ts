import request from "/@/utils/request";
import { replaceUrlVars } from "/@/utils/urlFunction";

const api = {
  ClassList: "/classes",
  Class: "/classes/@class_id",
  LockClass: "/classes/@class_id/lock",
  UnlockClass: "/classes/@class_id/unlock",
  GraduateClass: "/classes/@class_id/graduate"
};

export function getClassList(parameter: object) {
  const { url, query } = replaceUrlVars(api.ClassList, parameter);
  return request.get(url, { params: query }).then(result => {
    return result.data.map((item: any) => ({
      ...item,
      label: item.name,
      value: item.id
    }));
  });
}

export function createClass(payload: object) {
  return request.post(api.ClassList, payload);
}

export function findClass(classId: object) {
  const { url } = replaceUrlVars(api.Class, {
    "@class_id": classId
  });
  return request.get(url);
}

export function updateClass(classId: string, payload: object) {
  const { url } = replaceUrlVars(api.Class, {
    "@class_id": classId
  });
  return request.put(url, payload);
}

export function deleteClass(classId: string) {
  const { url } = replaceUrlVars(api.Class, {
    "@class_id": classId
  });
  return request.delete(url);
}

export function lockClass(classId: string, payload: object) {
  const { url } = replaceUrlVars(api.LockClass, {
    "@class_id": classId
  });
  return request.put(url, payload);
}

export function unlockClass(classId: string, payload: object) {
  const { url } = replaceUrlVars(api.UnlockClass, {
    "@class_id": classId
  });
  return request.put(url, payload);
}

export function graduateClass(classId: string, payload: object) {
  const { url } = replaceUrlVars(api.GraduateClass, {
    "@class_id": classId
  });
  return request.put(url, payload);
}
