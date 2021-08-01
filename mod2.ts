import { checkPasswordWithResult } from "./mod.ts";

const out = checkPasswordWithResult({
  password: "batman",
  minLen: 2,
  maxLen: 12,
  containsNum: false,
  containsSpecialChar: false,
  containsAlphabet: true,
  checkWithCommonPasswords: true,
});

console.log(out.reason);
console.log(out.isValid);
