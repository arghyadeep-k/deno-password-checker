export interface IParams {
  password: string;
  minLen?: number;
  maxLen?: number;
  containsNum?: boolean;
  containsSpecialChar?: boolean;
  containsAlphabet?: boolean;
  checkWithCommonPasswords?: boolean;
}

export interface VerificationResult {
  isValid: boolean;
  reason?: string;
}

const url =
  "https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/Common-Credentials/10k-most-common.txt";
const response = await fetch(
  url,
);

const passwordList = await response.text();

export function checkPasswordWithResult({
  password,
  minLen = 0,
  maxLen = 0,
  containsNum = true,
  containsSpecialChar = true,
  containsAlphabet = true,
  checkWithCommonPasswords = false,
}: IParams): VerificationResult {
  if (minLen != 0) {
    if (password.length < minLen) {
      return {
        isValid: false,
        reason: `The password should contain at least ${minLen} characters`,
      };
    }
  }
  if (maxLen != 0) {
    if (password.length > maxLen) {
      return {
        isValid: false,
        reason: `The password should contain at most ${maxLen} characters`,
      };
    }
  }
  if (containsNum) {
    if (password.search(/\d/) == -1) {
      return {
        isValid: false,
        reason: "The password should contain at least one digit",
      };
    }
  }
  if (containsSpecialChar) {
    if (password.search(/[^\w\s]/) == -1) {
      return {
        isValid: false,
        reason: "The password should contain at least one special character",
      };
    }
  }
  if (containsAlphabet) {
    if (password.search(/[A-Za-z]/) == -1) {
      return {
        isValid: false,
        reason: "The password should contain at least one letter",
      };
    }
  }

  if (checkWithCommonPasswords) {
    if (passwordList != undefined && passwordList.includes(password)) {
      return {
        isValid: false,
        reason: "The password should not be too common",
      };
    }
  }

  return { isValid: true };
}

export function checkPassword(params: IParams): boolean {
  return checkPasswordWithResult(params).isValid;
}
