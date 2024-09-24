function checkingLengthString(string, maxLength) {
  return string.length <= maxLength;
}

function checkingStringPalindrome(string) {
  const currentStr = (string.replaceAll(' ', '')).toLowerCase();
  let newStr = '';
  for (let i = (currentStr.length - 1); i >= 0; i--) {
    newStr += currentStr[i];
  }

  return newStr === currentStr;
}
