export default function classSyntax() {
  console.group('Class syntax');
  {
    console.group('ES-next: Stage-2: Class Property Declarations');
    {
      class Hoge {
        static hoge = 1;
        hoge = 2;
        foo = () => this;
      }
      const hoge = new Hoge();
      const { foo } = hoge;

      console.log(`
        class Hoge {
          static hoge = 1;
          hoge = 2;
          foo = () => this;
        }
      `);
      console.log('Hoge.hoge =>', Hoge.hoge);
      console.log('hoge.hoge =>', hoge.hoge);
      console.log('const { foo } = hoge; foo() =>', foo());
    }
    console.groupEnd();
  }
  console.groupEnd();
}
