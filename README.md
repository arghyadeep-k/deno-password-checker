# Password Checker

A Deno🦕 module to test if a password/string matches the preset criteria.

## Installation

```typescript
import { checkPassword } from "https://deno.land/x/password-checker/mods.ts";
```

## Parameters

### Mandatory Parameters:

- `password: string`

### Optional Parameters:

- `minLen: number` - To check the password against a minimum length. Defaults to 0
  which disables the check.
- `maxLen: number` - To check the password against a maximum length. Defaults to 0
  which disables the check.
- `containsNum: boolean` - To check if the password contains any numbers. Defaults
  to true and enables the check.
- `containsSpecialChar: boolean` - To check if the password contains any special
  characters. Defaults to true and enables the check.
- `containsAlphabet: boolean` - To check if the password contains any alphabets.
  Defaults to true and enables the check.

## Usage

```typescript
import { checkPassword } from "https://deno.land/x/password-checker/mods.ts";

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
```

## License

This package is published under the Unlicense. For more information, see the
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
