/* eslint-disable no-extend-native */
Array.prototype.findOwn = function(callback) {
  let nArr = this.length;
  let con = 0;
  let result = undefined;
  while (con < nArr) {
    if (callback(this[con])) {
      result = this[con];
      break;
    }
    con++;
  }
  return result;
};
