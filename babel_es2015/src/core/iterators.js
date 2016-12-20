export default function iterators() {
  console.group('iterators');
  {
    const iterable = {
      values: [1, 2, 3],

      [Symbol.iterator]() {
        let i = 0;
        return {
          next: () => {
            const value = this.values[i++];
            const done = typeof value === 'undefined';
            return { value, done };
          },
        };
      },
    };

    for (const value of iterable) {
      console.log(value);
    }
  }
  console.groupEnd();

  console.group('ES-next: Stage-2: Asynchronous Iterators');
  {
    const iterable = {
      values: [1, 2, 3],

      [Symbol.iterator]() {
        let i = 0;
        return {
          next: () => {
            return new Promise((resolve, reject) => {
              const value = this.values[i++];
              const done = typeof value === 'undefined';
              resolve({ value, done });
            });
          },
        };
      },
    };

    const asyncIterator = iterable[Symbol.iterator]();
    asyncIterator.next().then(result => console.log(result));

    // NOTICE: Compile error
    /*
    for await (const value of iterable) {
      console.log(value);
    }
    */
  }
  console.groupEnd();
}
