// this is not working, try again later

function longestSubString(str) {
  var resStr = "";
  var count = 0;

  const strToArr = str.split("");

  if (str.length === 0) {
    return 0;
  }

  if (new Set(str.split("")).size === str.split("").length) {
    return str.split("").length;
  }

  for (let i = 0; i < strToArr.length; i++) {
    if (resStr.includes(strToArr[i])) {
      resStr = strToArr[i];
      const index = str.indexOf(resStr);
      if (i !== index) {
        i = index;
      }
    } else {
      resStr += strToArr[i];
    }
    count = resStr.length > count ? resStr.length : count;
  }

  return count;
}

console.log(longestSubString("dvdf"));
