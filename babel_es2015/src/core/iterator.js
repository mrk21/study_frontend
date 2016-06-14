console.group('iterator');
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
