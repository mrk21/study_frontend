export default function generator() {
  console.group('generator');
  {
    console.group('implement iterator');
    {
      const iterable = {
        values: [1, 2, 3],

        * [Symbol.iterator]() {
          for (const value of this.values) yield value;
        },
      };

      for (const value of iterable) {
        console.log(value);
      }
    }
    console.groupEnd();

    console.group('generate progression');
    {
      function* times(n) {
        for (let i = 0; i < n; i++) yield i;
      }
      console.log('[...times(5)]', [...times(5)]);
    }
    console.groupEnd();

    console.group('ES-Next: Stage-2: function.sent Meta Property');
    {
      console.log(`
        function * generatorFunc() {
          const a = function.sent;
          console.log('a =>', a);

          const b = yield;
          console.log('b =>', b);
        }
        const gen = generatorFunc();
        gen.next(1);
        gen.next(2);
      `);

      function * generatorFunc() {
        const a = function.sent;
        console.log('a =>', a);

        const b = yield;
        console.log('b =>', b);
      }

      const gen = generatorFunc();
      gen.next(1);
      gen.next(2);
    }
    console.groupEnd();
  }
  console.groupEnd();
}
