/* eslint-disable no-extend-native */
Array.prototype.popOwn = function() {
  if (this.length == 0) {
    return undefined;
  }
  var nArr = this.length - 1;
  var last_element = this[nArr];
  delete this[nArr];
  this.length = nArr;
  return last_element;
};
