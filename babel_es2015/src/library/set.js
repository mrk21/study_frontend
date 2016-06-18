console.group('set');
{
  let set = new Set();
  
  set.add(1); console.log('add(1) => length: ', set.size);
  set.add(2); console.log('add(2) => length: ', set.size);
  set.add(2); console.log('add(2) => length: ', set.size);
  
  console.log('has(0) =>', set.has(0));
  console.log('has(2) =>', set.has(2));
  
  set.delete(2);
  console.log('delete(2)')
  console.log('has(2) =>', set.has(2));
  
  console.log('[...set] =>', [...set]);
}
console.groupEnd();
