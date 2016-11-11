export default function decorators() {
  console.group('ES-next: Stage-2: decorators');
  {
    console.group('Base');
    {
      console.log(`
        class Hoge {
          @decorator
          instance = 1;

          @decorator()
          method() {
            console.log('Hoge.prototype.method()');
          }
        }

        function decorator(...args) {
          console.log('decorator()', ...args);
          return function(target, key, descriptor) {
            console.log('decorator(): target =>', target);
            console.log('decorator(): key =>', key);
            console.log('decorator(): descriptor =>', descriptor);
            return descriptor;
          };
        }
      `);

      class Hoge {
        @decorator
        instance = 1;

        @decorator()
        method() {
          console.log('Hoge.prototype.method()');
        }
      }

      function decorator(...args) {
        console.log('decorator()', ...args);
        return (target, key, descriptor) => {
          console.log('decorator(): target =>', target);
          console.log('decorator(): key =>', key);
          console.log('decorator(): descriptor =>', descriptor);
          return descriptor;
        };
      }

      const hoge = new Hoge();
      hoge.method();
    }
    console.groupEnd();

    console.group('property');
    {
      console.log(`
        class Hoge {
          @readonly;
          prop1 = 1;
        }

        function readonly(target, name, descriptor) {
          descriptor.writable = false;
          return descriptor;
        }
      `);

      class Hoge {
        @readonly;
        prop1 = 1;
      }

      function readonly(target, name, descriptor) {
        descriptor.writable = false;
        return descriptor;
      }

      const hoge = new Hoge();
      console.log('hoge.prop1 =>', hoge.prop1);
      try {
        console.log('hoge.prop1 = 2');
        hoge.prop1 = 2;
      } catch (e) {
        console.error(e);
      }
    }
    console.groupEnd();
  }
  console.groupEnd();

  console.group('method');
  {
    console.log(`
      class Hoge {
        @logger
        method(a, b) {
          return a * b;
        }
      }

      function logger(target, name, descriptor) {
        const original = descriptor.value.bind(this);

        descriptor.value = (...args) => {
          console.log(method: {name}, args: {args});
          return original(...args);
        };

        return descriptor;
      }
    `);

    class Hoge {
      @logger
      method(a, b) {
        return a * b;
      }
    }

    function logger(target, name, descriptor) {
      const original = descriptor.value.bind(this);

      descriptor.value = (...args) => {
        console.log(`method: ${name}, args: ${args}`);
        return original(...args);
      };

      return descriptor;
    }

    const hoge = new Hoge();
    console.log(hoge.method(2, 3));
  }
  console.groupEnd();

  console.group('class');
  {
    console.log(`
      function defineMethod(methodName) {
        return (target, name, descriptor) => {
          console.log(target, name, descriptor);
          target.prototype[methodName] = () => {
            console.log('method');
          };
          return descriptor;
        };
      }

      @defineMethod('method');
      class Hoge {}
    `);

    function defineMethod(methodName) {
      return (target, name, descriptor) => {
        console.log(target, name, descriptor);
        target.prototype[methodName] = () => {
          console.log('method');
        };
        return descriptor;
      };
    }

    @defineMethod('method')
    class Hoge {}

    const hoge = new Hoge();
    hoge.method();
  }
  console.groupEnd();

  console.group('ES5: defineProperty');
  {
    console.group('value');
    {
      console.log(`
        const obj = {};

        Object.defineProperty(obj, 'a', {
          value: 1,
        });
      `);

      const obj = {};

      Object.defineProperty(obj, 'a', {
        value: 1,
      });

      console.log('obj.a =>', obj.a);
    }
    console.groupEnd();

    console.group('get');
    {
      console.log(`
        const obj = {};

        Object.defineProperty(obj, 'a', {
          get() { return 1 },
        });
      `);

      const obj = {};

      Object.defineProperty(obj, 'a', {
        get() { return 1 },
      });

      console.log('obj.a =>', obj.a);
    }
    console.groupEnd();

    console.group('writable');
    {
      console.log(`
        const obj = {};

        Object.defineProperty(obj, 'a', {
          writable: false,
        });
      `);

      const obj = {};

      Object.defineProperty(obj, 'a', {
        writable: false,
      });

      try {
        console.log('obj.a = 1');
        obj.a = 1;
      } catch (e) {
        console.error(e);
      }
    }
    console.groupEnd();

    console.group('configurable');
    {
      console.log(`
        const obj = {};

        Object.defineProperty(obj, 'a', {
          configurable: false,
        });
      `);

      const obj = {};

      Object.defineProperty(obj, 'a', {
        configurable: false,
      });

      console.log('delete obj.a');
      try {
        delete obj.a;
      } catch (e) {
        console.error(e);
      }
    }
    console.groupEnd();

    console.group('enumerable');
    {
      console.log(`
        const obj = {
          a: 1,
        };

        Object.defineProperty(obj, 'b', {
          enumerable: false,
        });

        for (const key of Object.keys(obj)) {
          console.log(key);
        }
      `);

      const obj = {
        a: 1,
      };

      Object.defineProperty(obj, 'b', {
        enumerable: false,
      });

      for (const key of Object.keys(obj)) {
        console.log(key);
      }
    }
    console.groupEnd();
  }
  console.groupEnd();
}
