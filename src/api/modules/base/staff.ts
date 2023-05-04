import request from "/@/utils/request";
import { replaceUrlVars } from "/@/utils/urlFunction";

const api = {
  StaffList: "/school-users",
  Staff: "/school-users/@school_user_id",
  ChangeAuthCode: "/school-user-change-auth-code",
  ResetAuthCode: "/reset-school-user-auth-code",
  TeacherMergeParent: "/school-users/@school_user_id/merge-user",
  SchoolUserUserList: "/school-users/@school_user_id/user-list"
};

export function getStaffList(parameter: object, page: object) {
  parameter = Object.assign({ role: "teacher" }, parameter);
  const { url, query } = replaceUrlVars(api.StaffList, parameter);
  return request.get(url, { params: { ...query, ...page } });
}

export function createStaff(payload: object) {
  (payload as any).role = "teacher";
  return request.post(api.StaffList, payload);
}

export function findStaff(schoolUserId: string) {
  const { url } = replaceUrlVars(api.Staff, {
    "@school_user_id": schoolUserId
  });
  return request.get(url);
}

export function updateStaff(schoolUserId: string, payload: object) {
  const { url } = replaceUrlVars(api.Staff, {
    "@school_user_id": schoolUserId
  });
  return request.put(url, payload);
}

export function deleteStaff(schoolUserId: string) {
  const { url } = replaceUrlVars(api.Staff, {
    "@school_user_id": schoolUserId
  });
  return request.delete(url);
}

export function changeStaffAuthCode(schoolUserId: string, oldCode: string, newCode: string) {
  return request.put(
    api.ChangeAuthCode,
    { old_shortcut_code: oldCode, shortcut_code: newCode },
    { params: { school_user_id: schoolUserId } }
  );
}

export function resetStaffAuthCode(schoolUserId: string) {
  return request.put(api.ResetAuthCode, {}, { params: { school_user_id: schoolUserId } });
}

export function teacherMergeParent(schoolUserId: string, payload: object) {
  const { url } = replaceUrlVars(api.TeacherMergeParent, {
    "@school_user_id": schoolUserId
  });
  return request.put(url, payload);
}

export function getSchoolUserUserList(schoolUserId: string) {
  const { url } = replaceUrlVars(api.SchoolUserUserList, {
    "@school_user_id": schoolUserId
  });
  return request.get(url);
}
