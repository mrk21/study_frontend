console.group('symbols');
{
  console.log(`Symbol('test') === Symbol('test') =>`, Symbol('test') === Symbol('test'));
}
{
  const privateKey = Symbol('c');
  console.log(`privateKey = Symbol('c')`);
  const obj = {
    a: 1,
    b: 2,
    [privateKey]: 3
  };
  console.log('obj = {a: 1, b: 2, [privateKey]: 3} =>', obj);
  console.log(`obj['c'] =>`, obj['c']);
  console.log(`obj[privateKey] =>`, obj[privateKey]);
  console.log(`obj[Symbol('c')] =>`, obj[Symbol('c')]);
  for (const key in obj) {
    console.log('for (const key in obj)', key);
  }
}
console.groupEnd();
