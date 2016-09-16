console.group('weak map');
{
  const weakMap = new WeakMap();

  let stringKey = String('string');
  let objectKey = { a: 'object' };
  let funcKey = () => 'function';

  let stringValue = 'string';
  let objectValue = { a: 'object' };
  let funcValue = () => 'function';

  console.log('stringKey =>', stringKey);
  console.log('objectKey =>', objectKey);
  console.log('funcKey =>', funcKey);

  console.log('stringValue =>', stringValue);
  console.log('objectValue =>', objectValue);
  console.log('funcValue =>', funcValue);

  weakMap.set(stringKey, stringValue);
  weakMap.set(objectKey, objectValue);
  weakMap.set(funcKey, funcValue);

  console.log('weakMap.has(stringKey) =>', weakMap.has(stringKey));
  console.log('weakMap.has(objectKey) =>', weakMap.has(objectKey));
  console.log('weakMap.has(funcKey) =>', weakMap.has(funcKey));

  console.group('stringKey');
  stringValue = null;
  console.log('stringValue = null');
  console.log('weakMap.has(stringKey) =>', weakMap.has(stringKey));
  stringKey = null;
  console.log('stringKey = null');
  console.log('weakMap.has(stringKey) =>', weakMap.has(stringKey));
  console.groupEnd();

  console.group('objectKey');
  objectValue = null;
  console.log('objectValue = null');
  console.log('weakMap.has(objectKey) =>', weakMap.has(objectKey));
  objectKey = null;
  console.log('objectKey = null');
  console.log('weakMap.has(objectKey) =>', weakMap.has(objectKey));
  console.groupEnd();

  console.group('funcKey');
  funcValue = null;
  console.log('funcValue = null');
  console.log('weakMap.has(funcKey) =>', weakMap.has(funcKey));
  funcKey = null;
  console.log('funcKey = null');
  console.log('weakMap.has(funcKey) =>', weakMap.has(funcKey));
  console.groupEnd();
}
console.groupEnd();
