export interface EnumItem {
  label: string | number;
  value: string | number;
}

export const toArrayOptions = (object: any): EnumItem[] => {
  return Array.from(Object.keys(object).map((item: string) => ({ label: object[item], value: item })));
};
