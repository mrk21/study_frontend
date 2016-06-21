console.group('weak set');
{
  let weakSet = new WeakSet();
  let value = {a: 1};
  
  console.log('value => ', value);
  console.log('weakSet.add(value)');
  weakSet.add(value);
  console.log('has(value) =>', weakSet.has(value));
  console.log('[...weakSet]', [...weakSet]); // not iterable
  
  value = null;
  console.log('value =>', value);
  console.log('has(value) =>', weakSet.has(value));
}
console.groupEnd();
