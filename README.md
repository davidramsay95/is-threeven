# is-threeven

Returns `true` if the input number is "threeven": divisible by 3.

The inverse of [`is-throdd`](https://github.com/davidramsay95/is-throdd), which this package depends on.

## Install

```sh
npm install is-threeven
```

## Usage

This package is ESM only.

```js
import isThreeven from 'is-threeven';

isThreeven(3); // true
isThreeven(6); // true
isThreeven(0); // true
isThreeven(1); // false
isThreeven(4); // false
```

## Behavior

`isThreeven(value)` returns `!isThrodd(value)`, which is `value % 3 === 0`. Zero is divisible by 3, so `isThreeven(0)` returns `true`.

Because the check is delegated to `is-throdd`, inputs follow JavaScript `%` semantics:

- Non-integers such as `1.5` return `false`.
- `NaN`, `Infinity` and `-Infinity` return `false`.
- Negative multiples of 3 return `true`.

## Development

Tests use the built-in Node.js test runner.

`is-throdd` must be resolvable from `node_modules`. Once it is published, `npm install` is enough. Until then, link the local sibling checkout without modifying `package.json`:

```sh
npm install --no-save --no-package-lock ../is-throdd
npm test
```

## Publishing

Publish `is-throdd` first. `is-threeven` declares it as a dependency (`^1.0.0`), so installing `is-threeven` fails until `is-throdd` exists on the registry.

Only `index.js`, `package.json`, `README.md` and `LICENSE` are included in the package tarball. Verify with:

```sh
npm pack --dry-run
```

## License

[MIT](LICENSE)
