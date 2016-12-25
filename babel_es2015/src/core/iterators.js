export default async function iterators() {
  console.group('iterators');
  {
    console.log(`
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
    `);

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
    console.log(`
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
      await asyncIterator.next()
        .then(result => {
          console.log(result);
          return asyncIterator.next();
        })
        .then(result => {
          console.log(result);
          return asyncIterator.next();
        })
        .then(result => {
          console.log(result);
          return asyncIterator.next();
        })
        .then(result => {
          console.log(result);
          return asyncIterator.next();
        });
    `);

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
    await asyncIterator.next()
      .then(result => {
        console.log(result);
        return asyncIterator.next();
      })
      .then(result => {
        console.log(result);
        return asyncIterator.next();
      })
      .then(result => {
        console.log(result);
        return asyncIterator.next();
      })
      .then(result => {
        console.log(result);
        return asyncIterator.next();
      });

    console.group('for-await-of statement');
    {
      console.log(`
        for await (const value of iterable) {
          console.log(value);
        }
      `);
      for await (const value of iterable) {
        console.log(value);
      }
    }
  }
  console.groupEnd();
}
