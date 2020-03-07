module.exports = base => {
  let array = [...base];
  let newArray = [];

  while (array.length > 0) {
    n = array.length;
    k = Math.floor(Math.random() * n);

    newArray.push(array[k]);
    array.splice(k, 1);
  }

  return newArray;
};
