console.group('Class syntax');
{
  console.group('ES-next: Stage-2: Class Property Declarations');
  {
    class Hoge {
      hoge = 1;
      foo = () => this;
    }
    const hoge = new Hoge();
    const { foo } = hoge;

    console.log(`
      class Hoge {
        hoge = 1;
        foo = () => this;
      }
    `);
    console.log('hoge.hoge =>', hoge.hoge);
    console.log('const { foo } = hoge; foo() =>', foo());
  }
  console.groupEnd();
}
console.groupEnd();
