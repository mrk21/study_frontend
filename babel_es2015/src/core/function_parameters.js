export default function functionParameters() {
  console.group('ES-Next: Stage-4: Trailing commas in function parameter lists and calls');
  {
    console.log(`
      function foo(
        a,
        b,
      ) {
        return a + b;
      }
    `);

    function foo(
      a,
      b,
    ) {
      return a + b;
    }

    console.log(`
      foo(
        1,
        2,
      ) =>
    `, foo(
      1,
      2,
    ));
  }
  console.groupEnd();
}
