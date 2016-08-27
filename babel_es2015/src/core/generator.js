console.group('generator');
console.group('implement iterator');
{
  const iterable = {
    values: [1,2,3],
    
    [Symbol.iterator]: function* () {
      for (const value of this.values) yield value;
    }
  };
  
  for (let value of iterable) {
    console.log(value);
  }
}
console.groupEnd();

console.group('generate progression');
{
  function* times(n) {
    for (let i=0; i<n; i++) yield i;
  }
  console.log('[...times(5)]', [...times(5)]);
}
console.groupEnd();
console.groupEnd();
