module.exports = function check(str, bracketsConfig) {
  let onlyBrackets = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
      onlyBrackets.push(bracketsConfig[i].join(""));
  }

  for (let j = 0; j < onlyBrackets.length; j++) {
      if (str.includes(onlyBrackets[j])) {
          str = str.replace(onlyBrackets[j], "");
          j = -1;
      }
  }
  if (str) {
      return false;
  } else {
      return true;
  }
};
