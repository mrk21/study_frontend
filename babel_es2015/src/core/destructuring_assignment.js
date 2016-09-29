console.group('Destructuring assignment');
{
  console.group('ES-next: Stage-2: Rest and Spread properties');
  {
    console.group('Rest properties');
    {
      const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
      console.log('const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };');
      console.log('(x, y, z) =>', x, y, z);
    }
    console.groupEnd();

    console.group('Spread, properties');
    {
      const x = 1;
      const y = 2;
      const z = { a: 1, b: 2 };
      const n = { x, y, ...z };
      console.log(`
        const x = 1;
        const y = 2;
        const z = { a: 1, b: 2 };
        const n = { x, y, ...z };
      `);
      console.log('n =>', n);
    }
    console.groupEnd();
  }
  console.groupEnd();
}
console.groupEnd();
