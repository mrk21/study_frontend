export default function decorators() {
  console.group('ES-next: Stage-2: decorators');
  {
    console.log(`
      class Hoge {
        @decorator()
        method() {
          console.log('Hoge.prototype.method()');
        }
      }

      function decorator() {
        return (target, key, descriptor) => {
          console.log('decorator(): target =>', target);
          console.log('decorator(): key =>', key);
          console.log('decorator(): descriptor =>', descriptor);
        };
      }
    `);

    class Hoge {
      @decorator()
      method() {
        console.log('Hoge.prototype.method()');
      }
    }

    function decorator() {
      return (target, key, descriptor) => {
        console.log('decorator(): target =>', target);
        console.log('decorator(): key =>', key);
        console.log('decorator(): descriptor =>', descriptor);
      };
    }

    const hoge = new Hoge();
    hoge.method();
  }
  console.groupEnd();
}
