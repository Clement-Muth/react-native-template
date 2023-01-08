export const removeEmpty = <T>(obj: T) => {
  // @ts-ignore
  Object.keys(obj).forEach((key) => obj[key] === undefined && delete obj[key]);

  return obj;
};
