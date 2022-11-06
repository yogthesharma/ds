// working fine but time limit exceeds

function groupAnagrams(strs) {
  const length = strs.length;

  const resArr = [];

  const allValSame = strs.every((val) => val === strs[0]);

  if (allValSame) {
    return [strs];
  }

  function sortAlphabet(str) {
    return [...str].sort((a, b) => a.localeCompare(b)).join("");
  }

  for (let i = 0; i < length; i++) {
    const localArr = [];
    for (let j = 0; j < length; j++) {
      if (sortAlphabet(strs[i]) === sortAlphabet(strs[j])) {
        localArr.push(strs[j]);
      }
    }

    resArr.push(localArr);
  }
  return resArr
    .map(JSON.stringify)
    .filter((e, i, a) => i === a.indexOf(e))
    .map(JSON.parse);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
