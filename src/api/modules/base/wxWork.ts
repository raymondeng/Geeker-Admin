import request from "/@/utils/request";

const api = {
  WxWorkSyncDepartment: "/wx-work-sync-department",
  WxWorkSyncDepartmentUser: "/wx-work-sync-department-user",
  WxWorkSyncUser: "/wx-work-sync-user",
  WxWorkSyncClass: "/wx-work-sync-class",
  WxWorkSyncClassRole: "/wx-work-sync-class-role",
  WxWorkSyncClassStudent: "/wx-work-sync-class-student",
  WxWorkSyncSchoolStudent: "/wx-work-sync-school-student",
  WxWorkSyncClassGuardian: "/wx-work-sync-class-guardian",
  WxWorkSyncStudentParent: "/wx-work-sync-student-parent"
};

export function wxWorkSyncDepartment(payload = {}) {
  return request.put(api.WxWorkSyncDepartment, payload);
}

export function wxWorkSyncDepartmentUser(departmentId: string) {
  return request.put(api.WxWorkSyncDepartmentUser, {
    department_id: departmentId
  });
}

export function wxWorkSyncUser(payload = {}) {
  return request.put(api.WxWorkSyncUser, payload);
}

export function wxWorkSyncClass(payload = {}) {
  return request.put(api.WxWorkSyncClass, payload);
}

export function wxWorkSyncClassRole(classId: string) {
  return request.put(api.WxWorkSyncClassRole, { class_id: classId });
}

export function wxWorkSyncClassStudent(classId: string) {
  return request.put(api.WxWorkSyncClassStudent, { class_id: classId });
}

export function wxWorkSyncSchoolStudent() {
  return request.put(api.WxWorkSyncSchoolStudent, {});
}

export function wxWorkSyncClassGuardian(classId: string) {
  return request.put(api.WxWorkSyncClassGuardian, { class_id: classId });
}

export function wxWorkSyncStudentParent(payload: object) {
  return request.put(api.WxWorkSyncStudentParent, payload);
}
