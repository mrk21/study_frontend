console.group('reflect')
{
  const target = {
    value1: 1,
    value2: 2,
    func1() {},
  };
  console.log('target =>', target)
  console.log("Reflect.has(target, 'value1') =>", Reflect.has(target, 'value1'));
  console.log("Reflect.get(target, 'value1') =>", Reflect.get(target, 'value1'));
  console.log("Reflect.set(target, 'value1', 2) =>", Reflect.set(target, 'value1', 2));
  console.log("Reflect.deleteProperty(target, 'value1') =>", Reflect.deleteProperty(target, 'value1'));
  console.log("Reflect.ownKeys(target) =>", Reflect.ownKeys(target));
}
console.groupEnd();
