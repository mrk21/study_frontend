console.group('iterators');
console.group('base');
{
  const iterable = {
    values: [1,2,3],
    
    [Symbol.iterator]() {
      let i = 0;
      return {
        next: () => {
          const value = this.values[i++];
          const done = typeof value === 'undefined';
          return { value, done };
        }
      };
    }
  };
  
  for (let value of iterable) {
    console.log(value);
  }
}
console.groupEnd();

console.group('generator');
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
console.groupEnd();
