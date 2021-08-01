import { assertEquals } from "./test_deps.ts";
import {
  checkPassword,
  checkPasswordWithResult,
  IParams,
  VerificationResult,
} from "./mod.ts";

Deno.test("Test with defaults", () => {
  assertResult({ password: "random123." }, {
    isValid: true,
  });
});

Deno.test("Test for minimum length", () => {
  assertResult({ password: "random123", minLen: 10 }, {
    isValid: false,
    reason: "The password should contain at least 10 characters",
  });
});

Deno.test("Test for maximum length", () => {
  assertResult({ password: "radnom123", minLen: 2, maxLen: 5 }, {
    isValid: false,
    reason: "The password should contain at most 5 characters",
  });
});

Deno.test("Test for numbers", () => {
  assertResult({
    password: "random",
    minLen: 2,
    maxLen: 10,
    containsNum: true,
  }, {
    isValid: false,
    reason: "The password should contain at least one digit",
  });
});

Deno.test("Test for special characters", () => {
  assertResult({
    password: "random123",
    minLen: 2,
    maxLen: 10,
    containsNum: true,
    containsSpecialChar: true,
  }, {
    isValid: false,
    reason: "The password should contain at least one special character",
  });
});

Deno.test("Test for alphabets", () => {
  assertResult({
    password: "123456.!",
    minLen: 2,
    maxLen: 10,
    containsNum: true,
    containsSpecialChar: true,
    containsAlphabet: true,
  }, {
    isValid: false,
    reason: "The password should contain at least one letter",
  });
});

Deno.test("Test for all options", () => {
  assertResult({
    password: "abc123456.!",
    minLen: 2,
    maxLen: 12,
    containsNum: true,
    containsSpecialChar: true,
    containsAlphabet: true,
  }, {
    isValid: true,
  });
});

Deno.test("Test for common password - Positive", () => {
  assertResult({
    password: "batman123.?",
    minLen: 2,
    maxLen: 12,
    checkWithCommonPasswords: true,
  }, {
    isValid: true,
  });
});

Deno.test("Test for common password - Negative", () => {
  assertResult({
    password: "batman",
    minLen: 2,
    maxLen: 12,
    containsNum: false,
    containsSpecialChar: false,
    containsAlphabet: true,
    checkWithCommonPasswords: true,
  }, {
    isValid: false,
    reason: "The password should not be too common",
  });
});

/**
 * Test both `checkPassword` and `checkPasswordWithResult` against the provided case with custom assert function
 * @param params
 * @param expectedResult
 */
function assertResult(params: IParams, expectedResult: VerificationResult) {
  // Invoking checkPassword()
  assertEquals(checkPassword(params), expectedResult.isValid);

  // Invoking checkPasswordWithResult()
  assertEquals(checkPasswordWithResult(params), expectedResult);
}
