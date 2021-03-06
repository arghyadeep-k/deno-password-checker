# Password Checker

[![CI](https://github.com/arghyadeep-k/deno-password-checker/actions/workflows/deno-ci.yml/badge.svg?branch=main)](https://github.com/arghyadeep-k/deno-password-checker/actions/workflows/deno-ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=arghyadeep-k_deno-password-checker&metric=alert_status)](https://sonarcloud.io/dashboard?id=arghyadeep-k_deno-password-checker)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=arghyadeep-k_deno-password-checker&metric=bugs)](https://sonarcloud.io/dashboard?id=arghyadeep-k_deno-password-checker)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=arghyadeep-k_deno-password-checker&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=arghyadeep-k_deno-password-checker)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=arghyadeep-k_deno-password-checker&metric=security_rating)](https://sonarcloud.io/dashboard?id=arghyadeep-k_deno-password-checker)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=arghyadeep-k_deno-password-checker&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=arghyadeep-k_deno-password-checker)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=arghyadeep-k_deno-password-checker&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=arghyadeep-k_deno-password-checker)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=arghyadeep-k_deno-password-checker&metric=ncloc)](https://sonarcloud.io/dashboard?id=arghyadeep-k_deno-password-checker)
[![Ko-Fi](https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg)](https://ko-fi.com/arghyadeep)

Deno🦕 module to test if a password/string fulfills all the preset criterias.

## Installation

```typescript
import { checkPassword } from "https://deno.land/x/password_checker/mod.ts";
```

or

```typescript
import { checkPasswordWithResult } from "https://deno.land/x/password_checker/mod.ts";
```

## Parameters

### Mandatory Parameters:

- `password: string`

### Optional Parameters:

- `minLen: number` - To check the password against a minimum length. Defaults to
  0 which disables the check.
- `maxLen: number` - To check the password against a maximum length. Defaults to
  0 which disables the check.
- `containsNum: boolean` - To check if the password contains any numbers.
  Defaults to true and enables the check.
- `containsSpecialChar: boolean` - To check if the password contains any special
  characters. Defaults to true and enables the check.
- `containsAlphabet: boolean` - To check if the password contains any alphabets.
  Defaults to true and enables the check.
- `checkWithCommonPasswords: boolean` - To check if the password is one of the
  10000 most common passwords. Need to use `--allow-net` to use this flag.
  Defaults to false and disables the check for faster processing.

## Output

- If `checkPassword()` is invoked:
  - Returns `true` if password passes all the checks, else `false`.
- If `checkPasswordWithResult()` is invoked:
  - `isValid: boolean` - `true` if the password is valid and passes all the
    checks, else `false`.
  - `reason: string` - The reason why the input password was marked as invalid.
    Returns undefined in case `isValid` is `true`.`

## Usage

```typescript
import { checkPassword } from "https://deno.land/x/password_checker/mod.ts";

const passwordString: string = "randomPassword123!.";

let isPasswordValid: boolean;

// Default case which checks if password is alphanumeric and contains special characters
isPasswordValid = checkPassword({ password: passWordString });

// To set minimum length of password
isPasswordValid = checkPassword({ password: passwordString, minLen: 5 });

// To set maximum length of password
isPasswordValid = checkPassword({
  password: passwordString,
  minLen: 5,
  maxLen: 12,
});

// To disable number check on password
isPasswordValid = checkPassword({
  password: passwordString,
  containsNum: false,
});

// To disable alphanumeric check on password
isPasswordValid = checkPassword({
  password: passwordString,
  containsNum: false,
  containsAlphabet: false,
});

// To disable special characters check on password
isPasswordValid = checkPassword({
  password: passwordString,
  containsSpecialChar: false,
});

// To run a check against 10k common passwords
isPasswordValid = checkPassword({
  password: passwordString,
  containsSpecialChar: false,
  checkWithCommonPasswords: true,
});
```

If you want the reason of failure as well, you can use
`checkPasswordWithResult()` which returns an object of type
`VerificationResult`.

```typescript
interface VerificationResult {
  isValid: boolean;
  reason?: string;
}
```

## Reference

- https://github.com/danielmiessler/SecLists/blob/master/Passwords/Common-Credentials/10k-most-common.txt

## License

This package is published under the MIT license. For more information, see the
accompanying LICENSE file.

<br>

---

<br>

### PS:

If you find this package useful, please consider giving a
[star](https://github.com/arghyadeep-k/deno-password-checker) to this project on
Github.

And, if you are willing to [buy me a coffee](https://ko-fi.com/arghyadeep), that
would be awesome. :)

<a href='https://ko-fi.com/arghyadeep' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
