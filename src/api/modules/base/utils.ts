export function classListToTree(classList: Array<object>) {
  if (classList.length === 0) {
    return [];
  }
  const root = classList.filter((classItem: any) => !classList.find((item: any) => item.id === classItem.parent_id));
  const getChilds = (parentList: Array<object>) => {
    return parentList.map((item: any) => {
      let childrenList: Array<object> = classList.filter((temp: any) => item.id === temp.parent_id);
      item.children = getChilds(childrenList);
      return item;
    });
  };
  return getChilds(root);
}

export function departmentListToTree(departmentList: Array<object>) {
  if (departmentList.length === 0) {
    return [];
  }
  const root = departmentList.filter((classItem: any) => !departmentList.find((item: any) => item.id === classItem.parent_id));
  const getChilds = (parent: Array<object>) => {
    return parent.map((item: any) => {
      const children = departmentList.filter((temp: any) => item.id === temp.parent_id);
      item.children = getChilds(children);
      return item;
    });
  };
  return getChilds(root);
}
