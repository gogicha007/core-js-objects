function isEmptyObject(/* obj */) {
  throw new Error('Not implemented');
}

console.log(removeProperties({ a: 1, b: 2, c: 3 }, ['b', 'c']));
