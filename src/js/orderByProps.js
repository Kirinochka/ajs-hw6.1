function orderByProps(obj, keys) {
  const resultArray = [];

  keys.forEach((key) => {
    resultArray.push({ key, value: obj[key] });
  });

  Object.entries(obj)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([key, value]) => {
      if (keys.indexOf(key) !== -1) return;
      resultArray.push({ key, value });
    });

  return resultArray;
}

export default orderByProps;
