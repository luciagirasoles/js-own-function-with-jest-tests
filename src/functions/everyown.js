/* eslint-disable no-extend-native */
Array.prototype.everyOwn = function(callback) {
  let nArr = this.length;
  let con = 0;
  let success = true;
  while (con < nArr)
    if (callback(this[con])) {
      con++;
    } else {
      success = false;
      break;
    }
  return success;
};
