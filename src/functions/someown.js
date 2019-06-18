/* eslint-disable no-extend-native */
Array.prototype.someOwn = function(callback) {
  let nArr = this.length;
  let con = 0;
  let success = false;
  while (con < nArr) {
    if (callback(this[con])) {
      success = true;
      break;
    }
    con++;
  }
  return success;
};
