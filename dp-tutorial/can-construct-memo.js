function canConstruct(str, literals, memo) {
  if (memo[str]) return memo[str]
  if (str.length === 0) {
    return true;
  }
  for (let literal of literals) {
    if (str.indexOf(literal) === 0) {
      if (canConstruct(str.slice(literal.length), literals, memo)) {
        memo[str] = true;
        return true;
      }
    }
  }
  memo[str] = false;
  return false;
}

console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'], {}));
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'], {}));