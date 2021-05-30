interface IParams {
  password: string;
  minLen?: number;
  maxLen?: number;
  containsNum?: boolean;
  containsSpecialChar?: boolean;
  containsAlphabet?: boolean;
  checkCommonPasswords?: boolean;
}
export function checkPassword({
  password,
  minLen = 0,
  maxLen = 0,
  containsNum = true,
  containsSpecialChar = true,
  containsAlphabet = true,
  checkCommonPasswords = false,
}: IParams): boolean {
  if (minLen != 0) {
    if (password.length < minLen) {
      return false;
    }
  }
  if (maxLen != 0) {
    if (password.length > maxLen) {
      return false;
    }
  }
  if (containsNum) {
    if (password.search(/\d/) == -1) {
      return false;
    }
  }
  if (containsSpecialChar) {
    if (password.search(/[^\w\s]/) == -1) {
      return false;
    }
  }
  if (containsAlphabet) {
    if (password.search(/[A-Za-z]/) == -1) {
      return false;
    }
  }

  if (checkCommonPasswords) {
    if (passwordList != undefined && passwordList.includes(password)) {
      return false;
    }
  }

  return true;
}

const response = await fetch(
  "https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/Common-Credentials/10k-most-common.txt",
);

const passwordList = await response.text();
