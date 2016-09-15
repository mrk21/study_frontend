console.group('map');
{
  const map = new Map();

  const stringKey = 'string';
  const objectKey = { a: 'object' };
  const funcKey = () => 'function';

  map.set(stringKey, 'string'); console.log('string key =>', stringKey);
  map.set(objectKey, 'object'); console.log('object key =>', objectKey);
  map.set(funcKey, 'function'); console.log('func key =>', funcKey);

  console.log('map.size =>', map.size);

  console.log('map.get(stringKey) =>', map.get(stringKey));
  console.log('map.get(objectKey) =>', map.get(objectKey));
  console.log('map.get(funcKey) =>', map.get(funcKey));
}
console.groupEnd();
