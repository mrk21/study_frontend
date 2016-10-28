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

    console.group('readonly');
    {
      console.log(`
        class Hoge {
          @readonly;
          prop1 = 1;
        }

        function readonly(target, name, descriptor) {
          descriptor.writable = false;
        }
      `);

      class Hoge {
        @readonly;
        prop1 = 1;
      }

      function readonly(target, name, descriptor) {
        descriptor.writable = false;
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
}
