module.exports = base => {
  let array = [...base];

  for (i = array.length; 1 < i; i--) {
    k = Math.floor(Math.random() * i);
    [array[k], array[i - 1]] = [array[i - 1], array[k]];
  }

  return array;
};
