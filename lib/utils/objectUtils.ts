// eslint-disable-next-line import/prefer-default-export
export function removeEmptyProperties(obj: any) {
  const newObj = { ...obj }; // 创建一个新的对象，避免直接修改原始对象

  Object.keys(newObj).forEach((key) => {
    if (['', undefined, null].includes(newObj[key])) {
      delete newObj[key];
    }
  });

  return newObj;
}
