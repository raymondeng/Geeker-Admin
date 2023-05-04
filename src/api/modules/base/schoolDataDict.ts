import request from "/@/utils/request";
import { replaceUrlVars, toQueryParams } from "/@/utils/urlFunction";

const api = {
  SchoolDataDictList: "/school-data-dicts",
  SchoolDataDict: "/school-data-dicts/@code",
  SchoolDataDictItemList: "/school-data-dict-items",
  SchoolDataDictItem: "/school-data-dict-items/@school_data_dict_item_id",
  OpenSchoolDataDictItem: "/school-data-dict-items/@school_data_dict_item_id/open",
  CloseSchoolDataDictItem: "/school-data-dict-items/@school_data_dict_item_id/close"
};

export function getSchoolDataDictList(codeList: string) {
  return request.get(api.SchoolDataDictList, {
    params: { code_list: codeList }
  });
}

export function createSchoolDataDict(payload: object) {
  return request.post(api.SchoolDataDictList, payload);
}

export function findSchoolDataDict(code: string) {
  const { url } = replaceUrlVars(api.SchoolDataDict, {
    "@code": code
  });
  return request.get(url);
}

export function updateSchoolDataDict(code: string, payload: object) {
  const { url } = replaceUrlVars(api.SchoolDataDict, {
    "@code": code
  });
  return request.put(url, payload);
}

export function deleteSchoolDataDict(code: string) {
  const { url } = replaceUrlVars(api.SchoolDataDict, {
    "@code": code
  });
  return request.delete(url);
}

export function getSchoolDataDictItemList(queryParams: object, page = {}, sortBy = {}, order = {}) {
  return request.get(api.SchoolDataDictItemList, {
    params: { query: toQueryParams(queryParams), ...page, ...sortBy, ...order }
  });
}

export function createSchoolDataDictItem(payload: object) {
  return request.post(api.SchoolDataDictItemList, payload);
}

export function findSchoolDataDictItem(schoolDataDictItemId: string) {
  const { url } = replaceUrlVars(api.SchoolDataDictItem, {
    "@school_data_dict_item_id": schoolDataDictItemId
  });
  return request.get(url);
}

export function updateSchoolDataDictItem(schoolDataDictItemId: string, payload: object) {
  const { url } = replaceUrlVars(api.SchoolDataDictItem, {
    "@school_data_dict_item_id": schoolDataDictItemId
  });
  return request.put(url, payload);
}

export function deleteSchoolDataDictItem(schoolDataDictItemId: string) {
  const { url } = replaceUrlVars(api.SchoolDataDictItem, {
    "@school_data_dict_item_id": schoolDataDictItemId
  });
  return request.delete(url);
}

export function openSchoolDataDictItem(schoolDataDictItemId: string) {
  const { url } = replaceUrlVars(api.OpenSchoolDataDictItem, {
    "@school_data_dict_item_id": schoolDataDictItemId
  });
  return request.put(url, {});
}

export function closeSchoolDataDictItem(schoolDataDictItemId: string) {
  const { url } = replaceUrlVars(api.CloseSchoolDataDictItem, {
    "@school_data_dict_item_id": schoolDataDictItemId
  });
  return request.put(url, {});
}

export function getSchoolDataDictRecordList(codeList: string, parameter: object) {
  parameter = Object.assign(
    {
      code_list: codeList
    },
    parameter
  );
  return request.get(api.SchoolDataDictList, { params: { ...parameter } }).then(res => {
    let dataRecordList = [];
    let dataRecordDict: any = {};
    const dataDictList = res.data;
    for (let i = 0; i < dataDictList.length; i++) {
      const dataDictItem = dataDictList[i].children;
      for (let j = 0; j < dataDictItem.length; j++) {
        const dataRecordItem = dataDictItem[j];
        dataRecordItem.label = dataRecordItem.dict_value;
        dataRecordItem.value = dataRecordItem.code + "_" + dataRecordItem.dict_key;
        dataRecordList.push(dataRecordItem);
        dataRecordDict[dataRecordItem.value] = dataRecordItem;
      }
    }
    return { dict: dataRecordDict, list: dataRecordList };
  });
}

export function getSchoolDataDictRecordTree(codeList: string) {
  if (!codeList || codeList.length === 0) {
    codeList = "class_role.course_teacher,class_role.class_teacher";
  }
  return request
    .get(api.SchoolDataDictList, {
      params: {
        code_list: codeList
      }
    })
    .then(res => {
      let classRoleList = [];
      let classRoleLevelList = [];
      let classRoleDict: any = {};
      const dataDictList = res.data;
      for (let i = 0; i < dataDictList.length; i++) {
        // 增加主项
        const baseClassRoleItem = dataDictList[i];
        // baseClassRoleItem.label = baseClassRoleItem.dict_value + "类";
        baseClassRoleItem.label = baseClassRoleItem.dict_value;
        baseClassRoleItem.value = baseClassRoleItem.code + "_" + baseClassRoleItem.dict_key;
        classRoleList.push(baseClassRoleItem);
        classRoleDict[baseClassRoleItem.value] = baseClassRoleItem;
        let levelItem = baseClassRoleItem;
        let levelItemChildren = [];
        // 追加子项
        const dataDictItem = dataDictList[i].children;
        for (let j = 0; j < dataDictItem.length; j++) {
          const classRoleItem = dataDictItem[j];
          classRoleItem.label = classRoleItem.dict_value;
          classRoleItem.value = classRoleItem.code + "_" + classRoleItem.dict_key;
          if (classRoleItem.status === "open") {
            classRoleList.push(classRoleItem);
          }
          levelItemChildren.push(classRoleItem);
          classRoleDict[classRoleItem.value] = classRoleItem;
        }
        // 分级项
        levelItem.children = levelItemChildren;
        classRoleLevelList.push(levelItem);
      }
      return {
        dict: classRoleDict,
        list: classRoleList,
        levelList: classRoleLevelList
      };
    });
}

export function getCourseSubjectList(parameter: object) {
  parameter = Object.assign(
    {
      code_list: "class_role.course_teacher"
    },
    parameter
  );
  return request.get(api.SchoolDataDictList, { params: { ...parameter } }).then(res => {
    let classRoleList = [];
    let classRoleDict: any = {};
    const dataDictList = res.data;
    for (let i = 0; i < dataDictList.length; i++) {
      const dataDictItem = dataDictList[i].children;
      for (let j = 0; j < dataDictItem.length; j++) {
        const classRoleItem = dataDictItem[j];
        classRoleItem.label = classRoleItem.dict_value;
        classRoleItem.value = classRoleItem.code + "_" + classRoleItem.dict_key;
        if (classRoleItem.status === "open") {
          classRoleList.push(classRoleItem);
        }
        classRoleDict[classRoleItem.value] = classRoleItem;
      }
    }
    return { dict: classRoleDict, list: classRoleList };
  });
}

// 获取评价学科列表
export function getAssessSubjectList(parameter: object) {
  parameter = Object.assign(
    {
      code_list: "class_role.course_teacher,class_role.moral_teacher"
    },
    parameter
  );
  return request.get(api.SchoolDataDictList, { params: { ...parameter } }).then(res => {
    let classRoleList = [];
    let classRoleDict: any = {};
    const dataDictList = res.data;
    for (let i = 0; i < dataDictList.length; i++) {
      const dataDictItem = dataDictList[i].children;
      for (let j = 0; j < dataDictItem.length; j++) {
        const classRoleItem = dataDictItem[j];
        classRoleItem.label = classRoleItem.dict_value;
        classRoleItem.value = classRoleItem.code + "_" + classRoleItem.dict_key;
        if (classRoleItem.status === "open") {
          classRoleList.push(classRoleItem);
        }
        classRoleDict[classRoleItem.value] = classRoleItem;
      }
    }
    return { dict: classRoleDict, list: classRoleList };
  });
}

export function getRoleList(codeList: string) {
  if (!codeList || codeList.length === 0) {
    codeList = "class_role.course_teacher,class_role.class_teacher";
  }
  return request
    .get(api.SchoolDataDictList, {
      params: {
        code_list: codeList
      }
    })
    .then(res => {
      let classRoleList = [];
      let classRoleLevelList = [];
      let classRoleDict: any = {};
      const dataDictList = res.data;
      for (let i = 0; i < dataDictList.length; i++) {
        // 增加主项
        const baseClassRoleItem = dataDictList[i];
        // baseClassRoleItem.label = baseClassRoleItem.dict_value + "类";
        baseClassRoleItem.label = baseClassRoleItem.dict_value;
        baseClassRoleItem.value = baseClassRoleItem.code + "_" + baseClassRoleItem.dict_key;
        classRoleList.push(baseClassRoleItem);
        classRoleDict[baseClassRoleItem.value] = baseClassRoleItem;
        let levelItem = baseClassRoleItem;
        let levelItemChildren = [];
        // 追加子项
        const dataDictItem = dataDictList[i].children;
        for (let j = 0; j < dataDictItem.length; j++) {
          const classRoleItem = dataDictItem[j];
          classRoleItem.label = classRoleItem.dict_value;
          classRoleItem.value = classRoleItem.code + "_" + classRoleItem.dict_key;
          if (classRoleItem.status === "open") {
            classRoleList.push(classRoleItem);
          }
          levelItemChildren.push(classRoleItem);
          classRoleDict[classRoleItem.value] = classRoleItem;
        }
        // 分级项
        levelItem.children = levelItemChildren;
        classRoleLevelList.push(levelItem);
      }
      return {
        dict: classRoleDict,
        list: classRoleList,
        levelList: classRoleLevelList
      };
    });
}
