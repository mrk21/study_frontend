export default function decorators() {
  console.group('ES-next: Stage-2: decorators');
  {
    console.group('Base');
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
  }
  console.groupEnd();
}
