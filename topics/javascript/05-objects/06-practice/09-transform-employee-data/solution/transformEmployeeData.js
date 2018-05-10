function transformEmployeeData(array) {
  const arrayMain = [];

  for (let i = 0; i < array.length; i += 1) {
    const arr = array[i];
    const obj = {};

    for (let j = 0; j < arr.length; j += 1) {
      obj[arr[j][0]] = arr[j][1];
    }

    arrayMain.push(obj);
  }

  return arrayMain;
}

module.exports = transformEmployeeData;
