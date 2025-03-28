# checkify-utils

A lightweight utility library for common JavaScript checks, including `isEmpty`, `isNull`, `isNumber`, `isEmptyString`, `isArray`, and `isNaN`. Useful for validation and data handling.

## Installation

```sh
npm install checkify-utils
```

or

```sh
yarn add checkify-utils
```

## Usage

```ts
import {
  isEmpty,
  isNull,
  isNumber,
  isEmptyString,
  isArray,
  isNaN,
} from "checkify-utils";

console.log(isEmpty([])); // true
console.log(isEmpty({})); // true
console.log(isNull(null)); // true
console.log(isNull(undefined)); // true
console.log(isNumber(42)); // true
console.log(isNumber(0)); // true
console.log(isEmptyString("")); // true
console.log(isArray([1, 2, 3])); // true
console.log(isNaN(NaN)); // true
```

## API Reference

### `isEmpty(value: any): boolean`

Checks if the given value is empty (`[]`, `{}`).

### `isNull(value: any): boolean`

Checks if the given value is `null` or `undefined`.

### `isNumber(value: any): boolean`

Checks if the given value is a number (including `0`).

### `isEmptyString(value: any): boolean`

Checks if the given value is an empty string (`""`).

### `isArray(value: any): boolean`

Checks if the given value is an array.

### `isNaN(value: any): boolean`

Checks if the given value is `NaN`.

## License

MIT
