import isObject from 'isobject';

export default function extend(...args) {
  const to = Object(args[0]);

  for (let i = 1; i < args.length; i++) {
    const nextSource = args[i];

    if (nextSource === undefined || nextSource === null) {
      continue;
    }

    const keysArray = Object.keys(Object(nextSource));
    for (let nextIdx = 0, len = keysArray.length; nextIdx < len; nextIdx++) {
      const nextKey = keysArray[nextIdx];
      const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

      if (desc === undefined || !desc.enumerable) {
        continue;
      }

      if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
        extend(to[nextKey], nextSource[nextKey]);
      } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
        to[nextKey] = {};
        extend(to[nextKey], nextSource[nextKey]);
      } else {
        to[nextKey] = nextSource[nextKey];
      }
    }
  }

  return to;
}

export {
  isObject
}