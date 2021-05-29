import { assertEquals } from "./test_deps.ts";
import { checkPassword } from "./mod.ts";

Deno.test("Test with defaults", () => {
  assertEquals(checkPassword("random"), true);
});

Deno.test("Test for minimum length", () => {
  assertEquals(checkPassword("random123", 10), false);
});

Deno.test("Test for maximum length", () => {
  assertEquals(checkPassword("random123", 2, 5), false);
});

Deno.test("Test for numbers", () => {
  assertEquals(checkPassword("random", 2, 10, true), false);
});

Deno.test("Test for special characters", () => {
  assertEquals(checkPassword("random123", 2, 10, true, true), false);
});

Deno.test("Test for alphabets", () => {
  assertEquals(checkPassword("123456.!", 2, 10, true, true, true), false);
});

Deno.test("Test for all options", () => {
  assertEquals(checkPassword("abc123456.!", 2, 12, true, true, true), true);
});
