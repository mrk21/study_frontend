export default function weakMap() {
  console.group('weak map');
  {
    const weakMap = new WeakMap();

    let objectKey = { a: 'object' };
    let funcKey = () => 'function';

    let objectValue = { a: 'object' };
    let funcValue = () => 'function';

    console.log('objectKey =>', objectKey);
    console.log('funcKey =>', funcKey);

    console.log('objectValue =>', objectValue);
    console.log('funcValue =>', funcValue);

    weakMap.set(objectKey, objectValue);
    weakMap.set(funcKey, funcValue);

    console.log('weakMap.has(objectKey) =>', weakMap.has(objectKey));
    console.log('weakMap.has(funcKey) =>', weakMap.has(funcKey));

    console.group('objectKey');
    {
      objectValue = null;
      console.log('objectValue = null');
      console.log('weakMap.has(objectKey) =>', weakMap.has(objectKey));
      objectKey = null;
      console.log('objectKey = null');
      console.log('weakMap.has(objectKey) =>', weakMap.has(objectKey));
    }
    console.groupEnd();

    console.group('funcKey');
    {
      funcValue = null;
      console.log('funcValue = null');
      console.log('weakMap.has(funcKey) =>', weakMap.has(funcKey));
      funcKey = null;
      console.log('funcKey = null');
      console.log('weakMap.has(funcKey) =>', weakMap.has(funcKey));
    }
    console.groupEnd();
  }
  console.groupEnd();
}
