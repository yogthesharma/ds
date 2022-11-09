var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let firstBadVersion = 0;
    let i = 0;

    while (i < n) {
      if (isBadVersion(i)) {
        firstBadVersion = i;
        break;
      }
      i++;
    }

    return firstBadVersion;
  };
};
