import { assertEquals } from "./test_deps.ts";
import { checkPassword } from "./mod.ts";

Deno.test("Test with defaults", () => {
  assertEquals(checkPassword({ password: "random123." }), true);
});

Deno.test("Test for minimum length", () => {
  assertEquals(checkPassword({ password: "random123", minLen: 10 }), false);
});

Deno.test("Test for maximum length", () => {
  assertEquals(
    checkPassword({ password: "random123", minLen: 2, maxLen: 5 }),
    false,
  );
});

Deno.test("Test for numbers", () => {
  assertEquals(
    checkPassword({
      password: "random",
      minLen: 2,
      maxLen: 10,
      containsNum: true,
    }),
    false,
  );
});

Deno.test("Test for special characters", () => {
  assertEquals(
    checkPassword({
      password: "random123",
      minLen: 2,
      maxLen: 10,
      containsNum: true,
      containsSpecialChar: true,
    }),
    false,
  );
});

Deno.test("Test for alphabets", () => {
  assertEquals(
    checkPassword({
      password: "123456.!",
      minLen: 2,
      maxLen: 10,
      containsNum: true,
      containsSpecialChar: true,
      containsAlphabet: true,
    }),
    false,
  );
});

Deno.test("Test for all options", () => {
  assertEquals(
    checkPassword({
      password: "abc123456.!",
      minLen: 2,
      maxLen: 12,
      containsNum: true,
      containsSpecialChar: true,
      containsAlphabet: true,
    }),
    true,
  );
});

Deno.test("Test for common password - Positive", () => {
  assertEquals(
    checkPassword({
      password: "batman123.?",
      minLen: 2,
      maxLen: 12,
      checkWithCommonPasswords: true,
    }),
    true,
  );
});

Deno.test("Test for common password - Negative", () => {
  assertEquals(
    checkPassword({
      password: "batman",
      minLen: 2,
      maxLen: 12,
      containsNum: false,
      containsSpecialChar: false,
      containsAlphabet: true,
      checkWithCommonPasswords: true,
    }),
    false,
  );
});
