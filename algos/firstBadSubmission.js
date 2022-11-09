/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let firstBadVersion = 0;
    let i = 1;

    while (i <= n) {
      if (isBadVersion(i)) {
        firstBadVersion = i;
        break;
      }
      i++;
    }

    return firstBadVersion;
  };
};
