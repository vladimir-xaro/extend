# @xaro/extend

Cut function from [swiper](https://github.com/nolimits4web/swiper)
> [original source](https://github.com/nolimits4web/swiper/blob/master/src/utils/utils.js#L75)

## Usage
```js
import extend from '@xaro/extend';

const objA = {
  a: 'apple',
  b: 'broccoli'
};

const objB = {
  a: 'asparagus',
  c: 'carrot'
};

const objC = {
  b: 'beets',
  c: 'cucumber'
};

const objD = extend({}, objA, objB, objC);
```
Value of **objD** is:
```js
{
  a: 'asparagus',
  b: 'beets',
  c: 'cucumber'
}
```

## License
[MIT](LICENSE)