function isPalindrome(s) {
  var noSpaces = s.replace(/ /g, '')
  var stringRejoin = noSpaces.split("").reverse().join("");
  return noSpaces == stringRejoin;
}

module.exports = isPalindrome;
