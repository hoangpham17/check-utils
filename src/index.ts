export const isEmpty = (value: any): boolean => {
  if (value == null) return true; // Checks for null and undefined
  if (typeof value === "string" || Array.isArray(value))
    return value.length === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return false;
};

export const isNull = (value: any): boolean => value == null;

export const isNumber = (value: any): boolean =>
  typeof value === "number" && !isNaN(value);

export const isEmptyString = (value: any): boolean =>
  typeof value === "string" && value.trim() === "";

export const isArray = (value: any): boolean => Array.isArray(value);
