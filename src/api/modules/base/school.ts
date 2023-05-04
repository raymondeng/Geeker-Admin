import request from "/@/utils/request";
import { replaceUrlVars } from "/@/utils/urlFunction";
const api = {
  School: "/schools/@school_id",
  SchoolSearch: "/school-search",
  SchoolChangeTerm: "/school-change-term",
  SchoolChangeTermStatus: "/school-change-term-status",
  SchoolDataSummaryList: "/schools/@school_id/data-summary"
};

export function findSchool(schoolId: string) {
  const { url, query } = replaceUrlVars(api.School, {
    "@school_id": schoolId
  });
  return request.get(url, { params: { ...query } });
}

export function searchSchool(schoolName: string) {
  return request.get(api.SchoolSearch, { params: { school_name: schoolName } });
}

export function changeSchoolCurTerm(schoolTermId: string, termStatus: string) {
  return request.put(api.SchoolChangeTerm, {
    cur_school_term_id: schoolTermId,
    term_status: termStatus
  });
}
