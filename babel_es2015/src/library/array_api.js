console.group('Array API');
{
  console.log("Array.from('abc') =>", Array.from('abc'));
  console.log('Array.of(1, 2, 3) =>', Array.of(1, 2, 3));
  console.log('[0, 0, 0].fill(7, 1) =>', [0, 0, 0].fill(7, 1));
  console.log('[1, 2, 3].find(v => v === 2) =>', [1, 2, 3].find(v => v === 2));
  console.log('[1, 2, 3].findIndex(v => v === 2) =>', [1, 2, 3].findIndex(v => v === 2));
  console.log('[1, 2, 3].copyWithin(2, 0) =>', [1, 2, 3].copyWithin(2, 0));
  console.log('[...[1, 2, 3].entries()] =>', [...[1, 2, 3].entries()]);
  console.log('[...[1, 2, 3].keys()] =>', [...[1, 2, 3].keys()]);
  console.log('[...[1, 2, 3].values()] =>', [...[1, 2, 3].values()]);

  console.group('ES2016');
  {
    console.log('[1, 2, 3].includes(2) =>', [1, 2, 3].includes(2));
  }
  console.groupEnd();
}
console.groupEnd();
