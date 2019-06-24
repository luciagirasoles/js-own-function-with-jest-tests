/* eslint-disable no-extend-native */
Array.prototype.joinOwn = function(character = ",") {
  let nArr = this.length;
  let str = "";
  for (let i = 0; i < nArr; i++) {
    if (i !== 0) str += character;
    str += this[i];
  }
  return str;
};
